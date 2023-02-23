import { memo, useState } from "react";

function SendCryptoForm({
  receiver_name,
  receiver_img,
  coin_name,
  coin_symbol,
  coin_icon,
  handleCloseSendCrypto,
}) {
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    const { value } = event?.target;
    setAmount(value);
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] h-[250px] bg-black rounded-3xl p-4">
        <div className="flex relative">
          <button
            onClick={handleCloseSendCrypto}
            className="text-white font-semibold absolute top-2 right-2"
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
          </div>
        </div>
        <div className="pt-5">
          <div>
            <h3 className="text-white font-bold text-xl">{coin_name}</h3>
          </div>
          <div className="flex items-center">
            <input
              type="number"
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
          <button className="bg-[#292929] flex justify-center items-center py-3 px-5 text-white rounded-3xl ">
            Send Crypto
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(SendCryptoForm);
