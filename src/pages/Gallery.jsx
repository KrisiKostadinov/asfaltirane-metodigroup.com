import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SetMetaTags from "../components/meta-tags/SetMetaTags";
import { gallery, metaTags } from "../constants";

const Gallery = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SetMetaTags
        title={`Галерия - ${metaTags.site_name}`}
        description={
          "Това са част от нашите проекти през дълогодишния ни опит в областта на асфалтирането."
        }
        keywords={
          "асфалтиране, асфалтиране на София, асфалтиране на Пловдив, асфалтиране на Варна, полагане на асфалт, ремонт на асфалт"
        }
      />
      <div className="container mx-auto">
        <div className="mt-10">
          <h1 className="heading-1 text-center">Галерия</h1>
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 max-sm:px-5">
          {gallery.map((item, index) => (
            <li className="w-full sm:h-[200px] md:h-[320px] rounded shadow-lg overflow-hidden">
              <div className="w-full h-full" key={index}>
                <img className="w-full h-full" src={item.url} alt={item.alt} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Gallery;
