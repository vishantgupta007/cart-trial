import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import "./Slider.css";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   If current Silde is 0 then navigate to last & if current slide is last navigate to first and vice-versa for next image

  const prevImage = () => {
    setCurrentSlide((prev) => (prev === 0 ? 4 : prev - 1));
  };
  const nextImage = () => {
    setCurrentSlide((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const data = [
    " https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/17404523/pexels-photo-17404523/free-photo-of-young-woman-wearing-a-denim-jacket-and-orange-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    " https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="slider">
      {/* inLine style of translate X if current viewPort is 100 it will bw 0 if it 2 it will be 200vw */}
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {/* mapping the data array  */}

        {data.map((image, index) => (
          <img key={index} src={image} alt=""/>
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevImage}>
          <BsArrowLeftSquare />
        </div>
        <div className="icon" onClick={nextImage}>
          <BsArrowRightSquare />
        </div>
      </div>
    </div>
  );
};

export default Slider;
