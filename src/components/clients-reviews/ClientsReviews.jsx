import React from "react";
import { clientReviews } from "../../constants";

const ClientsReviews = () => {
  return (
    <section className="text-white bg-black py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="heading-2 text-center">Отзиви от доволни клиенти</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20">
          {clientReviews.map((item, index) => (
            <li className="w-full text-lg text-center max-sm:px-5" key={index}>
              <div className="w-full flex justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="border-white border-4 rounded-full"
                />
              </div>
              <h3 className="text-2xl my-5">{item.name}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientsReviews;
