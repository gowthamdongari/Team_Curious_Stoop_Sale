import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export function EventRegistrationForm() {
  const [eventDetails, setEventDetails] = useState({
    name: "",
    place: "",
    mapLocation: "",
    description: "",
    pictures: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setEventDetails({ ...eventDetails, pictures: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log(eventDetails);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-5 mt-2">
      <Card color="white" shadow={true} className="w-full max-w-3xl p-6 rounded-lg">
        <Typography variant="h4" color="blue-gray" className="text-center font-bold">
          Register Sales Event
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-medium">
          Fill in the details to register your event.
        </Typography>
        <form className="mt-8 w-full" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1 font-medium">
                Event Name
              </Typography>
              <Input
                size="lg"
                placeholder="Event Name"
                name="name"
                value={eventDetails.name}
                onChange={handleChange}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg shadow-md"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1 font-medium">
                Place
              </Typography>
              <Input
                size="lg"
                placeholder="Event Place"
                name="place"
                value={eventDetails.place}
                onChange={handleChange}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg shadow-md"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1 font-medium">
                Map Location
              </Typography>
              <div className="relative flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/400x200.png?text=Map+Preview"
                  alt="Map Preview"
                  className="absolute top-0 left-0 w-full h-full opacity-30"
                />
                <Input
                  size="lg"
                  placeholder="Map Location URL"
                  name="mapLocation"
                  value={eventDetails.mapLocation}
                  onChange={handleChange}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg shadow-md relative bg-transparent"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1 font-medium">
                Event Description
              </Typography>
              <Textarea
                size="lg"
                placeholder="Event Description"
                name="description"
                value={eventDetails.description}
                onChange={handleChange}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg shadow-md"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1 font-medium">
                Upload Event Pictures
              </Typography>
              <div className="relative flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/400x200.png?text=Event+Pictures"
                  alt="Event Pictures"
                  className="absolute top-0 left-0 w-full h-full opacity-30"
                />
                <input
                  type="file"
                  name="pictures"
                  multiple
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-purple-50 file:text-purple-700
                  hover:file:bg-purple-100 shadow-md relative bg-transparent"
                />
              </div>
            </div>
          </div>
          <Button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200" fullWidth type="submit">
            Register Event
          </Button>
        </form>
        <Typography color="gray" className="mt-4 text-center font-medium">
          Already have an account?{" "}
          <a href="#" className="font-semibold text-purple-700 hover:text-purple-900 transition-colors">
            Sign In
          </a>
        </Typography>
      </Card>
    </div>
  );
}
