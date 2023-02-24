import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';
import LeftBar from '../components/LeftBar';
import MyNft from '../components/myNft';
import RightBar from '../components/RightBar';
import Posts from '../Container/Posts';

const Dashboard = () => {
  const router = useRouter();

  return (
    <Layout>
      <MyNft />
    </Layout>
  );
};

export default Dashboard;
