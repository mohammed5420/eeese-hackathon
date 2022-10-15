import { User } from "@prisma/client";
import React from "react";

const Profile = () => {
  return (
    <div className="border border-primaryC">
      <div className="personal-info">
        <img src="https://api.lorem.space/image/face?w=150&h=150" alt="" />
        <h2>6 - 12 Years</h2>
        <h4>Expert</h4>
      </div>
      <div className="">
        <h2>Dennis Lvy</h2>
        <p>Location Proffered: Remote</p>
      </div>
      <div className="">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          adipisci saepe maiores neque quisquam fuga numquam, possimus tempora
          earum ducimus!
        </p>
      </div>
      <div className="actions">
        <button className="btn btn-primary">Pin For Later</button>
      </div>
    </div>
  );
};

export default Profile;
