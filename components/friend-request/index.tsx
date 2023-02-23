import { useState } from "react";
import FindFriends from "../find-friends";
import FriendCard from "../friend-card";
import SendCryptoForm from "../send-crypto-form";
import { user_atom } from "../stores/user.store";
import { useAtom } from "jotai";

function FriendRequest() {
  const [user_data] = useAtom(user_atom);
  const [current_tab, setCurrentTab] = useState("friend_list"); // friend_list, pending_requests
  const [form_data, setFormData] = useState(null);

  const handleSendCrypto = (name, profile_img) => {
    setFormData((prev) => {
      return { ...prev, name, profile_img };
    });
  };

  const handleCloseSendCrypto = () => {
    setFormData(null);
  };

  return (
    <div className=" min-h-screen">
      <div className="w-full h-screen">
        <div className="">
          {/* Tabs to see pending requests */}
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentTab("friend_list")}
              className="px-4 py-6 flex text-5xl font-bold text-[#1e5cef] justify-center items-center"
            >
              Community Peers
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {user_data?.friends?.map((item, index) => (
              <FriendCard
                profile_image={item?.profile_image}
                name={item?.name}
                client_id={item?.client_id}
                is_friend={true}
                handleSendCrypto={handleSendCrypto}
              />
            ))}
          </div>

          {/* Form Data to send cryptos */}
          {form_data !== null && (
            <SendCryptoForm
              receiver_name={form_data?.name}
              receiver_img={form_data?.profile_image}
              coin_icon="https://files.coinswitch.co/public/coins/btc.png"
              coin_name="Bitcoin"
              coin_symbol="BTC"
              handleCloseSendCrypto={handleCloseSendCrypto}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
