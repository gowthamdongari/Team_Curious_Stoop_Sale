import React from "react";
import Footer from "../components/common/Footer";
import { ImageMapCard } from "../components/carousel/ImageMapCard";

function HomePage() {
  const imgData = [
    {
      title: "Brooklyn Stoop Sale",
      address:
        "Join us at a lively Brooklyn stoop sale filled with unique treasures, vintage items, and handmade crafts, Starts on July 12th at 5 PM .",
      mapCenter: [51.505, -0.09],
      imgSrc:
       "/images/stoopsale1.jpg",
    },
    {
      title: "Brooklyn Stoop Sale",
      address:
        "Join us at a lively Brooklyn stoop sale filled with unique treasures, vintage items, and handmade crafts, Starts on July 12th at 5 PM .",
      mapCenter: [51.505, -0.09],
      imgSrc:
        "/images/stoopsale2.jpg",
    },
    {
      title: "Brooklyn Stoop Sale",
      address:
        "Join us at a lively Brooklyn stoop sale filled with unique treasures, vintage items, and handmade crafts, Starts on July 12th at 5 PM .",
      mapCenter: [51.505, -0.09],
      imgSrc:
        "/images/stoopsale3.jpg",
    },
    {
      title: "Brooklyn Stoop Sale",
      address:
        "Join us at a lively Brooklyn stoop sale filled with unique treasures, vintage items, and handmade crafts, Starts on July 12th at 5 PM .",
      mapCenter: [51.505, -0.09],
      imgSrc:
        "/images/stoopsale4.jpg",
    },
  ];
  return (
    <main className="h-full w-full">
      <div className="h-full">
        <div className="pt-5 mx-auto bg-navy-800/10 mb-auto h-full min-h-[84vh] p-2">
          {/* <Outlet /> */}
          {/* <ImgCarousel /> */}

          {/* <MapComponent /> */}

          {/* card component */}

          <div className="flex flex-wrap -mx-8">
            {imgData.map((data,index) => {
              return (
                <div key={index} className="w-full sm:w-1/2 px-2 mb-4">
                  <ImageMapCard
                    title={data.title}
                    address={data.address}
                    mapCenter={data.mapCenter}
                    imgSrc={data.imgSrc}
                  />
                </div>
              );
            })}
          </div>

          {/* <ImageMapCard/> */}
        </div>
        <div className="p-3">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
