import "./presentationCard.css";
import { IoChevronForwardOutline } from "react-icons/io5/index.js";
import { useTranslations, useTranslatedPath } from "@i18n/utils";

function PresentationCard({ lang }) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const img = "../../../assets/img/yo.webp";
  return (
    <section className="max-w-screen-md w-full sm:mx-0 md:px-20 p-10 mt-10">
      <div className="flex pb-10 md:flex-row items-center justify-center sm:justify-between flex-col">
        <article className="">
          <h1 className="font-portal md:text-[60px] text-[30px]">Noé Rivera</h1>
          <p className="text-lg mt-5 text-cyaned-500">
            {t("index.description")}
          </p>
        </article>
        <figure className=" flex md:mt-0 mt-5">
          <div className="profile-card">
            <img src={img} className="circle-core grayscale w-[120px]" />
          </div>
        </figure>
      </div>

      <div className="flex flex-col w-full">
        <p className="text-md font-quicksand-3 font-[400] ">
          {t("index.paragraph")}
          <strong className="font-portal text-md ml-2 text-zinc-900 dark:text-white ">
            {t("index.paragraph.impact")}
          </strong>
        </p>
      </div>
      <section className="flex items-center justify-center mt-4">
        <a
          href={translatePath("/works/")}
          className="dark:bg-cyaned-500 bg-cyaned-700 py-2 px-5 rounded-lg dark:text-black text-white font-portal hover:opacity-80"
        >
          {t("index.button")}
          <IoChevronForwardOutline className="inline mb-0.5" />
        </a>
      </section>
    </section>
  );
}

export default PresentationCard;
