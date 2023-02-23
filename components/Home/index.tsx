import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseDB } from "../../firebase.cofig";
import SearchIcon from "../../assets/icons/search.png";
import NftCard from "../NftCard";
import TopNftCard from "../TopNftCard";
import PopularCreatorCard from "../PopularCreatorCard";

const HomePage = () => {
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
      // const myRef = doc(firebaseDB, "users");

      const userData = user.data();

      // const docref = await updateDoc(myRef, {
      //   friends: arrayUnion({ ...userData }),
      // });
      console.log("fdk", userData);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  // function uploadVideo() {
  //   const storage = getStorage();
  //   const storageRef = ref(storage, "videos/" + uuid());
  //   const UploadTask = uploadBytesResumable(storageRef, orignalUrl.current);
  //   UploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       setProgressBar(
  //         Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
  //       );
  //     },
  //     (err) => {
  //       dispatch(alertMessage("warning", "Somthing went Wrong"));
  //     },
  //     () => {
  //       getDownloadURL(UploadTask.snapshot.ref).then((url) => {
  //         uploadOnTheServer(url.split("&")[0]);
  //       });
  //     }
  //   );
  // }

  // const handleFile = () => {
  //   fileRef.current.click();
  //   fileRef.current.addEventListener("change", function () {
  //     const reader = new FileReader();

  //     reader.addEventListener("load", () => {
  //       console.log(this.files[0].size);
  //       orignalUrl.current = this.files[0];
  //       setFileType(this.files[0].type);
  //       setFileUrl(reader.result);
  //     });
  //     reader.readAsDataURL(this.files[0]);
  //   });
  // };

  return (
    <div className="flex-1 py-10 px-7 ">
      <div className="bg-white py-2 px-4 w-[40%] rounded-full flex items-center gap-2">
        <img src={SearchIcon.src} className="w-[15px]" />
        <input className="focus-within:outline-none flex-1" type="text" />
      </div>
      {/* <input  type="file" /> */}
      {/* <button onClick={handleAddUser}>handleAddUser</button> */}
      {/* <button onClick={handleNewBalanceasync}>handleNewBalance</button> */}
      {/* <button onClick={handleUpdateWalletAddress}>handleUpdateWalletAddress</button> */}
      <button onClick={handleUpdateFriends}>handleUpdateFriends</button>
      <div className="mt-4 flex gap-5">
        <NftCard
          image="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=cb647d991d8897cc8a81d2c33c4406d5"
          coinImage="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg"
          coinExt="ETH"
          price={9.04}
          likes={120}
          userName="Ofspace NFT"
          userId="ofspace99"
          title="NFT Cube Design #92"
          userImage="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        />
        <NftCard
          image="https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w996_r0.9975262832405689_fpx44.98_fpy48.86.jpg"
          coinImage="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/bitcoin.svg"
          coinExt="BTC"
          price={22.04}
          likes={120}
          userName="Ofspace NFT"
          userId="ofspace99"
          title="NFT Cube Design #93"
          userImage="https://images.wsj.net/im-491402?width=700&height=700"
        />
        <NftCard
          image="https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg"
          coinImage="https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg"
          coinExt="ETH"
          price={10.04}
          likes={120}
          userName="Ofspace NFT"
          userId="ofspace99"
          title="NFT Cube Design #94"
          userImage="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        />
      </div>
      <div className="mt-5">
        <TopNftCard
          values={[
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
