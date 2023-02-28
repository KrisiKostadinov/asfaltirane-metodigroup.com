import React, { useEffect, useState } from "react";

const Carousel = ({ children: slides, timeout }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, timeout);

    return () => clearInterval(interval);
  }, [active]);

  const next = () =>
    active >= slides.length - 1 ? setActive(0) : setActive(active + 1);

  return (
    <div className="relative w-full h-full">
      <div className="flex w-full h-full">
        {slides.map((item, index) => (
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center mx-auto text-center ${
              active === index ? "block" : "hidden"
            }`}
            key={index}
          >
            <img
              className="w-full h-full absolute left-0 top-0 -z-10 object-cover transition-all duration-500"
              src={item.background}
              alt={item.heading}
            />
            <div className="text-white w-full max-w-[600px]">
              <h2 className="text-3xl md:text-4xl">{item.heading}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
