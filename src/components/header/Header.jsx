import React, { useEffect, useState } from "react";
import { MetaTags } from "react-meta-tags";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { metaTags, navItems } from "../../constants";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState();
  const { pathname } = useLocation();

  const handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="bg-white shadow-lg sticky top-0 navbar">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2 max-sm:px-5">
          <div className="md:max-w-[300px] w-[60%]">
            <a className="w-full" href="/">
              <img
                className="w-full"
                src={logo}
                alt="Асфалтиране Методи Строй"
              />
            </a>
            <MetaTags>
              <meta
                property="og:image"
                content="../../assets/images/logo.png"
              />
              <meta property="og:image:alt" content={metaTags.site_desc} />
              <meta name="og:site_name" content={metaTags.site_name} />
            </MetaTags>
          </div>
          <nav>
            <ul className="relative md:flex hidden gap-2 text-lg">
              {navItems.map((item, index) => (
                <li className="group" key={index}>
                  <Link
                    className={`flex flex-col items-center py-4 px-2 hover:text-yellow-500 group-hover:text-yellow-500 ${
                      active === item.link && "text-yellow-500"
                    }`}
                    to={item.link}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                  {item.children && (
                    <>
                      <ul className="nested-list">
                        {item.children.map((item, index) => (
                          <li key={index}>
                            <Link
                              className={`flex items-center gap-5 w-full py-2 px-4 rounded hover:bg-yellow-500 hover:text-black ${
                                active === item.link && "text-yellow-500"
                              }`}
                              to={item.link}
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                  />
                                </svg>
                              </span>
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <button className="md:hidden block" onClick={() => handleClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <ul
              className={`${
                nav ? "translate-x-0" : "translate-x-full"
              } fixed top-14 right-0 w-[80vw] h-screen bg-white shadow-lg p-5 transition-all`}
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <li className="group" key={index}>
                    <Link
                      className={`w-full inline-block py-2 px-5 hover:bg-yellow-500 hover:text-black rounded ${
                        active === item.link && "text-yellow-500"
                      }`}
                      to={item.link}
                      onClick={() =>
                        item.locked != true ? handleClick() : null
                      }
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <ul className="group-hover:flex hidden flex-col pl-10">
                        {item.children.map((item, index) => (
                          <li key={index}>
                            <Link
                              className={`w-full inline-block py-2 px-4 rounded hover:bg-yellow-500 hover:text-black ${
                                active === item.link && "text-yellow-500"
                              }`}
                              onClick={() => handleClick()}
                              to={item.link}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
