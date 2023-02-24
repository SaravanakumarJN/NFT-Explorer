import { useAtom } from 'jotai';
import React from 'react';
import NftCard from '../NftCard';
import { user_atom, user_nfts } from '../stores/user.store';

export const posts = [
  {
    node: {
      windowCollectionStats: {
        volume: {
          unit: '345.466192378989887857',
          symbol: 'ETH',
        },
        floorPrice: {
          unit: '0.59',
          symbol: 'ETH',
        },
      },
      banner:
        'https://i.seadn.io/gcs/files/0471c231435a627fe8e6879ef03cc40d.jpg?w=500&auto=format',
      name: 'Modern Muse: Marilyn Monroe x Zeblocks Mint Pass',
      isCategory: false,
      id: 'Q29sbGVjdGlvblR5cGU6MjM2MDg2Mjg=',
      slug: 'modern-muse-marilyn-monroe-x-zeblocks-mint-pass',
      verificationStatus: 'VERIFIED',
    },
  },
  {
    node: {
      slug: 'this-artwork-is-subject-to-change',
      name: 'This Artwork Is Subject To Change',
      id: 'Q29sbGVjdGlvblR5cGU6MjM0NzkzNjQ=',
      verificationStatus: 'UNAPPROVED',
      isCategory: false,
      windowCollectionStats: {
        volume: {
          unit: '247.462049097419566124',
          symbol: 'ETH',
        },
        floorPrice: {
          unit: '0.062795',
          symbol: 'ETH',
        },
      },
      banner:
        'https://i.seadn.io/gcs/files/b313880a392e404442395e62bff709b5.png?w=500&auto=format',
    },
  },
  {
    node: {
      id: 'Q29sbGVjdGlvblR5cGU6MjM2NDcyNzQ=',
      verificationStatus: 'UNAPPROVED',
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '47.503136518294851953',
        },
        floorPrice: {
          unit: '0.0144',
          symbol: 'ETH',
        },
      },
      slug: 'fridgefame',
      banner:
        'https://i.seadn.io/gcs/files/a6c9617635afa22cd0f6db97f44b7a7b.gif?w=500&auto=format',
      name: 'Fridge Fame',
      isCategory: false,
    },
  },
  {
    node: {
      isCategory: false,
      verificationStatus: 'SAFELISTED',
      slug: 'ethlizards',
      windowCollectionStats: {
        volume: {
          unit: '56.916919999999976199',
          symbol: 'ETH',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.7289',
        },
      },
      id: 'Q29sbGVjdGlvblR5cGU6NjM1Mjg4MQ==',
      banner:
        'https://i.seadn.io/gae/aWUXvOCNWM2dUpr_ytYpJ1eyEYGngjtrFVcNVY3SB-Di32S2L4aou3Lt9kmTK1r4fe_TAqBLJbY9y1dJvcG369Ex30-v_qii9Mcu7g?w=500&auto=format',
      name: 'Ethlizards',
    },
  },
  {
    node: {
      verificationStatus: 'VERIFIED',
      isCategory: false,
      name: 'EtherPOAP OG',
      windowCollectionStats: {
        floorPrice: {
          unit: '0.871739',
          symbol: 'ETH',
        },
        volume: {
          unit: '82.289599999999950342',
          symbol: 'ETH',
        },
      },
      slug: 'etherpoap-og',
      id: 'Q29sbGVjdGlvblR5cGU6MjAxMjg3ODc=',
      banner:
        'https://i.seadn.io/gcs/files/489fdea31e4e5e3dc255cf12882e168d.png?w=500&auto=format',
    },
  },
  {
    node: {
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '31.793000000000002814',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.035',
        },
      },
      id: 'Q29sbGVjdGlvblR5cGU6Mjk0MQ==',
      slug: 'superrare',
      name: 'SuperRare',
      verificationStatus: 'VERIFIED',
      banner:
        'https://i.seadn.io/gae/YhFNM3GpVLCmhT_aVdzEcDfJSjaoqV8-gwrG56ukc9zJqIHqEuw05o_jwf-_cZ8yEAa645GJTtKN7XovzEUNisk_8wuK6X3ae23B3Q?w=500&auto=format',
      isCategory: false,
    },
  },
  {
    node: {
      slug: 'candyrepublic',
      isCategory: false,
      name: 'Candy Republic - Official',
      id: 'Q29sbGVjdGlvblR5cGU6MjM2MzU1MDI=',
      banner:
        'https://i.seadn.io/gcs/files/7035a24d58695f3e530ae475b776227a.png?w=500&auto=format',
      verificationStatus: 'UNAPPROVED',
      windowCollectionStats: {
        floorPrice: {
          unit: '0.0887',
          symbol: 'ETH',
        },
        volume: {
          unit: '10.758007999000000154',
          symbol: 'ETH',
        },
      },
    },
  },
  {
    node: {
      banner:
        'https://i.seadn.io/gcs/files/a426ef374963cb93fe7362d816ed7574.gif?w=500&auto=format',
      slug: 'worldwidewebbland',
      id: 'Q29sbGVjdGlvblR5cGU6MzE0Mjc2Mg==',
      name: 'Worldwide Webb Land',
      windowCollectionStats: {
        volume: {
          unit: '466.715374232000442589',
          symbol: 'ETH',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.439',
        },
      },
      isCategory: false,
      verificationStatus: 'VERIFIED',
    },
  },
  {
    node: {
      name: 'Wolf Game',
      verificationStatus: 'VERIFIED',
      id: 'Q29sbGVjdGlvblR5cGU6MzExMDYyNw==',
      banner:
        'https://i.seadn.io/gae/KvlgKf6LLnjB1-m6jewIZz4e66VW5NWewtUXECDnTPYzOTuCWSsiQ8QhqFQ1TWzGbVwlczgGtjVrCKoj4nzdH8WJCM1w4QLVJseOkIQ?w=500&auto=format',
      slug: 'wolf-game',
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '58.952035388888951672',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.47',
        },
      },
      isCategory: false,
    },
  },
  {
    node: {
      verificationStatus: 'VERIFIED',
      name: 'Parallel Alpha',
      windowCollectionStats: {
        floorPrice: {
          symbol: 'ETH',
          unit: '0.00109',
        },
        volume: {
          unit: '85.791214989999900808',
          symbol: 'ETH',
        },
      },
      isCategory: false,
      id: 'Q29sbGVjdGlvblR5cGU6MjY0MDU2',
      slug: 'parallelalpha',
      banner:
        'https://i.seadn.io/gcs/files/ad1e0678638ae7ae9c7eb4ef88c3f409.png?w=500&auto=format',
    },
  },
  {
    node: {
      slug: 'undeadsmysterybox',
      windowCollectionStats: {
        floorPrice: {
          unit: '0.1228',
          symbol: 'ETH',
        },
        volume: {
          symbol: 'ETH',
          unit: '20.622069899999996068',
        },
      },
      id: 'Q29sbGVjdGlvblR5cGU6MjM2MzUxODI=',
      name: 'Undeads Mystery Boxes',
      banner:
        'https://i.seadn.io/gcs/files/c92125de557ffe43914ce3394b36265c.png?w=500&auto=format',
      verificationStatus: 'UNAPPROVED',
      isCategory: false,
    },
  },
  {
    node: {
      id: 'Q29sbGVjdGlvblR5cGU6MzYwMzMwNA==',
      verificationStatus: 'VERIFIED',
      slug: 'mypethooligan',
      isCategory: false,
      banner:
        'https://i.seadn.io/gae/Rn6Lee43yhAOOpBcKOVx0pIKafcVdju0e1wTrET1tdBv1uTOeGF-F_odH60wmhrDzdXjaMrC8mvhIYeF53QKE-hN_WAUycy1sZYR?w=500&auto=format',
      name: 'My Pet Hooligan',
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '42.218599900000015168',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.892',
        },
      },
    },
  },
  {
    node: {
      name: 'The Beacon',
      banner:
        'https://i.seadn.io/gcs/files/acc49678ae67e78a18f868dc23e5c6dc.png?w=500&auto=format',
      id: 'Q29sbGVjdGlvblR5cGU6MjIyNjYwODc=',
      isCategory: false,
      windowCollectionStats: {
        floorPrice: {
          unit: '0.001',
          symbol: 'ETH',
        },
        volume: {
          symbol: 'ETH',
          unit: '13.880670601310001189',
        },
      },
      slug: 'the-beacon-arbi',
      verificationStatus: 'SAFELISTED',
    },
  },
  {
    node: {
      isCategory: false,
      name: 'Mirandus',
      verificationStatus: 'VERIFIED',
      banner:
        'https://i.seadn.io/gcs/files/5d32a8d6d29cfad01dd009713dfcf5f7.png?w=500&auto=format',
      windowCollectionStats: {
        volume: {
          unit: '10.681706091999997099',
          symbol: 'ETH',
        },
        floorPrice: {
          unit: '0.01',
          symbol: 'ETH',
        },
      },
      slug: 'mirandus',
      id: 'Q29sbGVjdGlvblR5cGU6MTE5ODU=',
    },
  },
  {
    node: {
      name: 'Applied Primate Keycard',
      banner:
        'https://i.seadn.io/gcs/files/805094d90a7ea4fe2473c03823380309.png?w=500&auto=format',
      verificationStatus: 'VERIFIED',
      isCategory: false,
      windowCollectionStats: {
        floorPrice: {
          unit: '0.5878',
          symbol: 'ETH',
        },
        volume: {
          symbol: 'ETH',
          unit: '65.098579999999984125',
        },
      },
      slug: 'applied-primate-keycard',
      id: 'Q29sbGVjdGlvblR5cGU6MjI0NDYxNzk=',
    },
  },
  {
    node: {
      id: 'Q29sbGVjdGlvblR5cGU6MTQ5NjQ2NjQ=',
      banner:
        'https://i.seadn.io/gcs/files/6dcfe73e44fd87fcf1acd6da9c2e979f.jpg?w=500&auto=format',
      verificationStatus: 'VERIFIED',
      slug: 'real-vision-pro-crypto-genesis-collection',
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '31.740009999999998058',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '2.6',
        },
      },
      isCategory: false,
      name: 'Real Vision Pro Crypto Genesis Collection',
    },
  },
  {
    node: {
      windowCollectionStats: {
        volume: {
          unit: '12.553899999999998727',
          symbol: 'ETH',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.749',
        },
      },
      slug: 'anti-collective',
      isCategory: false,
      name: 'Anti Collective',
      banner:
        'https://i.seadn.io/gae/mMANMN9eRB5DNw1VA1R_IYAIu6m1pQR9hNEIoSql3eBe6wE6C3i9Apzxdf9mTwqgom3O9C9Jx2qEQl2phSMxdcIsRzkTSl824b9l?w=500&auto=format',
      id: 'Q29sbGVjdGlvblR5cGU6NTA2ODkyOA==',
      verificationStatus: 'VERIFIED',
    },
  },
  {
    node: {
      windowCollectionStats: {
        volume: {
          unit: '9.104889999999999262',
          symbol: 'ETH',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.53469',
        },
      },
      verificationStatus: 'UNAPPROVED',
      id: 'Q29sbGVjdGlvblR5cGU6OTAwMTAyOA==',
      name: 'Genesis Oath',
      isCategory: false,
      banner:
        'https://i.seadn.io/gae/NkfIkGIyjCAE4Rr-4kCTSUpKrjRtqQhOi_TkHiyRS2YRSUBSQKJbIhhgkJkdwyUn6yj1yubC2CaaT-YoWF3xmFFMbmI1sWQ7oy_Xdw?w=500&auto=format',
      slug: 'genesis-oath',
    },
  },
  {
    node: {
      slug: 'thewalkingdeadofficial',
      verificationStatus: 'VERIFIED',
      windowCollectionStats: {
        floorPrice: {
          symbol: 'ETH',
          unit: '0.1746',
        },
        volume: {
          unit: '10.024449999999999861',
          symbol: 'ETH',
        },
      },
      id: 'Q29sbGVjdGlvblR5cGU6NzY3NDY1NQ==',
      name: 'The Walking Dead Official',
      banner:
        'https://i.seadn.io/gae/iCve-aX5kV3SxK2Lcg2QyHRLiszap2X9Tis__3rDcWhWqRyZam15rmVWoxq6xgs1LHvrONOyzWchuC7RQks_mAzsictkjt2vQe0PAoY?w=500&auto=format',
      isCategory: false,
    },
  },
  {
    node: {
      banner:
        'https://i.seadn.io/gcs/files/4fe1915eab248d119119442b5d4c4f72.jpg?w=500&auto=format',
      name: 'Wumbo Pass',
      windowCollectionStats: {
        floorPrice: {
          symbol: 'ETH',
          unit: '1.69',
        },
        volume: {
          unit: '4.429999999999999716',
          symbol: 'ETH',
        },
      },
      id: 'Q29sbGVjdGlvblR5cGU6MTg5OTY4NDA=',
      verificationStatus: 'VERIFIED',
      slug: 'wumbopass',
      isCategory: false,
    },
  },
  {
    node: {
      slug: 'steady-stack-titans-official',
      id: 'Q29sbGVjdGlvblR5cGU6MTg4OTg0NzA=',
      isCategory: false,
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '3.959999999999999964',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '4.28',
        },
      },
      banner:
        'https://i.seadn.io/gcs/files/d07d6500acca1bab6a4603b145ee4a5e.jpg?w=500&auto=format',
      name: 'Steady Stack Titans Official',
      verificationStatus: 'VERIFIED',
    },
  },
  {
    node: {
      verificationStatus: 'VERIFIED',
      slug: 'proof-moonbirds',
      id: 'Q29sbGVjdGlvblR5cGU6MTMzNjAzMjU=',
      banner:
        'https://i.seadn.io/gae/So80zwi42fQxZVYRhedjI8U5mjV2_dMCA26MCm5SpVv2YoTuVg4daRMY-NSjxaJ8I4uxRXzeQKREb-xIxp_HgJq30ETsMFTMJnPdsg?w=500&auto=format',
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '2838.651990000001205772',
        },
        floorPrice: {
          unit: '6.49',
          symbol: 'ETH',
        },
      },
      isCategory: false,
      name: 'Moonbirds',
    },
  },
  {
    node: {
      name: 'Doodles',
      banner:
        'https://i.seadn.io/gcs/files/ad1e55ac8d380714566a3ecfe2a7dbcb.png?w=500&auto=format',
      id: 'Q29sbGVjdGlvblR5cGU6MjIyNDM5MA==',
      windowCollectionStats: {
        floorPrice: {
          unit: '5.4899',
          symbol: 'ETH',
        },
        volume: {
          symbol: 'ETH',
          unit: '1497.359779999904503711',
        },
      },
      isCategory: false,
      verificationStatus: 'VERIFIED',
      slug: 'doodles-official',
    },
  },
  {
    node: {
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '2032.087119999994911268',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '5.43',
        },
      },
      slug: 'pudgypenguins',
      isCategory: false,
      banner:
        'https://i.seadn.io/gcs/files/666f3a577300c9eeffa11d359feb58b2.png?w=500&auto=format',
      name: 'Pudgy Penguins',
      verificationStatus: 'VERIFIED',
      id: 'Q29sbGVjdGlvblR5cGU6ODA5OTEy',
    },
  },
  {
    node: {
      slug: 'the-weirdo-ghost-gang',
      windowCollectionStats: {
        floorPrice: {
          unit: '0.53',
          symbol: 'ETH',
        },
        volume: {
          symbol: 'ETH',
          unit: '1540.71594999999160791',
        },
      },
      verificationStatus: 'VERIFIED',
      name: 'The Weirdo Ghost Gang',
      id: 'Q29sbGVjdGlvblR5cGU6NzA5NzM1OQ==',
      banner:
        'https://i.seadn.io/gae/FBO6vfVx1DsBER60kO0vL-r7fouTI--iQkFMKLf3E8Vqa5SIksIvFg9_vHGM1iY6IAoKgYrxuwgB8AePWonriD02oi_ri3ZbVRuRi9I?w=500&auto=format',
      isCategory: false,
    },
  },
  {
    node: {
      banner:
        'https://i.seadn.io/gcs/files/406ec0190b5d5f7ee59ca86fb95b93a5.png?w=500&auto=format',
      verificationStatus: 'VERIFIED',
      id: 'Q29sbGVjdGlvblR5cGU6MjI4NTYwMzY=',
      name: 'The Captainz',
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '817.384399999998777275',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '4.6',
        },
      },
      slug: 'thecaptainz',
      isCategory: false,
    },
  },
  {
    node: {
      isCategory: false,
      verificationStatus: 'VERIFIED',
      windowCollectionStats: {
        volume: {
          symbol: 'ETH',
          unit: '286.374897890000283951',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '0.24769',
        },
      },
      name: 'KPR',
      slug: 'kprverse',
      id: 'Q29sbGVjdGlvblR5cGU6MjE5NDI3Mzg=',
      banner:
        'https://i.seadn.io/gcs/files/7374bcc1521d964418b18c4478862686.jpg?w=500&auto=format',
    },
  },
  {
    node: {
      isCategory: false,
      id: 'Q29sbGVjdGlvblR5cGU6MTMxMTgzMjQ=',
      banner:
        'https://i.seadn.io/gae/fLc9X7D_408jQvA8np6WB7VRJKNqm8V5eHS_Ww7Xm7hdmAUXm_T3QFaUnhYOJIhyydUWZEqRIBS_9ejYevltkhZ4i5zQsENFYWMBD5M?w=500&auto=format',
      name: 'KILLABEARS',
      windowCollectionStats: {
        volume: {
          unit: '665.384059999999976753',
          symbol: 'ETH',
        },
        floorPrice: {
          symbol: 'ETH',
          unit: '4.1',
        },
      },
      verificationStatus: 'VERIFIED',
      slug: 'killabears',
    },
  },
  {
    node: {
      slug: 'nude-abstracts',
      banner:
        'https://i.seadn.io/gcs/files/bf6b698462a7c46148c778dd981bd059.jpg?w=500&auto=format',
      windowCollectionStats: {
        volume: {
          unit: '5.149999899999998298',
          symbol: 'ETH',
        },
        floorPrice: {
          unit: '0.329',
          symbol: 'ETH',
        },
      },
      isCategory: false,
      name: 'Nude Abstracts',
      verificationStatus: 'UNAPPROVED',
      id: 'Q29sbGVjdGlvblR5cGU6MjM2NDEzMTg=',
    },
  },
  {
    node: {
      id: 'Q29sbGVjdGlvblR5cGU6MjA5NDU4NDg=',
      banner:
        'https://i.seadn.io/gcs/files/6b28d17c83d7e0449352ca005d904569.jpg?w=500&auto=format',
      name: 'Amazonia - Sebastiao Salgado',
      verificationStatus: 'VERIFIED',
      slug: 'amazonia-sebastiao-salgado',
      windowCollectionStats: {
        floorPrice: {
          unit: '0.0699',
          symbol: 'ETH',
        },
        volume: {
          symbol: 'ETH',
          unit: '1.408300000000000107',
        },
      },
      isCategory: false,
    },
  },
  {
    node: {
      slug: 'women-unite-10k-assemble',
      id: 'Q29sbGVjdGlvblR5cGU6MTI4NTQ1MTI=',
      isCategory: false,
      name: 'Women Unite - 10k Assemble',
      banner:
        'https://i.seadn.io/gae/DLA-sw1dn7YIpH-OCaY1Ci9GAO7Vc6tMlKV-46PqvdS7quNvRXfZB214rbFAv1qG7eKx8rqqS5qgNAATHQcy-tej1BPWrqeMDWPs?w=500&auto=format',
      verificationStatus: 'VERIFIED',
      windowCollectionStats: {
        floorPrice: {
          unit: '0.1663',
          symbol: 'ETH',
        },
        volume: {
          unit: '0.714789999999999925',
          symbol: 'ETH',
        },
      },
    },
  },
  {
    node: {
      windowCollectionStats: {
        floorPrice: {
          symbol: 'ETH',
          unit: '0.075',
        },
        volume: {
          symbol: 'ETH',
          unit: '0.406710000000000016',
        },
      },
      name: 'The Metascapes',
      banner:
        'https://i.seadn.io/gae/wwzLfDg6Fi1mKANIyhkxWVgu8SBbWRd3A2UB6q4NHd3YoBzU6C5UuDIvaOqG_5QBGyQ8lSjibO-EsKg9JP0uU6FTqpoOKwZrNv98?w=500&auto=format',
      isCategory: false,
      slug: 'the-metascapes',
      verificationStatus: 'SAFELISTED',
      id: 'Q29sbGVjdGlvblR5cGU6NjUyMzU2Ng==',
    },
  },
  {
    node: {
      verificationStatus: 'SAFELISTED',
      windowCollectionStats: {
        floorPrice: {
          unit: '0.0289899999',
          symbol: 'ETH',
        },
        volume: {
          symbol: 'ETH',
          unit: '0.311000000000000054',
        },
      },
      banner:
        'https://i.seadn.io/gcs/files/7082cd78d0af4c4d489bc454e6eadc6c.jpg?w=500&auto=format',
      id: 'Q29sbGVjdGlvblR5cGU6MjMwOTE4NjQ=',
      isCategory: false,
      name: 'The Infrared Journey Somewhere In Between',
      slug: 'the-infrared-journey-somewhere-in-between',
    },
  },
  {
    node: {
      windowCollectionStats: {
        floorPrice: {
          symbol: 'ETH',
          unit: '0.01',
        },
        volume: {
          symbol: 'ETH',
          unit: '0.267500000000000016',
        },
      },
      verificationStatus: 'VERIFIED',
      isCategory: false,
      slug: 'clonexforged',
      id: 'Q29sbGVjdGlvblR5cGU6MTk3MDE2OTg=',
      name: 'RTFKT Clone X Forging SZN 1 (FORGED) ⚒️',
      banner:
        'https://i.seadn.io/gcs/files/c824f83bcbf82041e8cddb655feebb92.png?w=500&auto=format',
    },
  },
  {
    node: {
      slug: 'editionsxguido',
      verificationStatus: 'VERIFIED',
      windowCollectionStats: {
        volume: {
          unit: '2.502679899989989742',
          symbol: 'ETH',
        },
        floorPrice: {
          unit: '0.0071',
          symbol: 'ETH',
        },
      },
      name: 'Editions x Guido',
      id: 'Q29sbGVjdGlvblR5cGU6NjcwNDM3Mw==',
      banner:
        'https://i.seadn.io/gae/uDuiXQtKsZI9kpV7ke_yuDJSALBtPRXfiWlmO9oeqoeLE8SAjP0gIMUh0FKD18lxsuYL5dsV7QLlClwQja9UBsT8xO4VMNV5S6lx3A?w=500&auto=format',
      isCategory: false,
    },
  },
];

const MyNft = () => {
  const [user_data] = useAtom(user_atom);
  const [nft, userNft] = useAtom(user_nfts);

  return (
    <div className='grid grid-cols-3 gap-4 p-5 justify-center'>
      {nft.map(({ metadata }, i) => {
        const { image, title, description } = metadata;

        return (
          <div className='w-fit'>
            <NftCard
              key={i}
              image={image}
              // coinImage='https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/ethereum.svg'
              // coinExt='ETH'
              // price={9.04}
              // isVerified={node?.verificationStatus === 'VERIFIED'}
              likes={Math.floor(Math.random() * 1000)}
              // userName='Ofspace NFT'
              // userId={`@${image.split('').splice(0, 10).join('')}`}
              title={title}
              // userImage='https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyNft;
