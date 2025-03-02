"use client";
import { useGetJobsQuery } from "@/redux/services/jobAPI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  updatePlace,
  updateCategory,
  updateFreeSearch,
} from "../../redux/slices/jobFilterSlice";
import Spinner from "@/components/Spinner";
import { AnimatePresence, motion } from "framer-motion";

interface jobs {
  id: number;
  job_type: string;
  category: string;
  company_name: string;
  title: string;
  tags: string[];
}

export default function Home() {
  const { data, isLoading } = useGetJobsQuery();
  console.log(data);

  const category = data?.jobs.map((item) => item.category);
  const deduped = Array.from(new Set(category));

  const jobType = data?.jobs.map((item) => item.job_type);
  const dedupedJobType = Array.from(new Set(jobType));

  const dispatch = useDispatch();
  const jobFilter = useSelector((state: RootState) => state.jobFilter);

  const jobfilter = data?.jobs.filter((jobs: jobs) => {
    return (
      jobs.job_type.includes(jobFilter.jobType) &&
      jobs.category.includes(jobFilter.jobCategory) &&
      jobs.title.toUpperCase().includes(jobFilter.jobFreeSearch.toUpperCase())
    );
  });

  if (isLoading)
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <div className="flex justify-center gap-4 w-full my-4">
        <input
          id="place"
          type="text"
          placeholder="Search by Title"
          value={jobFilter.jobFreeSearch}
          onChange={(e) => dispatch(updateFreeSearch(e.target.value))}
          className="border border-slate-500 rounded-md w-[200px] pl-2"
        />
      </div>
      <div className="flex justify-center gap-4 w-full">
        <div>
          <label htmlFor="place" className="sr-only">
            Var vill du äta?
          </label>

          <select
            id="place"
            value={jobFilter.jobType}
            onChange={(e) => dispatch(updatePlace(e.target.value))}
            className="w-full dark:text-black"
          >
            <option value="">Choose job type?</option>
            {dedupedJobType?.map((item, index) => (
              <option key={index} value={item}>
                {item === "full_time"
                  ? "Full time"
                  : item && item === "part_time"
                  ? "Part time"
                  : item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="place" className="sr-only">
            Var vill du äta?
          </label>
          <select
            id="place"
            value={jobFilter.jobType}
            onChange={(e) => dispatch(updateCategory(e.target.value))}
            className="w-full dark:text-black"
          >
            <option value="">Choose job category?</option>
            {deduped?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={``}>
        <AnimatePresence>
          {jobfilter?.map((job: jobs, i) => (
            <motion.div
              key={job.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -50,
                },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                    delay: i * 0.35,
                  },
                }),
              }}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <div className="w-[70%] py-4 m-auto">
                <div className="flex items-center gap-4">
                  {/* 
                  <div
                    style={{
                      position: "relative",
                      width: "50px",
                      height: "50px",
                      border: "1px solid #000",
                      borderRadius: "100%",
                      zIndex: 9999,
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                   
                <Image
                  src={job.company_logo}
                  alt="comany logo"
                  height={0}
                  width={0}
                  layout="fill"
                  objectFit="contain"
                  style={{ zIndex: 999 }}
                />
                
                  </div>
                  */}
                  <div>{job.company_name}</div>
                </div>
                <div className={``}>{job.title}</div>
                <div>Category: {job.category}</div>
                <div className="flex flex-wrap gap-3">
                  {job.tags.map((item: string, index: number) => (
                    <div
                      key={index}
                      className=" bg-slate-300 px-2 shrink-0 dark:text-black"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
