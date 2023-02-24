import { useState } from "react";
import FindFriends from "../find-friends";
import FriendCard from "../friend-card";
import SendCryptoForm from "../send-crypto-form";
import { user_atom } from "../stores/user.store";
import { useAtom } from "jotai";
import Link from "next/link";

function FriendRequest() {
  const [user_data] = useAtom(user_atom);
  const [form_data, setFormData] = useState(null);

  const handleSendCrypto = (name, profile_img, client_id) => {
    setFormData((prev) => {
      return { ...prev, name, profile_image: profile_img, client_id };
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
            <button className="cursor-pointer py-6 flex text-5xl font-bold text-[#1e5cef] justify-center items-center">
              Community Peers
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {user_data?.friends?.length === 0 ? (
              <div className="flex flex-col gap-2">
                <h3>Seems like you are new here.</h3>
                <Link href="/find-friends" className="cursor-pointer">
                  <span className="bg-[#1e5cef] text-white py-2 px-8 uppercase rounded-lg max-w-fit">
                    Find Friends
                  </span>
                </Link>
              </div>
            ) : (
              user_data?.friends?.map((item, index) => (
                <FriendCard
                  profile_image={item?.profile_image}
                  name={item?.name}
                  client_id={item?.client_id}
                  is_friend={true}
                  handleSendCrypto={handleSendCrypto}
                />
              ))
            )}
          </div>

          {/* Form Data to send cryptos */}
          {form_data !== null && (
            <SendCryptoForm
              receiver_name={form_data?.name}
              receiver_img={form_data?.profile_image}
              client_id={form_data?.client_id}
              coin_icon="https://files.coinswitch.co/public/coins/eth.png"
              coin_name="Ethereum"
              coin_symbol="ETH"
              handleCloseSendCrypto={handleCloseSendCrypto}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
