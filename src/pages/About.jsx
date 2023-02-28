import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MetaTags } from "react-meta-tags";
import ClientReviews from "../components/clients-reviews/ClientsReviews";
import Quality from "../components/quality/Quality";
import { icons, metaTags } from "../constants";
import logo from "../assets/images/logo.png";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MetaTags>
        <title>За нас - {metaTags.site_name}</title>
        <link
          rel="canonical"
          href="https://asfaltirane-metodigroup.com/za-nas"
        />
        <meta
          name="description"
          content="Дълогогодишен опит в асфалтирането. Обадете се още сега! 0899 07 67 89"
        />
        <meta name="og:title" content={`За нас - ${metaTags.site_name}`} />
        <meta
          name="og:description"
          content="Дълогогодишен опит в асфалтирането. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:url"
          content="https://asfaltirane-metodigroup.com/za-nas"
        />
      </MetaTags>
      <div className="w-full mt-10">
        <h1 className="heading-1 text-center">За нас</h1>
        <div className="container mx-auto grid md:grid-cols-2 gap-10 mt-10 max-sm:px-5">
          <section className="max-md:order-2">
            <p>
              Ние сме{" "}
              <a className="text-yellow-500" href="/">
                asfaltirane-metodigroup
              </a>{" "}
              и се занимаваме с асфалтиране повече от 20 години. Имаме бригада
              от специалисти, доказали се в областта си. Ние работим в цялата
              страна и имаме много успешни проекти. Също разполагаме с най-
              добрите машини за да изградим асфалта по най-добрия начин.
            </p>
          </section>
          <section className="max-md:order-1">
            <img className="" src={logo} alt="Асфалтиране Методи Строй" />
          </section>
        </div>
        <section className="container mx-auto mt-10">
          <h2 className="heading-2 text-center">Услуги</h2>
          <div className="flex justify-center text-center">
            <div>
              <ul className="text-xl flex flex-col gap-5 max-sm:px-5 mt-10">
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">
                    {icons.CheckIcon}
                  </span>
                  <span>Асфалтиране на тротоари</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">
                    {icons.CheckIcon}
                  </span>
                  <span>Асфлатиране на малки площи</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">
                    {icons.CheckIcon}
                  </span>
                  <span>Асфалтиране на големи площи</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">
                    {icons.CheckIcon}
                  </span>
                  <span>
                    Цялостно асфалтиране на улици, пътища, двор, градинки и
                    други.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">
                    {icons.CheckIcon}
                  </span>
                  <span>Нареждане и пренареждане на бордюри</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">
                    {icons.CheckIcon}
                  </span>
                  <span>Полагане на всякакви видове смеси</span>
                </li>
              </ul>
              <div className="mt-10 text-lg max-md:text-center">
                <Link className="button-primary" to="/contacts">
                  Контакти
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="my-10">
        <Quality />
      </div>
      <ClientReviews />
    </>
  );
};

export default About;
