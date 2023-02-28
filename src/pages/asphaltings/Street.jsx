import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import streetAsphalting from "../../assets/images/asphaltings/street-asphalting.jpeg";
import SetMetaTags from "../../components/meta-tags/SetMetaTags";

const Street = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SetMetaTags
        title={`Асфалтиране на малки и големи площи - ${metaTags.site_name}`}
        description={
          "Извършваме качествено асфалтиране в София и цялата страна на всякакви улици малки и големи на най-добри цени в България. Освен това нареждаме тротоари и бордюри. Имаме над 20 г. опит в сферата."
        }
        keywords={
          "полагане на асфалт, асфалтиране на пътища, асфалтиране на алей, полагане на асфалт на алеи, асфалтиране на малки площи, асфалтиране на големи площи"
        }
      />
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
