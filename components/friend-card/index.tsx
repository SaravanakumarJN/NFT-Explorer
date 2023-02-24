import { memo, useState } from "react";
import { useAtom } from "jotai";
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
import { user_atom } from "../stores/user.store";

function FriendCard({
  profile_image,
  name,
  client_id,
  is_friend,
  handleSendCrypto,
  handleUpdateFriends,
  became_friend = false,
}) {
  return (
    <div className="overflow-hidden flex items-center w-[500px] gap-4 p-4 justify-between rounded bg-white">
      <div className="rounded">
        <img
          src={profile_image}
          width="50px"
          height="50px"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <span className="">{client_id}</span>
      </div>
      {became_friend ? (
        <img className="scale-[2] w-11" src="https://i.gifer.com/7efs.gif" />
      ) : (
        !is_friend && (
          <button
            onClick={() => {
              handleUpdateFriends();
            }}
            className=" bg-[#3772ff] text-white p-2 rounded-lg"
          >
            Add Friend
          </button>
        )
      )}
      {is_friend && (
        <button
          onClick={() => {
            handleSendCrypto(name, profile_image, client_id);
          }}
          className="bg-[#3772ff] text-white p-2 rounded-lg"
        >
          Send Cryptos
        </button>
      )}
    </div>
  );
}

export default memo(FriendCard);
