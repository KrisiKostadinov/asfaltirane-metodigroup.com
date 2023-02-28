import React from "react";

const Quality = () => {
  return (
    <section className="text-white bg-black py-10">
      <div className="container mx-auto">
        <div className="mt-10 mb-12 text-center">
          <div className="w-fit mx-auto">
            <h2 className="text-3xl md:text-4xl">КАЧЕСТВО НА ДОСТЪПНИ ЦЕНИ!</h2>
            <div className="w-[60%] h-1 mx-auto bg-yellow-500 my-5"></div>
          </div>
          <div className="max-w-[800px] mx-auto text-center">
            <p>
              <strong>
                Ако търсите фирма за асфалтиране сте попаднали на правилното
                място.
              </strong>
            </p>
            <p>
              Ние знаем, че искате да намерите{" "}
              <strong>най-доброто съотношение между цена и качество</strong>.
              Ние винаги държим ниски цени до колкото това е възможно, но това
              зависи до голяма степен от мястото и самата настилка, затова
              можете да се свържете с нас за консултация за да Ви дадем
              по-конкретна цена. Свържете се с нас на телефон:{" "}
              <a href="tex:0899076789">0899076789</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
