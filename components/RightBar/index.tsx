import styled from "styled-components";
import UploadIcon from "../../assets/icons/upload.png";
import OptionIcon from "../../assets/icons/option.png";
import Link from "next/link";
import { useAtom } from "jotai";
import { user_atom } from "../stores/user.store";

const MainCon = styled.div`
  width: 22%;
  max-width: 600px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 48%,
    rgba(254, 254, 254, 1) 100%
  );
`;

const UserBox = styled.div``;

const nfts = [
  {
  image:
    "https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png",
  name: "@jaskaran.s",
  price: "498",
  percentage: "+09.90%",
},
  {
  image:
    "data:image/jpeg;base64,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",
  name: "@chiranjeev.t",
  price: "9,098",
  percentage: "+10.01%",
},
  {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQooNhYYgwCc_LtJFLT3stGlGQW_uL0XJU91Q&usqp=CAU",
  name: "@nikhil.k",
  price: "908",
  percentage: "-3.20%",
},
  {
  image:
    "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1674686598067_oiodx9gtuiebvo3siqveonkz7egdyd9f_400x400.png",
  name: "@saravna.k",
  price: "104",
  percentage: "+0.90%",
},
  {
  image:
    "https://hips.hearstapps.com/hmg-prod/images/nft-1-1614978591.jpg",
  name: "@singh.s",
  price: "2,902",
  percentage: "+1.89%",
},
]

const RightBar = () => {
  const [user_data, setUserData] = useAtom(user_atom);
  return (
    <MainCon className="v-[100vh] px-6 py-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-semibold">Top Creators</h1>
        <div className="mt-3 flex flex-col gap-1 divide-y flex-1 max-h[50%]">
          {nfts.map(({ image, name, price, percentage }) => {
            return (
              <div className="flex justify-between items-center font-semibold py-3">
                <div className="flex items-center">
                  <img className="rounded-full w-[30px] aspect-square object-cover" src={image} />
                  <div className="pl-3 flex flex-col gap-1">
                    <h1 className="font-semibold text-sm">{name}</h1>
                    <div className="text-gray-500 font-medium text-xs">
                      {price}
                    </div>
                  </div>
                </div>
                <div className="text-sm">{percentage}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="/my-asset">
        <UserBox className="flex flex-col rounded-3xl overflow-hidden max-h-[50%] bg-white">
          <div className="relative">
            <img src="https://www.analyticsinsight.net/wp-content/uploads/2023/01/Top-10-Crypto-Prices-for-January-13-2023-In-2023-the-next-significant-Ethereum-upgrade-is-anticipated.jpg" />
            <div className="absolute bottom-0 rounded-full border-8 border-white left-[50%] translate-x-[-50%] translate-y-[50%]">
              <img
                src={user_data?.profile_image}
                className="w-[70px] rounded-full"
              />
            </div>
          </div>
          <div className="py-8 pt-11 flex flex-col items-center gap-3">
            <h1 className="font-semibold text-lg">
              {user_data?.name ?? "jaskaran"}
            </h1>
            <div className="bg-gray-100 py-1 px-4 text-xs rounded-full font-medium">
              0x1ej...4d3f
            </div>
            <p className="text-center text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex items-center gap-2">
              <button className="bg-[#3772ff] py-2 px-4 text-white font-bold text-sm rounded-full cursor-pointer">
                Profile
              </button>
              <div className="p-2 border-gray-300 border-[1px] rounded-full cursor-pointer ">
                <img className="w-[15px] opacity-40" src={UploadIcon.src} />
              </div>
              <div className="p-2 border-gray-300 border-[1px] rounded-full cursor-pointer ">
                <img className="w-[15px] opacity-40" src={OptionIcon.src} />
              </div>
            </div>
          </div>
        </UserBox>
      </Link>
    </MainCon>
  );
};

export default RightBar;
