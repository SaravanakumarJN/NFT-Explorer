import { memo, useState } from "react";
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
import { useAtom } from "jotai";
import { user_atom } from "../components/stores/user.store";
import FriendCard from "../components/friend-card";
import Layout from "../components/Layout";
import LoginDialog from "../components/login-dialog";

function FindFriends() {
  const [user_data, setUserData] = useAtom(user_atom);
  const [current_value, setCurrentValue] = useState("");
  const [friend_data, setFriendData] = useState(null);
  const [is_logged_in, setIsLoggedIn] = useState(false);
  const [open_login, setOpenLogin] = useState(false);

  const handleChange = (event) => {
    const { value } = event?.target;
    setCurrentValue(value);
  };

  const handleUpdateFriends = async () => {
    const myRef = doc(
      firebaseDB,
      "users",
      user_data?.client_id?.split("+")?.[1]
    );

    const { friends, ...other_data } = friend_data;

    const docref = await updateDoc(myRef, {
      friends: arrayUnion({ ...other_data }),
    });
    console.log("fdk", docref);
  };

  const handleFindFriend = async () => {
    console.log("current_value:", current_value);
    const userRef = doc(firebaseDB, "users", `91${current_value}`);
    const user_details = await (await getDoc(userRef)).data();
    setFriendData(user_details);
    console.log("friends:", user_details);
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
      <div className="flex flex-col gap-4 w-full p-4 justify-center items-center">
        {user_data !== null ? (
          <>
            <div>
              <h3 className="py-6 flex text-5xl font-bold text-[#1e5cef] ">
                Connect with Friend
              </h3>
            </div>
            <div className="flex gap-2">
              <input
                className="outline-none bg-[#292929] py-2 px-8 rounded text-white"
                placeholder="Enter Friend's Code"
                type="text"
                value={current_value}
                onChange={handleChange}
              />
              <button
                onClick={handleFindFriend}
                className="bg-[#1e5cef] text-white py-2 px-8 uppercase rounded-lg"
              >
                Search
              </button>
            </div>
            {friend_data !== null && (
              <FriendCard
                profile_image={friend_data?.profile_image}
                name={friend_data?.name}
                client_id={friend_data?.client_id}
                is_friend={false}
                handleSendCrypto={() => {}}
                handleUpdateFriends={handleUpdateFriends}
              />
            )}{" "}
          </>
        ) : (
          <LoginDialog
            handleCloseLoginDialog={handleCloseLoginDialog}
            getUserDetails={getUserDetails}
          />
        )}
      </div>
    </Layout>
  );
}

export default memo(FindFriends);
