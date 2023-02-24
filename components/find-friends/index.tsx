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
import { firebaseDB } from "../../firebase.cofig";
import FriendCard from "../friend-card";
import { user_atom } from "../stores/user.store";
import { useAtom } from "jotai";
import ThreeDots from "../animation/three-dots";

function FindFriends() {
  const [user_data, setUserData] = useAtom(user_atom);
  const [current_value, setCurrentValue] = useState("");
  const [friend_data, setFriendData] = useState(null);
  const [find_friend_progress, setFindFriendProgress] = useState(false);

  const handleChange = (event) => {
    const { value } = event?.target;
    setCurrentValue(value);
  };

  const handleUpdateFriends = async () => {
    const myRef = doc(firebaseDB, "users", user_data?.client_id);

    const { friends, ...other_data } = friend_data;

    const docref = await updateDoc(myRef, {
      friends: arrayUnion({ ...other_data }),
    });
  };

  const handleFindFriend = async () => {
    setFriendData(null);
    setFindFriendProgress(true);
    const userRef = doc(firebaseDB, "users", `${current_value}`);
    const user_details = await (await getDoc(userRef)).data();
    setFriendData(user_details);
    setFindFriendProgress(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full h-screen justify-center">
      <div>
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
          {find_friend_progress ? <ThreeDots color="text-white" /> : "Search"}
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
      )}
    </div>
  );
}

export default memo(FindFriends);
