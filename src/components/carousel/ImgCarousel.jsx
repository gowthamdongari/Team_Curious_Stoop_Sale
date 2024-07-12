import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={false}
      showArrows={true}
      dynamicHeight={true}
    >
      <div>
        <img src="https://picsum.photos/200" alt="Image 1" />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="Image 2" />
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default ImgCarousel;
