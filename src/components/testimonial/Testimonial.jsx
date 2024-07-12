import {
    Card,
    CardBody,
    Typography,
    CardHeader,
  } from "@material-tailwind/react";
  
  function TestimonialCard({ img, client, title, clientInfo }) {
    return (
      <Card shadow={false} className="bg-gray-800/90 text-white rounded-2xl p-6">
        <CardHeader color="transparent" floated={false} shadow={false}>
          <Typography
            color="white"
            className="lg:mb-20 mb-4 text-2xl font-bold"
          >
            &quot;{title}&quot;
          </Typography>
        </CardHeader>
        <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <Typography variant="h6" color="white">
              {client}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-300"
            >
              {clientInfo}
            </Typography>
          </div>
          <img src={img} className="max-w-[8rem]" alt={client} />
        </CardBody>
      </Card>
    );
  }
  
  const testimonials = [
    {
      title:
        "The Brooklyn stoop sale was an incredible experience! Found amazing deals and met wonderful people.",
      client: "John Doe",
      clientInfo: "Local Resident",
      img: "/images/avatar1.jpg",
    },
    {
      title:
        "Loved the variety of items at the stoop sale. It's a must-visit for anyone in the neighborhood!",
      client: "Jane Smith",
      clientInfo: "Local",
      img: "/images/avatar3.jpg",
    },
    {
        title:
          "The Brooklyn stoop sale was an incredible experience! Found amazing deals and met wonderful people.",
        client: "John Doe",
        clientInfo: "Local Resident",
        img: "/images/avatar1.jpg",
      },
      {
        title:
          "Loved the variety of items at the stoop sale. It's a must-visit for anyone in the neighborhood!",
        client: "Jane Smith",
        clientInfo: "Local",
        img: "/images/avatar3.jpg",
      },{
        title:
          "The Brooklyn stoop sale was an incredible experience! Found amazing deals and met wonderful people.",
        client: "John Doe",
        clientInfo: "Local Resident",
        img: "/images/avatar1.jpg",
      },
      {
        title:
          "Loved the variety of items at the stoop sale. It's a must-visit for anyone in the neighborhood!",
        client: "Jane Smith",
        clientInfo: "Local",
        img: "/images/avatar3.jpg",
      }
  ];
  
  export function Testimonial() {
    return (
      <section className="px-8 py-10 lg:py-28 bg-gray-900 text-white">
        <div className="container mx-auto">
          <Typography
            variant="h2"
            color="white"
            className="mb-4 !text-2xl lg:!text-4xl text-center"
          >
            What People say about us
          </Typography>
          <Typography
            variant="lead"
            className="max-w-3xl !text-gray-400 mb-10 lg:mb-20 text-center mx-auto"
          >
            That's the main thing people are controlled by! Thoughts - their perception of themselves!
          </Typography>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            {testimonials.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  

  export default Testimonial;
  