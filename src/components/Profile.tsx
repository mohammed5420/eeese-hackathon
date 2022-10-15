import { User } from "@prisma/client";
import React from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import { HiOutlineLink } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="w-full max-w-2xl rounded-lg border-2 border-primaryC p-4">
      <div className="relative flex flex-col items-center justify-center">
        <div className="avatar absolute -top-14">
          <div className="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
      <div className="space-y-8 text-center">
        <div className="relative mt-12 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold">6 - 12 Years</h2>
          <h4 className="text-sm">Expert</h4>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold">Dennis Lvy</h2>
          <p className="text-sm text-gray-700">
            Location Proffered: <span className="font-bold">Remote</span>
          </p>
        </div>
        <div className="">
          <p className="text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            adipisci saepe maiores neque quisquam fuga numquam, possimus tempora
            earum ducimus!
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="btn border-none bg-indigo-300 hover:bg-indigo-200">
            <p className="mr-2 text-indigo-500">Pin For Later</p>
            <BsFillPinAngleFill fill="#333" />
          </button>

          <button className="btn border-none bg-indigo-300 hover:bg-indigo-200">
            <p className="mr-2 text-indigo-500">See Profile</p>
            <FaLink fill="#333" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Tags name="Reactjs" />
          <Tags name="Github" />
          <Tags name="Tailwindcss" />
          <Tags name="Nextjs" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex max-w-fit cursor-pointer items-center justify-center gap-2 rounded-lg p-2 underline">
            <h2>Email</h2>
            <AiOutlineMessage />
          </div>
          <div className="flex max-w-fit cursor-pointer items-center justify-center gap-2 rounded-lg p-2 underline">
            <h2>Github</h2>
            <BsGithub />
          </div>
          <div className="flex max-w-fit cursor-pointer items-center justify-center gap-2 rounded-lg p-2 underline">
            <h2>Portfolio</h2>
            <FaLink />
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  name: string;
}
const Tags = ({ name }: Props) => {
  return (
    <div className="max-w-fit rounded-lg bg-green-100 p-2">
      <p className="text-green-800">{name}</p>
    </div>
  );
};
export default Profile;
