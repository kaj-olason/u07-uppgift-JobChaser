import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Root {
  "00-warning": string;
  "0-legal-notice": string;
  "job-count": number;
  "total-job-count": number;
  jobs: Job[];
}

interface Job {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  tags: string[];
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
  company_logo_url?: string;
}

export const jobApi = createApi({
  reducerPath: "jobApi", // Ensure this matches store.ts
  baseQuery: fetchBaseQuery({
    baseUrl: "https://remotive.com",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<Root, void>({
      query: () => "/api/remote-jobs",
    }),
  }),
});

export const { useGetJobsQuery } = jobApi;
