import { Link, useLocation } from "react-router-dom";
import MetaTags from "react-meta-tags";

import { servicesItems, asphaltingsImages } from "../constants";
import slide1 from "../assets/images/slider/manual-asphalting.jpg";
import slide2 from "../assets/images/slider/mashine-asphalting.jpeg";

export const slides = [
  {
    background: slide1,
    heading: "МАШИННО АСФАЛТИРАНЕ",
    text: "Ние разполагаме с най-съвременните машни и технологии за качествено асфалтиране на различни терени.",
  },
  {
    background: slide2,
    heading: "РЪЧНО АСФАЛТИРАНЕ",
    text: "Ние разполагаме с най-съвременните машни и технологии за качествено асфалтиране на различни терени.",
  },
];

import servicesBackground from "../assets/images/backgrounds/services-background.jpeg";
import warning from "../assets/images/warning.png";

import Digits from "../components/digits/Digits";
import Quality from "../components/quality/Quality";
import WhyUs from "../components/why-us/WhyUs";
import Carousel from "../components/common/Carousel";
import { useEffect } from "react";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <main className="w-full h-auto">
        <section className="container mx-auto relative h-[40vh] md:h-[60vh] lg:h-[70vh] pt-5 md:pt-10">
          <Carousel timeout={3000}>{slides}</Carousel>
        </section>
        <section>
          <p className="text-white bg-black text-center text-2xl py-10 mt-5 max-sm:px-5">
            Предлагаме асфалтиране в град София и страната на достъпни цени
          </p>
          <div className="w-full text-center mt-12 text-xl">
            <Link to={"/gallery"} className="button-primary">
              Нашите проекти
            </Link>
          </div>
        </section>

        {/* meta tags */}
        <MetaTags>
          <title>Асфалтиране София и страната</title>
          <link rel="canonical" href="https://asfaltirane-metodigroup.com" />
          <meta name="description" content="Предлагаме асфалтиране в град София и страната на достъпни цени. Обадете се още сега! 0899 07 67 89" />
          <meta name="og:title" content="Асфалтиране София и страната" />
          <meta name="og:description" content="Предлагаме асфалтиране в град София и страната на достъпни цени. Обадете се още сега! 0899 07 67 89" />
          <meta name="og:url" content="https://asfaltirane-metodigroup.com" />
        </MetaTags>

        <section>
          <div className="mt-10 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl">
              Услуги за полагане на асфалт
            </h2>
          </div>
          <div
            className="relative w-full"
            style={{ backgroundImage: `url(${servicesBackground})` }}
          >
            <div className="absolute w-full h-full bg-black/90 z-10"></div>
            <div className="container mx-auto py-10 md:py-20">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5 md:gap-y-10">
                {servicesItems.map((item, index) => (
                  <li
                    className="max-sm:mt-5 w-full h-auto z-20 flex flex-col justify-between"
                    key={index}
                  >
                    <div>
                      <div className="w-full h-[200px] mb-5">
                        <img
                          className="w-full h-full"
                          src={item.img}
                          alt={item.heading}
                        />
                      </div>
                      <p className="text-white text-center px-5 z-20">
                        {item.text}
                      </p>
                    </div>
                    <div className="text-center text-xl">
                      <a href={item.link} className="button-primary">
                        Научете повече
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Quality />
        <WhyUs />
        <section className="pt-14">
          <div className="container mx-auto">
            <div className="w-fit mx-auto">
              <h2 className="text-center text-3xl md:text-4xl">
                Построяването на път или улица без да се налага правенето на
                ремонт в последствие след няколко месеца е професионализъм!
              </h2>
              <div className="w-[70%] h-1 mx-auto bg-white mt-5"></div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-10">
              <div className="text-lg max-lg:order-1 max-lg:px-10">
                <p>
                  Кой носи отговорността? Качеството на материалите, на
                  технологията или човешкият фактор във фирмите за пътно
                  строителство са отговорни за проблемите в пътищата в България.
                  Или може би се касае за нечий злоупотреби с поръчки и
                  усвоявани държавни пари, за измамени контролни органи или за
                  липсата на такива. Едва ли, ще получим отговор за всичко
                  случващо се в страната, но ще обясним някои тънкости, които
                  всяка асфалтополагаща бригада и фирма са длъжни да познават.
                </p>
                <strong>
                  <i>Някои от основните групи от строителството на пътища.</i>
                </strong>
                <blockquote className="mt-10 pl-10 border-l-2 border-gray-200">
                  Съществуват няколко основни групи от пътно-строителните
                  дейности – земни работи, производство на строителни материали
                  – асфалтобетон, бетон, инертни материали, емулсии. Прилагат се
                  и алтернативни решения на различни видове работи, съвременни
                  материали и технологии в строителството. Пътищата трябва да
                  осигуряват условия за удобно, сигурно и икономично движение на
                  превозните средства през всички сезони от годината и по всяко
                  време, независимо от климатичните фактори.
                </blockquote>
              </div>
              <img
                src={warning}
                alt="Построяването на път или улица без да се налага правенето на ремонт в последствие след няколко месеца е професионализъм!"
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="grid gap-10 items-center lg:grid-cols-2 mt-10 px-10">
            <img src={asphaltingsImages.item3} alt="" />
            <div>
              <h2 className="text-3xl md:text-4xl mb-5">
                Как се постига качеството на пътната настилка?
              </h2>
              <p className="mb-5 text-lg py-5 border-gray-200 border-l-2 pl-5">
                <strong>
                  <i>За целта се използва специален конструктивен елемент</i>
                </strong>
              </p>
              <p>
                Той се вгражда на повърхността на земното тяло и се използва
                непосредствено за извършване на движението. Пътната настилка е
                твърда, монолитна конструкция от материали, които притежават
                якост, добро съпротивление на износване, равност и добро
                сцепление с гумите. В нея се различават различни конструктивни
                пластове: пътно покритие, пътна основа, дрениращ пласт, земна
                основа. Под въздействието на натоварването от превозни средства,
                в пътната настилка възникват напрежения на натиск и опън, а по
                периметъра на контактната площ с колелото – срязващи напрежения.
                Ако настилката няма съпротивление на опън, в нея се образуват
                пукнатини.
              </p>
            </div>
          </div>
        </section>
        <Digits />
      </main>
    </>
  );
};

export default Home;
