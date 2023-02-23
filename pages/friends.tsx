import React from "react";
import Layout from "../components/Layout";

import { useState } from "react";
import { user_atom } from "../components/stores/user.store";
import { useAtom } from "jotai";
import FriendRequest from "../components/friend-request";
import LoginDialog from "../components/login-dialog";

import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseDB } from "../firebase.cofig";

const Dashboard = () => {
  const [is_logged_in, setIsLoggedIn] = useState(false);
  const [user_data, setUserData] = useAtom(user_atom);
  const [form_data, setFormData] = useState(null);
  const [open_login, setOpenLogin] = useState(false);

  const handleSendCrypto = (name, profile_img) => {
    setFormData((prev) => {
      return { ...prev, name, profile_img };
    });
  };

  const handleCloseSendCrypto = () => {
    setFormData(null);
  };

  const handleLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenLogin(false);
  };

  const getUserDetails = async (phone_number) => {
    const userRef = doc(firebaseDB, "users", `91${phone_number}`);
    const user_details = await (await getDoc(userRef)).data();
    setUserData(user_details);
    setIsLoggedIn(true);
    setOpenLogin(false);
  };

  return (
    <Layout>
      <div className=" min-h-screen">
        <div className="w-full h-screen flex justify-center">
          <div className="h-96 w-[35rem]">
            {user_data !== null ? (
              <FriendRequest />
            ) : (
              <LoginDialog
                handleCloseLoginDialog={handleCloseLoginDialog}
                getUserDetails={getUserDetails}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
