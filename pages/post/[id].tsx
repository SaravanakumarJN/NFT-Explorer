import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";

const ImageBanner = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(10px);
`;

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const image =
    "https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w996_r0.9975262832405689_fpx44.98_fpy48.86.jpg";
  return (
    <Layout>
      <div className="w-[100%] h-[50%] overflow-hidden">
        <ImageBanner image={image} className="w-[100%] h-[100%] scale-[1.1]" />
      </div>
      {id}
    </Layout>
  );
};

export default Post;
