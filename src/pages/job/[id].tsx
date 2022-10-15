import { useRouter } from "next/router";
import React from "react";

const JobApplication = () => {
    const router = useRouter()
    const { id } = router.query
    let dynamicRoute: string
    if (typeof id == "string") {
      dynamicRoute = id
    } else if (id && typeof id[0] == "string") {
      dynamicRoute = id[0]
    } else {
      return (
        <>
          <h2>Not Found</h2>
        </>
      )
    }
  return <div>JobApplication</div>;
};

export default JobApplication;
