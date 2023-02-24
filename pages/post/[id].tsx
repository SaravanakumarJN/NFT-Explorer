import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { posts_data } from "../../components/stores/user.store";

const ImageBanner = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(10px) brightness(80%);
`;

const Post = () => {
  const router = useRouter();
  const [postsData, setPostsData] = useAtom(posts_data);
  const { id } = router.query;
  const data = postsData?.filter(({ node }) => {
    return node.id === id;
  })[0]?.node;

  console.log(data);
  const image = `https://dl.openseauserdata.com/cache/originImage/files/${data?.banner?.split("files/")?.[1]?.split("?")?.[0]}`
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
          <img src={image} className="w-[30%] rounded-full translate-y-[-50%] aspect-square object-cover" />
          <div>
          <h1 className="mt-2 text-2xl font-bold">{data.name}</h1>
          <h3 className="mt-2 text-sm text-gray-500 font-semibold">{data.slug}</h3>
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
