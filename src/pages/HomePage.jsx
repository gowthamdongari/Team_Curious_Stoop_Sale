import React from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/topnavbar/TopNavBar";
import Footer from "../components/common/Footer";
import ImgCarousel from "../components/carousel/ImgCarousel";
import MapComponent from "../components/mapcomponent/MapComponent";
import StoopSale from "../components/stoopSale/StoopSale";

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
              <ImgCarousel />
              <MapComponent />
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
