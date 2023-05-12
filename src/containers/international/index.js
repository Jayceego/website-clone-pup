import { useState, useEffect } from "react";
import News from "@/components/news";
import Widget from "@/components/widget";
import Image from "next/image";
import ArticleItem from "../helpers/articlesitems";

function InternationalContainer() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const international = [
    "International Exchange Students",
    "International Seminars/Fora",
    "International Scholarship Grants",
    "International Faculty Exchange",
    "International Organizations Affiliation",
    "International Linkages",
  ];
  return (
    <div className="container min-h-screen contact-main">
      <div className="mx-auto page-container">
        <div className=" leftSide">
          <div className="international">
            <h1 className="mb-[10px] font-semibold text-primary-red">
              International Affairs
            </h1>
            <Image
              src={"/international.jpg"}
              alt={"International Affairs"}
              width={800}
              height={300}
            />
            <p>
              The PUP Office of International Affairs is engaged in a wide
              variety of programs and activities aligned with the vision of
              President Manuel M. Muhi towards establishment of PUP as a
              National Polytechnic University.
            </p>
            <p>
              Thus, the Office for International Affairs provides leadership and
              coordination for all University-wide international activities for
              coherence and integration of the institution&apos;s international
              linkages, cooperation, exchanges, programs and services:
            </p>
            <ul className=" px-[10px] py-5">
              {international.map((list, key) => {
                return <li key={key}>{list}</li>;
              })}
            </ul>
            <News items={ArticleItem} slidesnum={screenWidth < 900 ? 2 : 3} head={"Articles"} spacing={20}/>
          </div>
        </div>
        <div className="w-full rightSide">
          <Widget
            title="contents"
            items={[
              "Office of International Affairs",
              "Objective and Functions",
              "Services",
              "International Linkages",
              "Qualifications and Requirements",
              "Frequently Asked Questions",
              "Officials and Staff",
              "Contact Information",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default InternationalContainer;
