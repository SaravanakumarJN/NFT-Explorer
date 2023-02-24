import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import VerifiedIcon from "../../assets/icons/verified.png";

interface NftCardProps {
  image: string;
  coinImage: string;
  price: number;
  coinExt: string;
  userName: string;
  userId: string;
  title: string;
  likes: number;
  userImage: string;
  isVerified:boolean;
  node:any
}
const ImageBox = styled.div<{ image: string }>`
  background-image: url("${({ image }) => image}");
`;

const NftCard: FC<NftCardProps> = ({
  image,
  coinImage,
  price,
  coinExt,
  userName,
  userId,
  title,
  likes,
  userImage,
  isVerified,
  node
}) => {
  console.log(VerifiedIcon.src)
  return (
    <Link href={`/post/${node.id}`}>

    <div className="bg-white w-fit rounded-3xl p-3 flex flex-col">
      <ImageBox
        {...{ image }}
        className={`rounded-3xl aspect-square bg-cover bg-center w-[200px] p-3 flex items-end justify-end`}
      >
        <div className="bg-white w-fit rounded-xl py-1 px-2 flex gap-1">
          <img
            src={coinImage}
            className="w-[15px] rounded-full aspect-square object-cover"
          />
          <p className="text-xs">
            <span className="font-semibold">{price}</span> {coinExt}
          </p>
        </div>
      </ImageBox>
      <div className=" flex-1 flex flex-col justify-between">
        <div>
        <div className="mt-2 flex justify-between ">
          <div className="flex gap-1 items-center">
            <h3 className="text-gray-500 text-xs font-medium">{userName}</h3>
         {isVerified &&   <img className="w-[15px]" src={VerifiedIcon.src} />}
          </div>
          <h3 className="text-gray-500 text-xs font-medium">{likes} Likes</h3>
        </div>
        <div className="w-[200px] overflow-hidden">

        <h1 className="text-sm font-bold mt-3 w-full">{title}</h1>
        </div>
        </div>
        
        <div className="mt-2 flex justify-between">
          <img
            className="w-[25px] rounded-full aspect-square object-cover"
            src={userImage}
          />
          <span className="text-gray-500 text-xs font-medium">{userId}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default NftCard;
