import React, { useEffect } from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import alleyAsphalting from "../../assets/images/asphaltings/alley-asphalting.jpeg";
import { Link, useLocation } from "react-router-dom";
import SetMetaTags from "../../components/meta-tags/SetMetaTags";
import { metaTags } from "../../constants";

const Alley = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SetMetaTags
        title={`Асфалтиране на алеи - ${metaTags.site_name}`}
        description={"Предлагаме катествено асфалтиране на всякакви алеи, малки и големи площи, полагаме асфалт на улици, пътища дворове, площадки и други на достъпни цени."}
        keywords={
          "асфалтиране, асфалтиране на София, полагане на асфалт, асфалтиране на алей, полагане на асфалт на алеи, асфалтиране на малки площи, асфалтиране на големи площи"
        }
      />
      <section className="w-full py-10 max-md:px-5">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Асфалтиране на алеи в София и страната
          </h1>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p>
                Някои от особеностите при услуги като асфалтиране на алеи са
                ширината и дължината на алеята, както и местоположението й. На
                базата им определяме кой вид асфалтиране да приложим, дали ръчно
                или машинно. Настилката на алеята също е много важна. Според нас
                най-оптимални резултати при асфалтирането на алеи се получават
                тогава, когато теренът се обработи предварително и се нивелира
                за максимално добър наклон спрямо отводнителната канализация.
              </p>
              <p>
                Ако се доверите на нас, ние Ви даваме гаранция за всички наши
                услуги. Разбира се и на ниски цени. от{" "}
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
                src={alleyAsphalting}
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

export default Alley;
