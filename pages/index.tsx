import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useAccount, useProvider, useSigner, useContract } from 'wagmi';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NFTCrad from '../components/NFTCards';
import { create } from 'ipfs-http-client';
import { TextField } from '@material-ui/core';
import Dashboard from '../Container/Dashboard';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Layout from '../components/Layout';
import HomePage from '../components/Home';

const Home: NextPage = () => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [nfts, setNfts]: any = useState([]);
  const [alchemy, setAlchemy]: any = useState(null);
  const [openForm, setOpenForm]: any = useState(false);
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [image, setImage] = useState('');
  const { data: signer, isError, isLoading } = useSigner();

  const nftAddress = '0xa051492C621f40719F5a202b202Df82b8AC336B4';
  const ABI = [
    {
      inputs: [
        { internalType: 'string', name: 'name_', type: 'string' },
        { internalType: 'string', name: 'symbol_', type: 'string' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_approved',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: '_tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_operator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: '_approved',
          type: 'bool',
        },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: '_tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: '_approved', type: 'address' },
        { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
      name: 'getApproved',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_owner', type: 'address' },
        { internalType: 'address', name: '_operator', type: 'address' },
      ],
      name: 'isApprovedForAll',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'string', name: '_tokenURI', type: 'string' }],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
      name: 'ownerOf',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_from', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_from', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
        { internalType: 'bytes', name: '_data', type: 'bytes' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_operator', type: 'address' },
        { internalType: 'bool', name: '_approved', type: 'bool' },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes4', name: '_interfaceId', type: 'bytes4' },
      ],
      name: 'supportsInterface',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
      name: 'tokenURI',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_from', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ];

  

  const contract = useContract({
    address: nftAddress,
    abi: ABI,
    signerOrProvider: signer,
  });

  useEffect(() => {
    const settings = {
      apiKey: 'mJ4c0qaHrtPcLF5xmKTu4ob9j81bEEkK', // Replace with your Alchemy API Key.
      network: Network.ETH_GOERLI, // Replace with your network.
    };
    const alchemy = new Alchemy(settings);

    setAlchemy(alchemy);
  }, []);

  useEffect(() => {
    if (isConnected && alchemy && address) {
      getNFTs(address);
    }
    if (isDisconnected) {
      setNfts([]);
    }
  }, [isConnected, alchemy, address]);

  async function getNFTs(address: string) {
    try {
      const nftsForOwner = await alchemy.nft.getNftsForOwner(address);
      const ownedNfts = [];

      nftsForOwner?.ownedNfts?.forEach((ele) => {
        if (ele.tokenUri) {
          ele.metadata = ele.rawMetadata;
          ownedNfts.push(ele);
        }
      });

      setNfts(ownedNfts);
    } catch (error) {
      console.log(error);
    }
  }

  const uploadImage = async (e: any) => {
    const auth =
      'Basic ' +
      Buffer.from(
        '2I8mUdhxBRUmCzTW1TMgzb0mp7v' + ':' + '02ca84d511e5c350f16b2176092ae565'
      ).toString('base64');

    const client = create({
      url: 'https://ipfs.infura.io:5001',
      headers: {
        authorization: auth,
      },
    });
    const response = await client.add(e.target.files[0]);
    setImage(`https://ipfs.io/ipfs/${response.path}`);
    console.log(client, response);
  };

  const createNFT = async () => {
    if (!title || !description || !image) {
      alert('fields are required');
    }
    const metadata: any = {
      title,
      description,
      image,
    };
    console.log(metadata);

    const auth =
      'Basic ' +
      Buffer.from(
        '2I8mUdhxBRUmCzTW1TMgzb0mp7v' + ':' + '02ca84d511e5c350f16b2176092ae565'
      ).toString('base64');
    const client = create({
      url: 'https://ipfs.infura.io:5001',
      headers: {
        authorization: auth,
      },
    });
    const response = await client.add(JSON.stringify(metadata));
    console.log(response, 'metadata');

    console.log(contract);
    const transaction = await contract?.mint(
      `https://ipfs.io/ipfs/${response.path}`
    );
    console.log(transaction);
  };

  return (
    <div className="w-full divide-solid h-[100vh] flex">
   <Layout >
   <HomePage />
   </Layout>
        
  </div>
  );
};

export default Home;
