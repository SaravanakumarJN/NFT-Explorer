import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { firebaseDB } from "../../firebase.cofig";

const ImageBanner = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(10px) brightness(80%);
`;

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  const getPostsData = async () => {
    const postRef = collection(firebaseDB, "nftCat");
    const posts = await getDocs(postRef);
    let data: any = [];
    posts.forEach((doc) => {
      const d = doc.data();
      data = [...data, ...d.data];
    });
    console.log(data, "sdkjjk");
    setData(
      data?.filter(({ node }) => {
        return node.id === id;
      })[0]?.node
    );
  };
  useEffect(() => {
    if (id) getPostsData();
  }, [id]);

  const image = `https://dl.openseauserdata.com/cache/originImage/files/${
    data?.banner?.split("files/")?.[1]?.split("?")?.[0]
  }`;
  return (
    <Layout>
      <div className="w-full h-[40%]">
        <div className="w-full h-full overflow-hidden">
          <ImageBanner
            image={image}
            className="w-[100%] h-[100%] scale-[1.1]"
          />
        </div>
        <div className="flex items-start justify-between px-4">
          <div className="ml-3 w-fit flex gap-3">
            <img
              src={image}
              className="w-[30%] rounded-full translate-y-[-50%] aspect-square object-cover"
            />
            <div>
              <h1 className="mt-2 text-2xl font-bold">{data?.name}</h1>
              <h3 className="mt-2 text-sm text-gray-500 font-semibold">
                {data?.slug}
              </h3>
            </div>
          </div>
          <button className="bg-[#3772ff] mt-2 py-2 px-7 cursor-pointer text-white font-bold text-sm rounded-full">
            Buy
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
