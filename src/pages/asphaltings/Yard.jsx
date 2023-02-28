import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MetaTags } from "react-meta-tags";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import yardAsphalting from "../../assets/images/asphaltings/yard-asphalting.jpeg";
import { metaTags } from "../../constants";

const Yard = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MetaTags>
        <title>
          Асфалтиране на дворове в София и страната - {metaTags.site_name}
        </title>
        <link
          rel="canonical"
          href="https://asfaltirane-metodigroup.com/afaltirane-na-dvor"
        />
        <meta
          name="description"
          content="Фирма за асфалтиране на дворове в град София и страната на достъпни цени. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:title"
          content={`Асфалтиране на дворове в София и страната - ${metaTags.site_name}`}
        />
        <meta
          name="og:description"
          content="Фирма за асфалтиране на дворове в град София и страната на достъпни цени. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:url"
          content="https://asfaltirane-metodigroup.com/afaltirane-na-dvor"
        />
      </MetaTags>
      <section className="w-full py-10 max-md:px-5">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Асфалтиране на двор в София и страната
          </h1>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p>
                Ако имате голямо или малко място, което може да се асфалтира,
                ние мoжем да Ви бъдем полезни. Фирмата ни се занимава от много
                години в сферата на строителството на пътища, улици и други.
                Нашите професионалисти имат дълогогодишен опит в полагането на
                асфалт и са се доказали в услугите си. Ние винаги се стараем да
                спазваме сроковете и да работим качествено.
              </p>
              <p>
                Също така предлагаме безплатен оглед на мястото, независимо къде
                се намирате. Извършваме асфалтиране в София, Пловдив и цялата
                страна
              </p>
              <p>
                Ако изберете нашата фирма, ние Ви даваме гаранция за извършените
                от нас услуги: асфалтиране на дворове, улици, паркинги, малки и
                големи площадки и други от{" "}
                <a className="text-yellow-500 font-bold" href="/contacts">
                  тук
                </a>
                .
              </p>
              <div className="flex items-center gap-5">
                <Link className="button-primary text-lg" to={"/contacts"}>
                  Контакти
                </Link>
                <Link className="button-primary text-lg" to={"/gallery"}>
                  Нашите проекти
                </Link>
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src={yardAsphalting}
                alt="Асфалтиране на улици в София и страната"
              />
            </div>
          </div>
        </div>
      </section>
      <Quality />
      <div className="w-full h-5 md:h-10 bg-white rotate-2"></div>
      <ClientsReviews />
      <WhyUs />
    </>
  );
};

export default Yard;
