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
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Brooklyn Stoop Sale",
      address:
        "Join us at a lively Brooklyn stoop sale filled with unique treasures, vintage items, and handmade crafts, Starts on July 12th at 5 PM .",
      mapCenter: [51.505, -0.09],
      imgSrc:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Brooklyn Stoop Sale",
      address:
        "Join us at a lively Brooklyn stoop sale filled with unique treasures, vintage items, and handmade crafts, Starts on July 12th at 5 PM .",
      mapCenter: [51.505, -0.09],
      imgSrc:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Brooklyn Stoop Sale",
      address:
        "Join us at a lively Brooklyn stoop sale filled with unique treasures, vintage items, and handmade crafts, Starts on July 12th at 5 PM .",
      mapCenter: [51.505, -0.09],
      imgSrc:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
