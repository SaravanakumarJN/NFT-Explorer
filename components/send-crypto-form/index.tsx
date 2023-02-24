import { memo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
import { useAtom } from "jotai";
import { user_atom } from "../stores/user.store";
import ThreeDots from "../animation/three-dots";

function SendCryptoForm({
  receiver_name,
  receiver_img,
  coin_name,
  coin_symbol,
  coin_icon,
  handleCloseSendCrypto,
  client_id,
}) {
  const [amount, setAmount] = useState("");
  const [user_data, setUserData] = useAtom(user_atom);
  const [in_progress, setInProgress] = useState(false);
  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });

  const handleChange = (event) => {
    const { value } = event?.target;
    setAmount(value);
  };

  const handleAddUserBalance = async () => {
    const cityRef = doc(firebaseDB, "balances", "9643011147");
    const docRef = await setDoc(cityRef, {
      btc: "100",
      eth: "1000",
      matic: "10000",
    });

    console.log(docRef);
  };

  const handleTransfer = async (symbol, quantity) => {
    setInProgress(true);
    symbol = symbol?.toLowerCase();
    const userRef = doc(firebaseDB, "users", user_data?.client_id);
    const userWalletRef = doc(firebaseDB, "balances", user_data?.client_id);

    const receiverRef = doc(firebaseDB, "users", client_id);
    const receiverWalletRef = doc(firebaseDB, "balances", client_id);

    const receiver = await getDoc(receiverRef);
    const receiverWallet = await getDoc(receiverWalletRef);

    if (receiver?.exists() && receiverWallet?.exists()) {
      const receiver_details = await (await getDoc(receiverWalletRef)).data();
      const user_wallet_details = await (await getDoc(userWalletRef)).data();

      if (Number(user_wallet_details?.[symbol]) >= Number(quantity)) {
        const docref = await updateDoc(receiverWalletRef, {
          [symbol]: Number(receiver_details?.[symbol]) + Number(quantity),
        });
        const doc2ref = await updateDoc(userWalletRef, {
          [symbol]: Number(user_wallet_details?.[symbol]) - Number(quantity),
        });
      }
      notify("Transaction Completed!");
    } else {
      console.log("user doesn't exists");
    }
    setInProgress(false);
    handleCloseSendCrypto();
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] h-[250px] bg-black rounded-3xl p-4">
        <div className="flex relative">
          <button
            onClick={handleCloseSendCrypto}
            className="cursor-pointer text-white font-semibold absolute top-2 right-2"
          >
            Close
          </button>
          <div className="flex gap-2">
            <img
              className="rounded-full"
              width="30px"
              height="30px"
              src={receiver_img}
            />
            <span className="text-white">{receiver_name}</span>
            <span className="text-[#6b6b6b] font-bold">Reciever</span>
          </div>
        </div>
        <div className="pt-5">
          <div>
            <h3 className="text-white font-bold text-xl">{coin_name}</h3>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              autoFocus={true}
              value={amount}
              onChange={handleChange}
              placeholder={`0 ${coin_symbol}`}
              maxLength={amount?.length}
              className="outline-none text-white text-5xl bg-transparent w-[150px]"
            />
            <div className="w-[35px] h-[35px]">
              <img className="w-full h-full" src={coin_icon} />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <button
            onClick={() => handleTransfer(coin_symbol, amount)}
            className="cursor-pointer bg-[#1e5cef] flex justify-center items-center py-3 px-5 text-white rounded-3xl "
          >
            {in_progress ? <ThreeDots color="text-white" /> : "Send Crypto"}
          </button>
          {/* <button
            onClick={handleAddUserBalance}
            className="bg-[#1e5cef] flex justify-center items-center py-3 px-5 text-white rounded-3xl "
          >
            Add Balance
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default memo(SendCryptoForm);
