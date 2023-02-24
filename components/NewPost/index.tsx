import { useEffect, useRef, useState } from "react";
import UplaodIcon from "../../assets/icons/fileUpload.png";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { uuidv4 } from "@firebase/util";
import styled from "styled-components";
import { posts } from "../myNft";
import { useAtom } from "jotai";
import { user_atom } from "../stores/user.store";
import LoginDialog from "../login-dialog";


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

const UploadContainer = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px) brightness(90%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
let c = 0;
const NewPost = ({ setuplaodClicked, createNFT }: any) => {
  const [user_data, setUserData] = useAtom(user_atom);
  const inputRef = useRef<HTMLInputElement>(null);
  const FileRef = useRef<any>();
  const [imageUrl, setImageUrl] = useState("");
  const [postDetails, setPostDetails] = useState({
    ...posts[c].node,
    name: "",
    description: "",
    userName: user_data?.community_id ?? "@jaskaran",
  });
  const [login_error, setLoginError] = useState("");
  const [is_login_loading, setIsLoginLoading] = useState(false);

  const handleUserInput = (name: string, e: any) => {
    setPostDetails({ ...postDetails, [name]: e.target.value });
  };

  const handleFilePost = async () => {
    const postsRef = doc(firebaseDB, "posts", uuidv4());
    const post = {
      ...postDetails,
      image: imageUrl,
    };
    const docRef = await setDoc(postsRef, post);
    createNFT(post);
    console.log(docRef);
  };

  function uploadFile() {
    const storage = getStorage();
    const storageRef = ref(storage, "nfts/" + uuidv4());
    const UploadTask = uploadBytesResumable(storageRef, FileRef.current);

    UploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(UploadTask.snapshot.ref).then((url) => {
          setImageUrl(url.split("&")[0]);
        });
      }
    );
  }

  const handleInputChange = () => {
    const reader = new FileReader();
    const Input: any = inputRef.current;

    reader.addEventListener("load", () => {
      console.log(Input?.files[0].size);
      FileRef.current = Input?.files[0];
      uploadFile();
    });
    reader.readAsDataURL(Input?.files[0]);
  };

  const handleUplaod = () => {
    inputRef.current?.click();
    inputRef.current?.addEventListener("change", handleInputChange);
    c += (c + 1) % posts.length;
  };

  const handleCloseLoginDialog = () => {
    // setOpenLogin(false);
  };

  const getUserDetails = async (phone_number) => {
    setIsLoginLoading(true);
    const userRef = doc(firebaseDB, "users", `${phone_number}`);
    const user = await getDoc(userRef);

    if (user?.exists()) {
      const user_details = await (await getDoc(userRef)).data();
      console.log("userRef", userRef, user_details);
      localStorage.setItem("my-login",JSON.stringify(user_details))
      setUserData(user_details);
    } else {
      setLoginError("User Doesn't Exists");
    }
    setIsLoginLoading(false);
  };
  console.log(user_data, "SDvmlsdlkm");

  return (
    <>
      {user_data === null ? (
        <LoginDialog
          handleCloseLoginDialog={handleCloseLoginDialog}
          getUserDetails={getUserDetails}
          login_error={login_error}
          setLoginError={setLoginError}
          is_login_loading={is_login_loading}
        />
      ) : (
        <>
          <UploadContainer
            className="flex items-center justify-center"
            onClick={() => setuplaodClicked(false)}
          />
          <div
            className="w-[70%] overflow-hidden bg-white h-[70%] rounded-3xl flex items-center justify-center absolute cursor-pointer z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            onClick={handleUplaod}
          >
            {!imageUrl ? (
              <div className="flex flex-col justify-center items-center">
                <img src={UplaodIcon.src} className="w-[140px]" />
                <h1 className="text-md mt-2 font-semibold ">Upload your NFT</h1>
                <button className="bg-[#3670fa] py-2 text-sm  px-10 rounded-full mt-3 cursor-pointer text-white">
                  Upload +
                </button>
                <input ref={inputRef} type="file" className="opacity-0" />
              </div>
            ) : (
              <div className="flex w-[100%] h-[90%]">
                <img src={imageUrl} className="object-contain w-[60%]" />
                <div className="flex-[1] flex flex-col px-2">
                  <div className="mb-5">
                    <h1 className="font-bold text-md mb-2">Name</h1>
                    <input
                      onChange={(e) => handleUserInput("title", e)}
                      type="text"
                      className="border-[1px] border-gray-500 rounded-xl py-2 px-4 outline-none w-[80%]"
                    />
                  </div>
                  <h1 className="font-bold text-lg mb-2">Description</h1>
                  <textarea
                    onChange={(e) => handleUserInput("description", e)}
                    rows={5}
                    className="border-[1px] border-gray-500 py-2 px-4  rounded-xl outline-none w-[80%]"
                  />
                  <button
                    disabled={!(postDetails.title && postDetails.description)}
                    className="bg-[#3670fa] disabled:opacity-60 w-fit mt-7 py-2 px-6 text-white rounded-3xl"
                    onClick={handleFilePost}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default NewPost;
