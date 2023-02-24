import { useAtom } from "jotai";
import React, { useEffect } from "react";
import LeftBar from "../LeftBar";
import RightBar from "../RightBar";
import { user_atom } from "../stores/user.store";

const Layout = ({ children, createNFT }: any) => {
  const [user_data, setUserData] = useAtom(user_atom);
  useEffect(()=>{
    const userData = JSON.parse((localStorage as any).getItem("my-login"))
    setUserData(userData)
  },[])
  return (
    <div className="w-full divide-solid h-[100vh] flex">
      <LeftBar createNFT={createNFT} />
      <div className="flex-1 overflow-y-scroll">{children}</div>
      <RightBar />
    </div>
  );
};

export default Layout;
