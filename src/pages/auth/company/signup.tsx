import { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import Input from "../../components/Input";
import DropDown from "../../components/DropDown";
import { Form, Formik } from "formik";
import { UseAuth } from "../../hooks/useAuth";
import { signOut, useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import { ROLE } from "@prisma/client";
import Image from "next/image";
import NavBar from '../../components/NavBar'
import Logo from '../../../public/Logo.svg';


const SignUp: NextPage = () => {
  const { data: session } = useSession();
  const mutateSignup = trpc.signup.createSignup.useMutation();

  const initialValues = {
    bio: "",
    userType: "USER",
    location: "",
    social_links: "",
  };
  return (
    <>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center space-y-6 container-md mx-24">
        <NavBar />
        <div className="flex flex-col items-center space-y-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={session?.user?.image ?? ""} />
            </div>
          </div>
          <div className="">
            <p className="max-w-xs text-center">
              Welcome {session?.user?.name}, Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ab, laboriosam.
            </p>
          </div>
        </div>
        <Formik

          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (session && session.user)
              // mutateSignup.
              mutateSignup.mutate({
                bio: values.bio,
                location: values.location,
                type: values.userType,
                userId: session.user.id,
                socialMediaLinks: [
                  { name: "linkedIn", url: values.social_links },
                ],
              });
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, errors, touched }) => {
            return (
              <Form className="w-FormWidth border">
                <div className="flex flex-col justify-center px-10 py-10 mx-auto">

                  <div className="w-full">
                    <Input
                      label="Bio"
                      type="url"
                      placeholder="Type here"
                      className="input input-bordered input-primaryC w-full  max-w-lg"
                      name="bio"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <Input
                    label="Bio"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primaryC  w-full max-w-full"
                    name="bio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.bio}
                    touched={touched.bio}
                  />
                  <Input
                    label="Location"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.location}
                    touched={touched.location}
                  />
                  <Input
                    label="LinkedIn"
                    name="social_links"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.social_links}
                    touched={touched.social_links}
                  />
                  <select
                    name="userType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // error={errors.userType}
                    // touched={touched.userType}
                    className="rounded-md bg-base-100 p-2"
                  >
                    <option value="COMPANY">COMPANY</option>
                    <option value="USER">USER</option>
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
    </>
  );
};

export default SignUp;
