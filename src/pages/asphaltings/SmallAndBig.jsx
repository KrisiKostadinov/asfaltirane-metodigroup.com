import React, { useEffect } from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import smallAsphalting from "../../assets/images/asphaltings/small-asphalting.jpeg";
import bigAsphalting from "../../assets/images/asphaltings/big-asphalting.jpeg";
import { Link, useLocation } from "react-router-dom";
import SetMetaTags from "../../components/meta-tags/SetMetaTags";

const SmallAndBig = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SetMetaTags
        title={`Асфалтиране на малки и големи площи - ${metaTags.site_name}`}
        description={
          "Извършваме качествено асфалтиране на всякакви малки и големи площи на най-добри цени в България. Освен това нареждаме тротоари и бордюри. Имаме над 20 г. опит в сферата."
        }
        keywords={
          "нареждане на бордюри, нареждане на бордюри София, нареждане на тротоари, нареждане на тротоари София, полагане на асфалт, асфалтиране на пътища, асфалтиране на алей, полагане на асфалт на алеи, асфалтиране на малки площи, асфалтиране на големи площи"
        }
      />
      <section className="w-full py-10 max-md:px-5">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Полагане на асфалт на малки и големи площи в София и страната
          </h1>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p>
                Фирмата се занимава повече от 20 години с полагане на асфалтова
                настилка на пътища, улици, дворове, алеи, градинки, малки и
                големи площи. През годините сме натрупали солиден опит в
                асфалтирането и можем да кажем, че наистина си разбираме от
                работата. Работили сме по всякакви места в София, Пловдив и
                страната и имаме опит на много и различни терени.
              </p>
              <p>
                Ние предлагаме безплатен оглед на терена, без значение къде в
                България се намирате. Ако разполагате с място, което искате да
                бъде асфалтирано, можете да се свържете с нас за консултация и
                безплатен оглед.
              </p>
              <p>
                Винаги спазваме сроковете за да са доволни и двете страни.
                Използваме машини за полагането на асфалт, но има места, на
                които трябва да се положи асфалта ръчно.
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-md:pb-5">
              <img
                className="w-full h-full"
                src={smallAsphalting}
                alt="Асфалтиране на улици в София и страната"
              />
              <img
                className="w-full h-full"
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

export default SmallAndBig;
