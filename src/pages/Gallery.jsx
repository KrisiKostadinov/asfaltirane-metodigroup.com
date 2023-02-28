import React, { useEffect } from "react";
import { MetaTags } from "react-meta-tags";
import { useLocation } from "react-router-dom";
import { gallery, metaTags } from "../constants";

const Gallery = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MetaTags>
        <title>Проекти - {metaTags.site_name}</title>
        <link rel="canonical" href="https://asfaltirane-metodigroup.com/galeria" />
        <meta
          name="description"
          content="Изградили сме много проекти за последните 20 години. Обадете се още сега! 0899 07 67 89"
        />
        <meta name="og:title" content={`Проекти - ${metaTags.site_name}`} />
        <meta
          name="og:description"
          content={`Разгледйте нашите проекти - ${metaTags.site_name}`}
        />
        <meta name="og:url" content="https://asfaltirane-metodigroup.com/galeria" />
      </MetaTags>
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
