import { useSession } from "next-auth/react";
import Router from "next/router";

export const UseAuth = () => {
  const { status, data } = useSession();
  if (status == "unauthenticated") {
    Router.push("/");
  }
  if (data && data.user && data.user.isNew == 1) {
    Router.push("/signup");
  }
  return { status, session: data, isNew: data?.user?.isNew };
};
