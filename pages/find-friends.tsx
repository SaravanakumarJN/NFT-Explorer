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
import ThreeDots from "../components/animation/three-dots";

function FindFriends() {
  const [user_data, setUserData] = useAtom(user_atom);
  const [login_error, setLoginError] = useState("");

  const [current_value, setCurrentValue] = useState("");
  const [friend_data, setFriendData] = useState(null);
  const [is_logged_in, setIsLoggedIn] = useState(false);
  const [is_login_loading, setIsLoginLoading] = useState(false);
  const [open_login, setOpenLogin] = useState(false);
  const [find_friend_error, setFindFriendError] = useState("");
  const [became_friend, setBecameFriend] = useState(false);
  const [find_friend_progress, setFindFriendProgress] = useState(false);

  const handleChange = (event) => {
    const { value } = event?.target;
    setFindFriendError("");
    setCurrentValue(value);
  };

  const handleUpdateFriends = async () => {
    const myRef = doc(firebaseDB, "users", user_data?.client_id);

    const { friends, ...other_data } = friend_data;

    const docref = await updateDoc(myRef, {
      friends: arrayUnion({ ...other_data }),
    });

    setBecameFriend(true);
    getUserDetails(user_data?.client_id);
  };

  const handleFindFriend = async () => {
    setFindFriendProgress(true);
    if (current_value === user_data?.client_id) {
      setFindFriendError("You can't search for yourself.");
      setFindFriendProgress(false);
      return;
    }
    const userRef = doc(firebaseDB, "users", `${current_value}`);
    const user = await getDoc(userRef);

    if (user?.exists()) {
      const user_details = await (await getDoc(userRef)).data();
      console.log("user_details", user_details);
      setFriendData(user_details);
    } else {
      setFindFriendError("Oops, user doesn't exists.");
    }
    setFindFriendProgress(false);
  };

  const handleLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenLogin(false);
  };

  const getUserDetails = async (phone_number) => {
    setIsLoginLoading(true);
    const userRef = doc(firebaseDB, "users", `${phone_number}`);
    const user_details = await (await getDoc(userRef)).data();

    setUserData(user_details);
    setIsLoggedIn(true);
    setOpenLogin(false);
    setIsLoginLoading(false);
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
                className="cursor-pointer bg-[#1e5cef] text-white py-2 px-8 uppercase rounded-lg"
              >
                {find_friend_progress ? (
                  <ThreeDots color="text-white" />
                ) : (
                  "Search"
                )}
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
                became_friend={became_friend}
              />
            )}
            {find_friend_error !== "" && (
              <div className="text-red-500">{find_friend_error}</div>
            )}
          </>
        ) : (
          <LoginDialog
            handleCloseLoginDialog={handleCloseLoginDialog}
            getUserDetails={getUserDetails}
            login_error={login_error}
            setLoginError={setLoginError}
            is_login_loading={is_login_loading}
          />
        )}
      </div>
    </Layout>
  );
}

export default memo(FindFriends);
