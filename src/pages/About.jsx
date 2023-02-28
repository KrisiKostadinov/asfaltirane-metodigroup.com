import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ClientReviews from "../components/clients-reviews/ClientsReviews";
import Quality from "../components/quality/Quality";
import { icons, metaTags } from "../constants";
import logo from "../assets/images/logo.png";
import SetMetaTags from "../components/meta-tags/SetMetaTags";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SetMetaTags
        title={`За нас - ${metaTags.site_name}`}
        description={"От asfaltirane-metodigroup се занимаваме с асфалтиране повече от 20 години. Имаме бригада от специалисти, доказали се в областта си."}
        keywords={
          "асфалтиране, асфалтиране на София, асфалтиране на Пловдив, полагане на асфалт"
        }
      />
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
