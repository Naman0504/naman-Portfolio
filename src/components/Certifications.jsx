import React from "react";
import Slider from "react-slick";
import intern from "../assets/certificate intern (1).jpg";
import sql from "../assets/sql.jpg";
import c from "../assets/c.jpg";
import nptel from "../assets/nptel.jpg";
import web from "../assets/webVT.jpg";

const Certifications = () => {
  const certify = [
    {
      id: 1,
      title: "SQL(Basic)  ",
      img: sql,
    },
    {
      id: 2,
      title: "PhpFullstack internship",
      img: intern,
    },
    {
      id: 3,
      title: "C Training ",
      img: c,
    },
    {
      id: 4,
      title: "Problem solving through programming in C",
      img: nptel,
    },

    {
      id: 5,
      title: "Vocational training in Web Development",
      img: web,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div
      name="certification"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg  mx-auto p-8 flex flex-col space-y-16 justify-center h-full md:max-w-screen-xl ">
        <div>
          <p className="w-fit mx-auto text-4xl font-bold text-center border-b-4 border-gray-400">
            Certifications
          </p>
        </div>
        <div className="w-full">
          <Slider {...settings} className="shadow-lg shadow-gray-100 ">
            {/* Certificate 1 */}

            {certify.map(({ id, title, img }) => (
              <div key={id} className="p-5 md:w-96 ">
                <img
                  src={img}
                  alt="Certificate 1"
                  className=" w-full h-80 mb-2"
                />
                <p className="text-md w-full text-center font-semibold">
                  {title}
                </p>
              </div>
            ))}

            {/* <div className="p-4 ">
              <img
                src={intern}
                alt="Certificate 1"
                className="w-full h-auto mb-2"
              />
              <h3 className="text-lg text-center font-semibold">
                Certificate 1 Title
              </h3>
            </div> */}
            {/* Certificate 2 */}
            {/* <div className="p-4">
              <img
                src={intern}
                alt="Certificate 2"
                className="w-full h-auto mb-2"
              />
              <h3 className="text-lg font-semibold">Certificate 2 Title</h3>
            </div> */}
            {/* Certificate 3 */}
            {/* <div className="p-4">
              <img
                src={intern}
                alt="Certificate 3"
                className="w-full h-auto mb-2"
              />
              <h3 className="text-lg font-semibold">Certificate 3 Title</h3>
            </div> */}
            {/* Add more certificates as needed */}
            {/* <div className="p-4">
              <img
                src="certificate4.jpg"
                alt="Certificate 4"
                className="w-full h-auto mb-2"
              />
              <h3 className="text-lg font-semibold">Certificate 4 Title</h3>
            </div>
            <div className="p-4">
              <img
                src="certificate5.jpg"
                alt="Certificate 5"
                className="w-full h-auto mb-2"
              />
              <h3 className="text-lg font-semibold">Certificate 5 Title</h3>
            </div>
            <div className="p-4">
              <img
                src="certificate6.jpg"
                alt="Certificate 6"
                className="w-full h-auto mb-2"
              />
              <h3 className="text-lg font-semibold">Certificate 6 Title</h3>
            </div> */}
            {/* Add more certificates as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
