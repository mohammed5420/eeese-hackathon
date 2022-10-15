import { JobOption, JobType } from "@prisma/client";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Input from "../../../components/Input";
import { trpc } from "../../../utils/trpc";

const NewJob: NextPage = () => {
  const { data: session } = useSession();
  const mutateJob = trpc.job.createJob.useMutation();

  const initialValues = {
    jobTitle: "",
    salary: 0,
    jobType: JobType.FULLTIME,
    jobOptions: JobOption.ONSITE,
    jobDescription: "",
  };

  const validationSchema = z.object({
    jobTitle: z.string(),
    salary: z.number(),
    jobType: z.enum(["FULLTIME", "PARTTIME"]),
    jobOptions: z.enum(["ONSITE", "REMOTE"]),
    jobDescription: z.string(),
  });

  if (session && session.user && session.user.role == "USER") {
    Router.push("/");
  }
  return (
    <div className="">
      <div className="flex h-screen flex-col items-center justify-center space-y-6">
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={(values, actions) => {
            if (session && session.user) {
              mutateJob.mutate({
                companyId: session.user.id,
                jobDescription: values.jobDescription,
                jobOption: values.jobOptions,
                jobType: values.jobType,
                salary: values.salary,
                title: values.jobTitle,
                jobRequirements: ["Reactjs", "Typescript"],
              });
            }
          }}
        >
          {({ handleChange, handleBlur, errors, touched }) => {
            return (
              <Form>
                <div className="flex flex-col justify-center space-y-3 bg-base-300 p-4">
                  <Input
                    label="Job Title"
                    type="text"
                    placeholder="Type here"
                    name="jobTitle"
                    className="input input-bordered input-lg w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.jobTitle}
                    touched={touched.jobTitle}
                  />
                  <Input
                    label="salary"
                    name="salary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.salary}
                    touched={touched.salary}
                    type="number"
                  />
                  <textarea
                    name="jobDescription"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Job Description"
                    className="rounded-md bg-base-100 p-1"
                  />
                  <select
                    name="jobOptions"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded-md bg-base-100 p-2"
                  >
                    <option value={JobOption.ONSITE}>ONSITE</option>
                    <option value={JobOption.REMOTE}>REMOTE</option>
                  </select>
                  <select
                    name="jobType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded-md bg-base-100 p-2"
                  >
                    <option value={JobType.FULLTIME}>FULLTIME</option>
                    <option value={JobType.PARTTIME}>PARTTIME</option>
                  </select>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default NewJob;
