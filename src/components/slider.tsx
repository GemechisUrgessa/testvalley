/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from "./imageCard";

const ImageSlider = ({ mainBanner }: { mainBanner: any }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-390", // Adjust the padding to control the side image visibility
    autoplay: true,
    autoplaySpeed: 3000,
    // width: "40rem",
    // height: "20rem",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative">
      {/* Slider */}
      <Slider {...settings}>
        {/* Slide 1 */}
        {mainBanner.map(function (item: any) {
          return <ImageCard key={item.mainBannerId} item={item} />;
        })}

        {/* Add more slides as needed */}
      </Slider>

      {/* Slide Navigation Arrows */}
      {/* ... (These will be rendered by SampleNextArrow and SamplePrevArrow components) */}
    </div>
  );
};

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`absolute z-10 right-[490px] top-1/2 transform -translate-y-1/2 cursor-pointer arrow`}
      onClick={onClick}
    >
      {/* Use SVG or an image tag for custom arrows */}
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
        {/* Right Arrow Placeholder */}
        <div className="text-2xl text-gray-600">&rarr;</div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`absolute z-10 left-[570px] top-1/2 transform -translate-y-1/2 cursor-pointer arrow`}
      onClick={onClick}
    >
      {/* Use SVG or an image tag for custom arrows */}
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
        {/* Left Arrow Placeholder */}
        <div className="text-2xl text-gray-600">&larr;</div>
      </div>
    </div>
  );
}

export default ImageSlider;
