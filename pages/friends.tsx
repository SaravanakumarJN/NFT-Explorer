import React, { useEffect } from "react";
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
  const [login_error, setLoginError] = useState("");
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

  const handleAddUser = async () => {
    const cityRef = doc(firebaseDB, "users", "8360025206");
    const docRef = await setDoc(cityRef, {
      profile_image:
        "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      name: "Jaskaran Singh",
      client_id: "8360025206",
      wallet_address: "",
      community_id: "@jaskaran.s",
      friends: [],
    });

    console.log(docRef);
  };

  const handleCloseLoginDialog = () => {
    setOpenLogin(false);
  };

  const getUserDetails = async (phone_number) => {
    const userRef = doc(firebaseDB, "users", `${phone_number}`);
    const user = await getDoc(userRef);

    if (user?.exists()) {
      const user_details = await (await getDoc(userRef)).data();
      console.log("userRef", userRef, user_details);
      setUserData(user_details);
      setIsLoggedIn(true);
      setOpenLogin(false);
    } else {
      setLoginError("User Doesn't Exists");
    }
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
                login_error={login_error}
                setLoginError={setLoginError}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
