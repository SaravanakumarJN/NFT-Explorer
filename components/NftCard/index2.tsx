import { FC } from 'react';
import styled from 'styled-components';
import VerifiedIcon from '../../assets/icons/verified.png';

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
  background-image: url('${({ image }) => image}');
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
    <div className='bg-white w-fit rounded-3xl p-3 flex flex-col'>
      <ImageBox
        {...{ image }}
        className={`rounded-3xl aspect-square bg-cover bg-center w-[200px] p-3 flex items-end justify-end`}
      ></ImageBox>
      <div className=' flex-1 flex flex-col justify-between'>
        <div className='w-[200px] overflow-hidden'>
          <h1 className='text-sm font-bold mt-3 w-full'>{title}</h1>
          <div className='text-sm font-medium mt-1 w-full'>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
