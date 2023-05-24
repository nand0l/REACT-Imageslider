import React from 'react';
import ImageSlider from './ImageSlider';
import usePreloadImages from './usePreloadImages';

const App = () => {
  const slides = [
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0001.jpg", title: "beach" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0002.jpg", title: "boat" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0003.jpg", title: "forest" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0004.jpg", title: "city" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0005.jpg", title: "italy" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0006.jpg", title: "beach" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0007.jpg", title: "boat" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0008.jpg", title: "forest" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0009.jpg", title: "city" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0010.jpg", title: "italy" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0011.jpg", title: "beach" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0012.jpg", title: "boat" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0013.jpg", title: "forest" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0014.jpg", title: "city" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0015.jpg", title: "italy" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0016.jpg", title: "beach" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0017.jpg", title: "boat" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0018.jpg", title: "forest" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0019.jpg", title: "city" },
    { url: "https://00009999000088889999.s3.eu-west-1.amazonaws.com/ma-access/Julietta-Veggie_Lifestyle/0020.jpg", title: "italy" },
  ];

  const containerStyles = {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
  };

  const imageUrls = slides.map((slide) => slide.url);
  usePreloadImages(imageUrls);

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;




