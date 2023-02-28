import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import rollerIcon from "../../assets/images/roller.png";

const navLeftItems = [
  {
    name: "За нас",
    link: "/za-nas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: "Контакти",
    link: "/contacts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    name: "Галерия",
    link: "/gallery",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    name: "Email metodistroi@gmail.com",
    link: "mailto:metodistroi@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    name: "Телефон 089 90 767 89",
    link: "tel:0899076789",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

const navRightItems = [
  {
    name: "Асфалтиране на малки площи",
    link: "/asfaltirane-na-malki-i-golemi-ploshti",
    icon: rollerIcon,
  },
  {
    name: "Асфалтиране на големи площи",
    link: "/asfaltirane-na-malki-i-golemi-ploshti",
    icon: rollerIcon,
  },
  {
    name: "Асфалтиране на алеи",
    link: "/asfaltirane-na-alei",
    icon: rollerIcon,
  },
  {
    name: "Асфалтиране на двор",
    link: "/afaltirane-na-dvor",
    icon: rollerIcon,
  },
  {
    name: "Асфалтиране на тротоар",
    link: "/narezhdane-na-trotoar",
    icon: rollerIcon,
  },
  {
    name: "Асфалтиране на пътища",
    link: "/asfaltirane-na-patishta",
    icon: rollerIcon,
  },
  {
    name: "Асфалтиране на улици",
    link: "/asfaltirane-na-ulitsi",
    icon: rollerIcon,
  },
];

const Footer = () => {
  return (
    <footer className="w-full mt-10 pt-10 text-white bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 max-md:px-5">
          <div className="flex flex-col gap-5 max-md:col-span-3">
            <img
              className="max-w-[340px]"
              src={logo}
              alt="Асфалтиране Методи Строй"
            />
            <p className="text-lg">
              <a href="/" className="text-yellow-500">
                asfaltirane-metodigroup
              </a>{" "}
              има бригада с дългогодишен опит в полагането на асфалт на пътища,
              улици, дворове, градинки, малки и големи площи, нареждане и
              пренареждане на бордюри. Фирмата разсполага с специализирани
              машини за полагане на асфалт, валяци и други.
            </p>
          </div>
          <div className="max-md:col-span-3">
            <h6 className="text-2xl mb-10">Меню</h6>
            <ul className="flex flex-col gap-5">
              {navLeftItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-lg flex gap-5 hover:text-yellow-500"
                    to={item.link}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-md:col-span-3">
            <h6 className="text-2xl mb-10">Нашите услуги</h6>
            <ul className="flex flex-col gap-5">
              {navRightItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-lg flex gap-5 hover:text-yellow-500"
                    to={item.link}
                  >
                    <img className="w-6" src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 text-center bg-gray-900 mt-10">
        <div>
          &copy; 2023 Всички права запазени. Изработака на уеб сайт от{" "}
          <a className="text-yellow-500" href="https://kriskata.com">
            Kristian Kostadinov
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
