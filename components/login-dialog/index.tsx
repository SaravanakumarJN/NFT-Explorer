import { useAtom } from "jotai";
import { memo, useState } from "react";
import { user_atom } from "../stores/user.store";

function LoginDialog({ handleCloseLoginDialog, getUserDetails }) {
  const [phone_number, setPhoneNumber] = useState("");
  const [user_data, setUserData] = useAtom(user_atom);

  const handlePhoneChange = (event) => {
    const { value } = event?.target;
    if (value?.length <= 10) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full z-10 backdrop-blur-sm flex justify-center items-center">
      <div
        className={`${
          user_data === null ? "h-full grid place-items-center" : ""
        }`}
      >
        <div className="w-[500px] h-[250px] bg-black rounded-3xl p-4">
          <div className="flex relative">
            <button
              onClick={handleCloseLoginDialog}
              className="text-white font-semibold absolute top-2 right-2"
            >
              Close
            </button>
            <div className="flex gap-2">
              <span className="text-white">Login</span>
            </div>
          </div>
          <div className="pt-5">
            <div>
              <h3 className="text-white font-bold text-xl">
                Enter Phone Number
              </h3>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                value={phone_number}
                onChange={handlePhoneChange}
                placeholder={`Phone Number`}
                maxLength={10}
                className="outline-none text-white text-3xl bg-transparent w-[200px]"
              />
            </div>
          </div>
          <div className="pt-5">
            <button
              onClick={() => {
                getUserDetails(phone_number);
              }}
              className="bg-[#1e5cef] flex justify-center items-center py-3 px-5 text-white rounded-3xl "
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LoginDialog);
