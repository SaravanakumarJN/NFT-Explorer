import React from 'react';

const NFTCrad = ({ nft }: any) => {
  const cardStyles = {
    display: 'flex',
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    flex: '10%',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    minHeight: '400px',
    minWidth: '350px',
    maxWidth: '400px',
    maxHeight: '500px',
    margin: '10px',
  };
  const imageStyles = {
    width: '250px',
    height: '250px',
  };
  // console.log({ nft });
  const img: any = nft?.metadata?.image;
  const descriptions: any = nft.description;
  return (
    <>
      {img && descriptions != 'blockchain' ? (
        <div style={cardStyles}>
          <img style={imageStyles} src={nft.metadata.image} />

          <p>{nft.rawMetadata.name || nft.metadata.title}</p>
          <p>{nft.description}</p>
          <p>
            {nft.metadata?.attributes?.map((item: any, index: number) => (
              <span
                style={{
                  padding: '4px',
                  borderRadius: '10px',
                  background: 'black',
                  color: 'white',
                  border: 'none',
                  margin: '2px 4px',
                }}
                key={index}
              >
                {item.trait_type}:{item.value}
              </span>
            ))}
          </p>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default NFTCrad;
