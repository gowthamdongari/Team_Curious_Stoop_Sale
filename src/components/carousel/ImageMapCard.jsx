import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

export function ImageMapCard() {
  const mapCenter = [51.505, -0.09]; // Example coordinates, replace with actual coordinates

  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Card className="w-full max-w-[50rem] shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <CardHeader floated={false} color="blue-gray" className="h-64 lg:h-full p-0 relative">
              <img
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="ui/ux review check"
                className="h-full w-full object-cover rounded-none"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Typography variant="h4" color="white" className="font-semibold">
                  Brooklyn Stoop Sale
                </Typography>
              </div>
            </CardHeader>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col p-4 bg-gradient-to-b from-white to-gray-100">
            <CardBody className="flex-grow">
              <Typography color="gray" className="mb-3">
                Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
              </Typography>
              <div className="mt-4">
                <MapContainer
                  center={mapCenter}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="h-32 w-full rounded-lg overflow-hidden"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={mapCenter}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="flex justify-around mt-4">
                <FacebookShareButton url={window.location.href} quote={"Check out this amazing Sale!"} hashtag="#Sale">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.href} title={"Check out this amazing Sale!"} hashtag="#Sale">
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={window.location.href} title={"Check out this amazing Sale!"}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={window.location.href} title={"Check out this amazing Sale!"}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </CardBody>
            <CardFooter className="pt-3">
              <Button size="lg" fullWidth={true} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Interested!
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
