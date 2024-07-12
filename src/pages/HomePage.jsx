import React from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/topnavbar/TopNavBar";
import Footer from "../components/common/Footer";
import ImgCarousel from "../components/carousel/ImgCarousel";
import MapComponent from "../components/mapcomponent/MapComponent";
import StoopSale from "../components/stoopSale/StoopSale";
import { ImageCard } from "../components/carousel/ImageCard";
import {ImageMapCard} from "../components/carousel/ImageMapCard"

function HomePage() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* TopNavBar */}
      <TopNavBar />
      <div className="flex-1 p-4">
        {/* Main Content */}
        <main className="h-full w-full">
          <div className="h-full">
            <div className="pt-5 mx-auto bg-navy-800/10 mb-auto h-full min-h-[84vh] p-2">
              {/* <Outlet /> */}
              {/* <ImgCarousel /> */}

              {/* <MapComponent /> */}

              {/* card component */}

              {/* <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <ImageCard />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <ImageCard />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <ImageCard />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <ImageCard />
                </div>
              </div> */}

                <ImageMapCard/>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
