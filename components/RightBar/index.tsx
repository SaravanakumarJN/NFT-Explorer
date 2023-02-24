import styled from "styled-components";
import UploadIcon from "../../assets/icons/upload.png";
import OptionIcon from "../../assets/icons/option.png";
import Link from "next/link";

const MainCon = styled.div`
  width: 22%;
  max-width: 600px;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 48%, rgba(254,254,254,1) 100%);
`;

const UserBox = styled.div``;

const nfts = new Array(5).fill({
  image:
    "https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png",
  name: "@ofspace",
  price: "4 030,98",
  percentage: "+38.09%",
});

const RightBar = () => {
  return (
    <MainCon className="v-[100vh] px-6 py-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-semibold">Top Creators</h1>
        <div className="mt-3 flex flex-col gap-1 divide-y flex-1 max-h[50%]">
          {nfts.map(({ image, name, price, percentage }) => {
            return (
              <div className="flex justify-between items-center font-semibold py-3">
                <div className="flex items-center">
                  <img className="rounded-full w-[30px]" src={image} />
                  <div className="pl-3 flex flex-col gap-1">
                    <h1 className="font-semibold text-sm">{name}</h1>
                    <div className="text-gray-500 font-medium text-xs">{price}</div>
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
            <img src="https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-3.jpg" className="w-[70px] rounded-full" />
          </div>
        </div>
        <div className="py-8 pt-11 flex flex-col items-center gap-3">
          <h1 className="font-semibold text-lg">Jaskaran Singh</h1>
          <div className="bg-gray-100 py-1 px-4 text-xs rounded-full font-medium">
            0x1ej...4d3f
          </div>
          <p className="text-center text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex items-center gap-2">
            <button className="bg-[#3772ff] py-2 px-4 text-white font-bold text-sm rounded-full cursor-pointer">
              Follow +
            </button>
            <div className="p-2 border-gray-300 border-[1px] rounded-full cursor-pointer ">
              <img className="w-[15px] opacity-40" src={UploadIcon.src}  />
            </div>
            <div className="p-2 border-gray-300 border-[1px] rounded-full cursor-pointer ">
              <img className="w-[15px] opacity-40" src={OptionIcon.src}  />
            </div>
          </div>
        </div>
      </UserBox>
      </Link>
    </MainCon>
  );
};

export default RightBar;
