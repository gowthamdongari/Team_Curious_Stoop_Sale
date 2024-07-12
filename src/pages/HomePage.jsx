import React from "react";
import Footer from "../components/common/Footer";
import { ImageMapCard } from "../components/carousel/ImageMapCard";

function HomePage() {
  return (
    <main className="h-full w-full">
      <div className="h-full">
        <div className="pt-5 mx-auto bg-navy-800/10 mb-auto h-full min-h-[84vh] p-2">
          {/* <Outlet /> */}
          {/* <ImgCarousel /> */}

          {/* <MapComponent /> */}

          {/* card component */}

          <div className="flex flex-wrap -mx-8">
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <ImageMapCard />
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <ImageMapCard />
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <ImageMapCard />
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <ImageMapCard />
            </div>
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
