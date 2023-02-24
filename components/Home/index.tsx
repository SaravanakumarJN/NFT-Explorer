import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseDB } from "../../firebase.cofig";
import SearchIcon from "../../assets/icons/search.png";
import NftCard from "../NftCard";
import TopNftCard from "../TopNftCard";
import PopularCreatorCard from "../PopularCreatorCard";
import { useAtom } from "jotai";
import { user_atom } from "../stores/user.store";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [user_data] = useAtom(user_atom);
  const [posts, setPosts] = useState([]);
  const postsRef = useRef()
  const handleAddUser = async () => {
    const cityRef = doc(firebaseDB, "users", "9643011147");
    const docRef = await setDoc(cityRef, {
      profile_image:
        "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      name: "chiranjeev",
      client_id: "9643011147",
      wallet_address: "",
      community_id: "@chiranjeev.t",

      friends: [
        {
          client_id: "8360025206",
          community_id: "@jaskaran99",
          name: "Jaskaran Singh",
          profile_image:
            "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
          wallet_address: "",
        },
      ],
    });

    console.log(docRef);
  };

  const handleNewBalanceasync = async () => {
    const docRef = await addDoc(collection(firebaseDB, "balances"), {
      "2": {
        btc: "150",
        eth: "1200",
        matic: "200000",
      },
    });
  };

  const handleUpdateWalletAddress = async () => {
    const cityRef = doc(firebaseDB, "users", "2");

    const docref = await updateDoc(cityRef, {
      wallet_address: "wndc0e98wjiecnien",
    });
    console.log(docref, "docuref");
  };

  const handleUpdateFriends = async () => {
    const friendRef = doc(firebaseDB, "users", "8360025206");

    const user = await getDoc(friendRef);

    if (user.exists()) {

      const userData = user.data();

      console.log("fdk", userData);
    } else {

      console.log("No such document!");
    }
  };

  const getPostsData = async () => {
    const postRef = collection(firebaseDB, "nftCat");
    const posts = await getDocs(postRef);
    let data: any = [];
    posts.forEach((doc) => {
      const d = doc.data()
      data = [...data,...d.data]
    });
    setPosts(data)
    postsRef.current = data
  };
  useEffect(() => {
    getPostsData();
  }, []);

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}



console.log(posts)
  return (
    <div className="flex-1 py-10 px-7 ">
      <div className="bg-white py-2 px-4 w-[40%] rounded-full flex items-center gap-2">
        <img src={SearchIcon.src} className="w-[15px]" />
        <input className="focus-within:outline-none flex-1" type="text" onChange={(e)=>{
            if(e.target.value)
            setPosts(postsRef.current.filter((d)=>d.node.name.toLowerCase().includes(e.target.value.toLowerCase())))
            else setPosts(postsRef.current)
        }} />
      </div>
      <div className="mt-4 flex gap-5 w-full overflow-scroll">
        {posts.map(({node}) => {
          const image = node?.banner?.split("files/")?.[1]?.split("?")?.[0]
          return image && (
            <NftCard
            key={node.id}
              image={`https://dl.openseauserdata.com/cache/originImage/files/${image}`}
              coinImage="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg"
              coinExt="ETH"
              price={9.04}
              isVerified={node?.verificationStatus === "VERIFIED"}
              likes={Math.floor(Math.random()*1000)}
              userName="Ofspace NFT"
              userId={`@${image.split("").splice(0,10).join("")}`}
              title={node.name}
              userImage="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
            />
          );
        })}
      </div>
      <div className="mt-5">
        <TopNftCard
          values={[
            {
              userImage:
              `https://dl.openseauserdata.com/cache/originImage/files/${posts[6]?.node?.banner?.split("files/")?.[1]?.split("?")?.[0]}`,
              coinImage:
                "https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg",
              price: "4 030,98",
              percentage: -26.99,
              floorPrice: 0.99,
              items: 99,
              owners: "12.0k",
              rank: 1,
              userId: "@ofspace",
            },
            {
              userImage:
                "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
              coinImage:
                "https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg",
              price: "4 030,98",
              percentage: -26.99,
              floorPrice: 0.99,
              items: 99,
              owners: "12.0k",
              rank: 1,
              userId: "@ofspace",
            },
          ]}
        />
        <div className="mt-6">
          <PopularCreatorCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
