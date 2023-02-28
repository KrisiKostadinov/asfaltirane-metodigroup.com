import React, { useEffect } from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import sidewalkAsphalting from "../../assets/images/asphaltings/sidewalk-asphalting.jpeg";
import { Link, useLocation } from "react-router-dom";
import { MetaTags } from "react-meta-tags";
import { metaTags } from "../../constants";

const Sidewalk = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MetaTags>
        <title>
          Нареждане на тротоари в София и страната - {metaTags.site_name}
        </title>
        <link
          rel="canonical"
          href="https://asfaltirane-metodigroup.com/narezhdane-na-trotoar"
        />
        <meta
          name="description"
          content="Нареждане на бордюри и тротоари в град София и страната. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:title"
          content={`Нареждане на тротоари в София и страната - ${metaTags.site_name}`}
        />
        <meta
          name="og:description"
          content="Нареждане на бордюри и тротоари в град София и страната. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:url"
          content="https://asfaltirane-metodigroup.com/narezhdane-na-trotoar"
        />
      </MetaTags>
      <section className="w-full py-10 max-md:px-5">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Нареждане на тротоар в София и страната
          </h1>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p>
                Асфалтиране София, Полвдив се е доказала като надежна и
                професионална фирма за асфалтиране и нареждане на тротоари,
                улици, пътища и други.
              </p>
              <p>
                Ние разсполагаме с висико-технологични и модерни машини за
                полагане на асфалт на всякакви терени. Нашите специалисти имат
                голям опит по различни места в цялата страна и можем да им се
                доверим, че знаят как да подходят към всяка задача.
              </p>
              <p>
                Фирмата предлага безплатен оглед, където и да се намирате в
                страната.
              </p>
              <p>
                Има места, на които би било по-подходящо да се нанася ръчно
                настилката, а на други машинно. Ако имате някакви въпроси
                най-добре се свържете с наш специалист за консултация от{" "}
                <a className="text-yellow-500 font-bold" href="/contacts">
                  тук
                </a>
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
                src={sidewalkAsphalting}
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

export default Sidewalk;
