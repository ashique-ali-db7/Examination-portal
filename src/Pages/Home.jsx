import React from "react";
import HomeButtons from "../Components/HomeButtons/HomeButtons";
import { useSelector } from "react-redux";
import AdminForm from "../Components/AdminForm/AdminForm";
import UserForm from "../Components/UserForm/UserForm";
import Success from "../Components/Success/Success";
function Home() {
  const data = useSelector((state) => state.status);
  if (data.status === "null") {
    return (
      <div>
        <HomeButtons />
      </div>
    );
  } else if (data.status === "Admin") {
    return (
      <div>
        <HomeButtons />
        <AdminForm />
      </div>
    );
  } else if (data.status === "User") {
    return (
      <div>
        <HomeButtons />
        <UserForm />
      </div>
    );
  } else if (data.status === "Success") {
    return (
      <div>
        <HomeButtons />
        <Success />
      </div>
    );
  }
}

export default Home;
