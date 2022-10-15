import { JobType } from "@prisma/client";
import { NextPage } from "next";
import Link from "next/link";
import { trpc } from "../../../utils/trpc";

const JobsList: NextPage = () => {
  const { data } = trpc.job.getAllJobs.useQuery();
  return (
    <div className="">
      <h2>Jobs List</h2>
      <div className="">
        {data && (
          <div className="">
            {data.map((job) => (
              <JobCard
                key={job.id}
                description={job.jobDescription}
                title={job.title}
                type={job.jobType}
                id={job.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsList

interface CardProps {
  title: string;
  description: string;
  type: string;
  id: number;
}
const JobCard = ({ title, description, type, id }: CardProps) => {
  return (
    <div className="w-full max-w-sm">
      <h2>Title: {title}</h2>
      <h2>Description: {description}</h2>
      <h2>Job Type: {type}</h2>
      <Link className="btn btn-primary" href={`/job/${id}`}>
        <a className="text-primary">Apply</a>
      </Link>
    </div>
  );
};
