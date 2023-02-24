import React from "react";
import LeftBar from "../LeftBar";
import RightBar from "../RightBar";

const Layout = ({ children, createNFT }: any) => {
  return (
    <div className="w-full divide-solid h-[100vh] flex">
      <LeftBar createNFT={createNFT} />
      <div className="flex-1 overflow-y-scroll">{children}</div>
      <RightBar />
    </div>
  );
};

export default Layout;
