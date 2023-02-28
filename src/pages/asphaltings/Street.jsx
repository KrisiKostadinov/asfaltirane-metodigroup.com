import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MetaTags } from "react-meta-tags";

import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import streetAsphalting from "../../assets/images/asphaltings/street-asphalting.jpeg";
import { metaTags } from "../../constants";

const Street = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MetaTags>
        <title>Асфалтиране на улици в София и страната - {metaTags.site_name}</title>
        <link
          rel="canonical"
          href="https://asfaltirane-metodigroup.com/asfaltirane-na-ulitsi"
        />
        <meta
          name="description"
          content="Асфалтиране на улици в град София и цялата страна на достъпни цени. Обадете се още сега! 0899 07 67 89"
        />
        <meta name="og:title" content={`Асфалтиране на улици в София и страната - ${metaTags.site_name}`} />
        <meta
          name="og:description"
          content="Асфалтиране на улици в град София и цялата страна на достъпни цени. Обадете се още сега! 0899 07 67 89"
        />
        <meta
          name="og:url"
          content="https://asfaltirane-metodigroup.com/asfaltirane-na-ulitsi"
        />
      </MetaTags>
      <section className="w-full py-10 max-md:px-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Асфалтиране на улици в София и страната
          </h1>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p>
                Нашата фирма е специализирана в асфалтирането на улици, пътища,
                тротоари, алеи, паркинги, нареждане на бордюри и др. Фирмата ни
                разсполага с най-новите и модерни машини за да предоставим на
                клиентите си качествена услуга. Винаги се стараем да държим
                възможно най-ниски и достъпни цени за всеки наш клиент, но и да
                използваме възможно най-качествените материали.
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
                src={streetAsphalting}
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

export default Street;
