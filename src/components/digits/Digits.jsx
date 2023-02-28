import React from "react";

const Digits = () => {
  return (
    <section className="w-full h-auto">
      <h2 className="text-3xl md:text-4xl my-10 text-center">
        Нашата работа в цифри
      </h2>
      <div className="text-white bg-gradient-to-r from-yellow-500 to-red-500 py-10 mt-10">
        <div className="container mx-auto my-5">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex flex-col items-center justify-center">
              <div className="text-6xl">100+</div>
              <p className="text-xl">Градове</p>
            </li>
            <li className="flex flex-col items-center justify-center">
              <div className="text-6xl">400+</div>
              <p className="text-xl">Успешни проектa</p>
            </li>
            <li className="flex flex-col items-center justify-center">
              <div className="text-6xl">400+</div>
              <p className="text-xl">Доволни клиентa</p>
            </li>
            <li className="flex flex-col items-center justify-center">
              <div className="text-6xl">20+</div>
              <p className="text-xl">Години опит</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Digits;
