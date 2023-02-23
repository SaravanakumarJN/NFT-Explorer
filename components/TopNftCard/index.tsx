import { FC } from "react";
import styled from "styled-components";

interface assetPorps {
  userImage: string;
  coinImage: string;
  price: string;
  percentage: number;
  floorPrice: number;
  items: number;
  owners: string;
  rank: number;
  userId: string;
}

interface TopNftCardProps {
  values: assetPorps[];
}

const Icon = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
`;

const TopNftCard: FC<TopNftCardProps> = ({ values }) => {
  return (
    <div className="bg-white px-4 pt-5 rounded-3xl">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">
          Top NFTS
        </h1>
        <div>
        </div>
      </div>
      <div className="divide-y">
        <div className="flex py-5">
          <div className="flex-[1.5]">
            <p className="text-gray-500 font-medium">#</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 font-medium">Volume</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 font-medium">24h%</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 font-medium">Floor Price</p>
          </div>
          <div className="flex-[0.5]">
            <p className="text-gray-500 font-medium">items</p>
          </div>
          <div className="flex-[0.7]">
            <p className="text-gray-500 font-medium">Owners</p>
          </div>
        </div>
        {values.map(
          (
            {
              userImage,
              coinImage,
              price,
              percentage,
              floorPrice,
              items,
              owners,
              rank,
              userId,
            },
            index
          ) => {
            return (
              <div className="flex py-5">
                <div className="flex-[1.5]">
                  <div className="flex items-center gap-2">
                    <Icon
                      className="w-[50px] rounded-full object-cover aspect-square bg-cover bg-center"
                      image={userImage}
                    >
                      <div className="bg-white aspect-square w-[18px] flex items-center justify-center rounded-full border-orange-500 border-2 ">
                        <span className="text-[10px] text-orange-500 font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </Icon>
                    <h1 className="font-semibold">{userId}</h1>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center h-full gap-2">
                    <img src={coinImage} className="w-[20px]" />
                    <p className="font-medium text-gray-500">{price}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center h-full">
                    <p
                      className={`font-semibold text-${
                        percentage > 0 ? "green" : "red"
                      }-600`}
                    >
                      {percentage}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center h-full gap-2">
                    <img src={coinImage} className="w-[20px]" />
                    <p>{floorPrice}</p>
                  </div>
                </div>
                <div className="flex-[0.5]">
                  <div className="flex items-center h-full">
                    <p>{items}</p>
                  </div>
                </div>
                <div className="flex-[0.7]">
                  <div className="flex items-center h-full gap-2">
                    <p>{owners}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TopNftCard;
