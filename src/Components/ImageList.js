import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular}></img>;
  });
  return <div key={images.id}>{images}</div>;
};
export default ImageList;