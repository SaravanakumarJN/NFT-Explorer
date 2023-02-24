import styled from "styled-components";
import VerifiedIcon from "../../assets/icons/verified.png";

const MainCon = styled.div`
     width: min(max(50%,400px),500px);
`

const PopularCreatorCard = () => {
  return (
    <MainCon className="w-[50%] bg-[#3670fa] p-[1px] rounded-3xl">
      <div className="flex gap-2 bg-white p-4 rounded-3xl">
        <img
          className="w-[50px] rounded-full object-cover aspect-square bg-cover bg-center"
          src="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        />
        <div className="flex gap-1 items-center ">
          <h1 className=" text-lg  font-bold">Jaskaran Singh</h1>
          <img className="w-[20px]" src={VerifiedIcon.src} />
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div className="flex">
          <img
            src="https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg"
            className="rounded-full aspect-square object-cover w-[40px] z-30"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhdKMuUQsc1XNK9GpSv145tRUMZg66KctdDOo55CJi72sSgWFfcIWz3NPRQTuAkc_Hk4&usqp=CAU"
            className="rounded-full aspect-square object-cover w-[40px] translate-x-[-10px] z-20"
          />
          <div className="w-[40px] aspect-square bg-white translate-x-[-20px] rounded-full flex items-center justify-center text-xs font-semibold text-[#3670fa]">
            +12
          </div>
        </div>
        <button className="bg-white py-2 px-4 text-[#3670fa] font-bold text-sm rounded-full cursor-pointer">
          Follow +
        </button>
      </div>
    </MainCon>
  );
};

export default PopularCreatorCard;
