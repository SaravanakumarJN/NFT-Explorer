import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import CreateIcon from "../../assets/icons/create.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import NewPost from "../NewPost";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { user_atom } from "../stores/user.store";

const MainCon = styled.div``;

const LogoConatiner = styled.div``;

const FooterCon = styled.div``;

const rounts = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Active Bids",
    route: "/",
  },
  {
    name: "My Assets",
    route: "my-asset",
  },
  {
    name: "Sales",
    route: "/",
  },
  {
    name: "Schedule",
    route: "/",
  },
  {
    name: "Friends",
    route: "friends",
  },
  {
    name: "Find Friends",
    route: "find-friends",
  },
];

const LeftBar = ({ createNFT }: any) => {
  const router = useRouter();
  const [uplaodClicked, setuplaodClicked] = useState(false);
  const [_, setUserData] = useAtom(user_atom);

  return (
    <MainCon className="h-[100vh] px-8 py-10 flex flex-col justify-between gradiant">
      <div className="flex flex-col gap-8">
        <LogoConatiner className="flex items-center gap-3">
          <img
            className="w-[40px]"
            src="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/assets/csk_new_logo_black.png"
          />
          <div>
            <h1 className="text-2xl font-semibold">CoinSwitch</h1>
            <h5 className="text-sm font-semibold text-slate-400">Creator</h5>
          </div>
        </LogoConatiner>
        <div className="cursor-pointer flex flex-col gap-3">
          {rounts.map(({ name, route }, index) => {
            return (
              <Link
                href={route}
                className={` w-[70%] py-3 px-3 rounded-full cursor-pointer ${
                  index === 0 ? "bg-[#f4f7ff]" : ""
                }`}
              >
                <h2
                  className={`font-semibold text-sm ${
                    router.pathname === `/${route}` ||
                    (name === "Home" && router.pathname === `/`)
                      ? "text-[#3b68fe]"
                      : "text-[#a2adc0]"
                  } `}
                >
                  {name}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
      <FooterCon className="">
        <ConnectButton />
        <div className="m-4 opacity-50 hover:opacity-100">
          <div className="border-[1px] border-black w-fit px-5 py-2 rounded-3xl">
            <button
              className="flex items-center gap-2 font-medium"
              onClick={() => setuplaodClicked(true)}
            >
              Create <img src={CreateIcon.src} className="w-[20px]" />
            </button>
          </div>
        </div>
        <div
          className="rounded-3xl flex justify-center font-bold py-5 px-4 bg-white"
          onClick={() => {
            localStorage.clear();
            setUserData(null);
          }}
        >
          LogOut
        </div>
      </FooterCon>
      {uplaodClicked && (
        <NewPost createNFT={createNFT} setuplaodClicked={setuplaodClicked} />
      )}
    </MainCon>
  );
};

export default LeftBar;
