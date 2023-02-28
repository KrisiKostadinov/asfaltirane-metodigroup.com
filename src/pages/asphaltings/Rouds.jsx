import React, { useEffect } from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import WhyUs from "../../components/why-us/WhyUs";
import Quality from "../../components/quality/Quality";
import bigAsphalting from "../../assets/images/asphaltings/big-asphalting.jpeg";
import { Link, useLocation } from "react-router-dom";
import { MetaTags } from "react-meta-tags";
import { metaTags } from "../../constants";

const Rouds = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MetaTags>
        <title>
          Асфалтиране на пътища в София и страната - {metaTags.site_name}
        </title>
        <link
          rel="canonical"
          href="https://asfaltirane-metodigroup.com/asfaltirane-na-patishta"
        />
        <meta
          name="description"
          content="Предлагаме надеждно асфалтиране с гаранция за качество на достъпни за страната цени. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:title"
          content={`Асфалтиране на пътища в София и страната - ${metaTags.site_name}`}
        />
        <meta
          name="og:description"
          content="Предлагаме надеждно асфалтиране с гаранция за качество на достъпни за страната цени. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:url"
          content="https://asfaltirane-metodigroup.com/asfaltirane-na-patishta"
        />
      </MetaTags>
      <section className="w-full py-10 max-md:px-5">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Асфалтиране на пътища в София и страната
          </h1>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p>
                Нашата фирма е специализирана в полагането на асфалт на пътища,
                улици, нареждане бордюри и др. Ние работим с нови и модерни
                машини за да предоставим на клиентите си качество на настилката.
                Също така винаги се стараем се да държим достъпни цени за нашите
                клиенти, но и да използваме възможно най-качествените материали.
              </p>
              <p>
                Ако имате нужда от асфалтиране на улици, тротоари, дворове,
                ивици – попаднали сте на точното място. Свържете се с нас от{" "}
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
                src={bigAsphalting}
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

export default Rouds;
