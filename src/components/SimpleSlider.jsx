import React from "react";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex justify-between items-center bg-gray-100 px-8 mb-8 rounded">
          <div className="flex flex-col gap-4">
            <div className="text-5xl">“Shoes are Boring. Wear Sneakers.”</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, aut!
            </p>
            <button className="bg-gray-200 text-start w-fit p-2 rounded">
              Learn More
            </button>
          </div>
          <img
            src="https://static.nike.com/a/images/t_default/39887545-1b81-4cdd-bb14-8695fa2058fa/air-force-1-react-mens-shoes-WSjfs8.png"
            alt="sneaker_image"
          />
        </div>
        <div className="!flex justify-between items-center bg-gray-100 px-8">
          <div className="flex flex-col gap-4">
            <div className="text-5xl">“Shoes are Boring. Wear Sneakers.”</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, aut!
            </p>
            <button className="bg-gray-200 text-start w-fit p-2 rounded">
              Learn More
            </button>
          </div>
          <img
            src="https://static.nike.com/a/images/t_default/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png"
            alt="sneaker_image"
          ></img>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
