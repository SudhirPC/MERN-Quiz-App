import React from "react";
import { useSelector } from "react-redux";
import { Admin } from "../Admin/Admin.jsx";
import { Profile } from "./Profile.jsx";

export const ProfileMain = () => {
  const adminId = useSelector((state) => state.mernQuize.adminId);
  return <div>{adminId ? <Admin /> : <Profile />}</div>;
};
