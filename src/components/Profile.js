import React from "react";
import "./profile.css";
import Navbar from "./navbar";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutUser = () => {
    dispatch(logout(auth.signOut()));
    toast.success("Logout SuccessFully!");
  };

  return (
    <div className="profile_screen">
      <Navbar />
      <div className="profile_screen_body">
        <h1>Edit Profile</h1>
        <div className="profile_screen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix_logo"
          />
          <div className="profileScreen_details">
            <h2>{user?.email}🔥🔥🔥</h2>
            <div className="profile_screens_plains">
              <h2>Welcome To MemberShip</h2>
              <button onClick={logoutUser} className="profile_screen_out">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
