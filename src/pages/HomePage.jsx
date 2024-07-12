import React from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/topnavbar/TopNavBar";
import Footer from "../components/common/Footer";
import SideNavBar from "../components/sidenavbar/SideNavBar";
import ImgCarousel from "../components/carousel/ImgCarousel";
import MapComponent from "../components/mapcomponent/MapComponent";
import { ImageCard } from "../components/carousel/ImageCard";
import {ImageMapCard} from "../components/carousel/ImageMapCard"

function HomePage() {
  return (
    <div className="flex h-full w-full">
      {/* Side Navbar */}
      <SideNavBar />
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          <div className="h-full">
            {/* TopNavBar */}
            <TopNavBar />
            <div className="pt-5s mx-auto bg-navy-800/10 mb-auto h-full min-h-[84vh] p-2 md:pr-2">
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
