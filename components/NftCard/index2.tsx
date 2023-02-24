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
  isVerified: boolean;
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
}) => {
  return (
    <div className="bg-white w-fit rounded-3xl w-[200px] p-3 flex flex-col">
      <ImageBox
        {...{ image }}
        className={`rounded-3xl aspect-square bg-cover bg-center w-[200px] p-3 flex items-end justify-end`}
      ></ImageBox>
      <div className=" flex-1 flex flex-col justify-between">
        <div className="w-[200px] overflow-hidden">
          <div className="flex items-center mt-3 gap-2">
            <img
              className="w-[35px] rounded-full aspect-square object-cover"
              src={userImage}
            />
            <div>

            <h1 className="text-md font-bold  w-full">{title}</h1>
            <div className="text-xs text-gray-400 font-medium w-full">{title}</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NftCard;
