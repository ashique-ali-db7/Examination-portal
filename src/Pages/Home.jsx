import React from "react";
import HomeButtons from "../Components/HomeButtons/HomeButtons";
import { useSelector } from "react-redux";
import AdminForm from "../Components/AdminForm/AdminForm";
import UserForm from "../Components/UserForm/UserForm";
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
  }
}

export default Home;
