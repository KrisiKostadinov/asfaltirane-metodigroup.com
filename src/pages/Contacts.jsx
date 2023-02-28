import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Quality from "../components/quality/Quality";
import ClientReviews from "../components/clients-reviews/ClientsReviews";
import { icons, metaTags } from "../constants";
import { MetaTags } from "react-meta-tags";

const Contacts = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(100, 0);
  }, [pathname]);

  return (
    <>
      <MetaTags>
        <title>Контакти - {metaTags.site_name}</title>
        <link rel="canonical" href="https://asfaltirane-metodigroup.com/contacts" />
        <meta
          name="description"
          content="Свържете се с нас по някои от следните начини. Обадете се още сега! 0899 07 67 89"
        />
        <meta name="og:title" content={`Контакти - ${metaTags.site_name}`} />
        <meta
          name="og:description"
          content="Свържете се с нас по някои от следните начини. Обадете се още сега! 0899 07 67 89"
        />
        <meta name="og:url" content="https://asfaltirane-metodigroup.com/contacts" />
      </MetaTags>
      <div className="w-full">
        <div className="w-full text-center mt-10">
          <h1 className="heading-1">Кoнтакти</h1>
        </div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-md:px-5">
            <a
              className="flex flex-col gap-6 items-center border-2 border-gray-100 shadow-lg p-10 rounded md:max-w-[340px]"
              href="tel:0899076789"
            >
              <div className="text-2xl w-20">{icons.PhoneIcon}</div>
              <div className="text-2xl font-bold">0899 07 67 89</div>
            </a>
            <a
              className="flex flex-col gap-6 items-center border-2 border-gray-100 shadow-lg p-10 rounded md:max-w-[340px]"
              href="mailto:metodistroi@gmail.com"
            >
              <div className="text-2xl w-20">{icons.EmailIcon}</div>
              <div className="text-2xl font-bold">metodistroi@gmail.com</div>
            </a>
            <div className="flex flex-col gap-6 items-center border-2 border-gray-100 shadow-lg p-10 rounded md:max-w-[340px]">
              <div className="text-2xl">{icons.PhoneIcon}</div>
              <div className="text-2xl font-bold">Пон. - Петък</div>
              <div className="text-2xl font-bold">09:00 - 18:00</div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <Quality />
        </div>
        <ClientReviews />
      </div>
    </>
  );
};

export default Contacts;
