import React from 'react';
import ImageSlider from './ImageSlider';
import usePreloadImages from './usePreloadImages';

const App = () => {
  const slides = [
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck1.jpg", title: "beach" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck2.jpg", title: "boat" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck3.jpg", title: "forest" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck4.jpg", title: "city" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck5.jpg", title: "italy" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck6.jpg", title: "beach" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck7.jpg", title: "boat" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck8.jpg", title: "forest" },
    { url: "https://s3.eu-west-1.amazonaws.com/demo.amazoninstructor.info/output/seceng/img/M00_Course_Overview_InstructorDeck9.jpg", title: "city" },
  
  ];

  const containerStyles = {
    width: '40vw',
    height: '40vh',
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




