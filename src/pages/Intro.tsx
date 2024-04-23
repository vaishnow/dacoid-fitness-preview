import { useState } from "react";
import { Link } from "react-router-dom";
import IntroContent from "../components/IntroContent";
import IntroCSS from "./Intro.module.css";
import jogging from "../assets/jogging.png";
import cycling from "../assets/cycling.png";
import chevronR from "../assets/chevron-right.svg";

const Intro = () => {
  const pageContents = [
    {
      img: jogging,
      imgAlt: "jogging",
      title: "Track Your Goal",
      desc: "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
    },
    {
      img: cycling,
      imgAlt: "cycling",
      title: "Get Burn",
      desc: "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever",
    },
  ];

  const [currContent, setCurrContent] = useState<number>(0);

  return (
    <main className="px-4 py-6">
      <div className="flex">
        <Link to="register" className="ms-auto p-3 underline underline-offset-4">
          Skip
        </Link>
      </div>
      <IntroContent data={pageContents[currContent]} />
      <div className="fixed bottom-6 right-4">
        <button
          onClick={() => setCurrContent(1)}
          className="relative flex justify-center items-center"
        >
          <img
            src={chevronR}
            alt="Next button"
            className={`${IntroCSS.chevRBtn} absolute p-5 rounded-full size-14 `}
          />
          <div
            className={`duration-1000 size-16 rounded-full border-2 border-transparent border-r-[#89A1FF] border-b-[#89A1FF] ${currContent &&` border-s-[#89A1FF]`} -rotate-45`}
          ></div>
        </button>
      </div>
    </main>
  );
};
export default Intro;
