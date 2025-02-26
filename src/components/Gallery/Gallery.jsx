import { useState, useEffect } from "react";

const Gallery = () => {
  const images = [
    "https://ca-times.brightspotcdn.com/dims4/default/5c7a039/2147483647/strip/true/crop/4491x3062+0+0/resize/1200x818!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2d%2Fb7%2F713fcd9bc03dc27561bef9816e70%2F6d860659637343d2b9337b328bca9378",
    "https://www.museoceramadrid.com/wp-content/uploads/Cristiano-Ronaldo_.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-ya-es-historia-en-el-real-madrid-1531237555.jpg?resize=640:*",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full h-200 bg-gray-700 overflow-hidden flex justify-center items-center my-[20%]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionTimingFunction: "ease-in-out",
            transitionDelay: `${index === currentImage ? "0s" : "1s"}`,
          }}
        />
      ))}
    </div>
  );
};

export default Gallery;
