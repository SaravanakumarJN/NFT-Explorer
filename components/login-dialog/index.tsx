import { memo, useEffect, useRef, useState } from "react";
import ThreeDots from "../animation/three-dots";

function LoginDialog({
  handleCloseLoginDialog,
  getUserDetails,
  login_error,
  setLoginError,
  is_login_loading,
}) {
  const [phone_number, setPhoneNumber] = useState("");
  const inputRef = useRef();

  const handlePhoneChange = (event) => {
    const { value } = event?.target;
    if (value?.length <= 10) {
      setLoginError("");
      setPhoneNumber(value);
    }
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div className="absolute top-0 left-0 h-full w-full z-10 backdrop-blur-sm flex justify-center items-center">
      <div className={`h-full grid place-items-center`}>
        <div className="w-[500px] h-[250px] bg-black rounded-3xl p-4">
          <div className="flex relative">
            <button
              onClick={handleCloseLoginDialog}
              className="cursor-pointer text-white font-semibold absolute top-2 right-2"
            >
              Close
            </button>
            <div className="flex gap-2">
              <span className="text-white">Login</span>
            </div>
          </div>
          <div className="pt-5">
            <div>
              <h3
                className={`${
                  login_error === "" ? "text-white" : "text-red-500"
                } font-bold text-xl`}
              >
                {login_error === "" ? "Enter Phone Number" : login_error}
              </h3>
            </div>
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="number"
                autoFocus={true}
                value={phone_number}
                onChange={handlePhoneChange}
                placeholder={`Phone Number`}
                maxLength={10}
                className="outline-none text-white text-3xl bg-transparent w-[210px]"
              />
            </div>
          </div>
          <div className="pt-5">
            <button
              onClick={() => {
                getUserDetails(phone_number);
              }}
              className="cursor-pointer bg-[#1e5cef] flex justify-center items-center py-3 px-10 text-white rounded-3xl "
            >
              {is_login_loading ? <ThreeDots color="text-white" /> : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LoginDialog);
