import React from "react";
import { Link } from "react-router-dom";

import slide1 from "../../assets/images/slider/manual-asphalting.jpg";

const WhyUs = () => {
  return (
    <section className="text-white bg-gradient-to-tr from-yellow-500 to-red-500 pt-10 pb-20">
      <div className="container mx-auto">
        <div className="w-fit mx-auto">
          <h2 className="text-3xl md:text-4xl">Защо да изберете нас?</h2>
          <div className="w-[70%] h-1 mx-auto bg-white mt-5"></div>
        </div>
        <div className="flex max-lg:flex-col justify-between items-center gap-10 mt-10">
          <ul className="border-l-2 pl-5 md:pl-10">
            <li>
              <div className="flex gap-6 sm:gap-10 items-center">
                <div className="bg-white text-yellow-500 p-2 xl:p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl py-5">Дългогодишен опит</h3>
              </div>
              <p>
                Нашата бригада от специалисти в асфалтирането има зад гърба си
                много завършени проекти. Разсполагаме с професионални и модерни
                машини за полагане на асфалт.
              </p>
            </li>
            <li>
              <div className="flex gap-6 sm:gap-10 items-center">
                <div className="bg-white text-yellow-500 p-2 xl:p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hammer w-10 h-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl py-5">
                  Професионални машини
                </h3>
              </div>
              <p>
                С нашите професионални машини можем да Ви гарантираме, че
                извършената от нас работа, ще бъде качествена.
              </p>
            </li>
            <li>
              <div className="flex gap-6 sm:gap-10 items-center">
                <div className="bg-white text-yellow-500 p-2 xl:p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cash-coin w-10 h-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl py-5">Много добри цени</h3>
              </div>
              <p>
                Ние работим на ниски цени, но винаги се стремим да вършим
                работата си качествено и да спазваме всички поставени срокове.
              </p>
            </li>
          </ul>
          <img
            className="w-full md:max-w-[400px] max-w-[600px] xl:max-w-[700px] h-full"
            src={slide1}
            alt="Защо да изберете нас?"
          />
        </div>
        <div className="mt-10 text-xl max-sm:text-center">
          <Link className="py-4 px-6 bg-white text-yellow-500" to="/contacts">
            СВЪРЖЕТЕ СЕ С НАС
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
