import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { trpc } from "../../../utils/trpc";

const JobApplication = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  let dynamicRoute: string;
  if (typeof id == "string") {
    dynamicRoute = id;
  } else if (id && typeof id[0] == "string") {
    dynamicRoute = id[0];
  } else {
    return (
      <>
        <h2>Not Found</h2>
      </>
    );
  }

  const { data, isLoading } = trpc.job.getJobById.useQuery({
    id: parseInt(dynamicRoute),
  });

  const mutateApplication = trpc.job.applyForJob.useMutation();

  const applyJob = async () => {
    if (session && session.user)
      await mutateApplication.mutateAsync({
        jobId: parseInt(dynamicRoute),
        personId: parseInt(session.user.id),
      });
  };
  return (
    <div>
      <div className="">
        {data && (
          <div className="w-full max-w-sm">
            <h2>Title: {data.title}</h2>
            <h2>Description: {data.jobDescription}</h2>
            <h2>Job Type: {data.jobType}</h2>
            {session && session.user && session.user.id && (
              <button className="btn btn-primary" onClick={applyJob}>
                Apply Now
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplication;
