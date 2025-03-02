"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { easeOut, motion } from "framer-motion";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      // setError()
    }
  };

  return (
    <div className="flex justify-center items-center h-[70vh] border">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: easeOut }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col justify-end gap-4 ">
            <input
              {...register("email")}
              type="text"
              className="border border-slate-600 rounded-md pl-2"
              placeholder="Email"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
            <input
              {...register("password")}
              type="text"
              name="password"
              className="border border-slate-600 rounded-md pl-2"
              placeholder="Password"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
            <button
              disabled={isSubmitting}
              type="submit"
              className=" bg-slate-500 py-2 rounded-md cursor-pointer text-white"
            >
              {isSubmitting ? "Loading..." : "Submit"}{" "}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signin;
