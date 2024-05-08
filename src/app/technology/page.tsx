"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
import bgDesktop from "../../../public/technology/background-technology-desktop.jpg";
import bgTablet from "../../../public/technology/background-technology-tablet.jpg";
import bgMobile from "../../../public/technology/background-technology-mobile.jpg";
import { DestinationBtn } from "@/components/DestinationBtn/DestinationBtn";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "200" });
const barlowCondensedBold = Barlow_Condensed({
  subsets: ["latin"],
  weight: "600",
});
const barlow = Barlow({ subsets: ["latin"], weight: "200" });

const techList: {
  title: string;
  desc: string;
  locImagePort: any;
  locImageLandScape: any;
}[] = [
  {
    title: "LAUNCH VEHICLE",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    locImagePort: require("../../../public/technology/image-launch-vehicle-portrait.jpg"),
    locImageLandScape: require("../../../public/technology/image-launch-vehicle-landscape.jpg"),
  },
  {
    title: "SPACEPORT",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    locImagePort: require("../../../public/technology/image-spaceport-portrait.jpg"),
    locImageLandScape: require("../../../public/technology/image-spaceport-landscape.jpg"),
  },
  {
    title: "SPACE CAPSULE",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    locImagePort: require("../../../public/technology/image-space-capsule-portrait.jpg"),
    locImageLandScape: require("../../../public/technology/image-space-capsule-landscape.jpg"),
  },
];

export default function Technology() {
  const [tech, setTech] = useState(0);

  function setBackgroundImage() {
    const isTablet = window.matchMedia("(max-width: 1024px)");
    const isMobile = window.matchMedia("(max-width: 500px)");

    if (isTablet.matches) {
      document.body.setAttribute(
        "style",
        `background-image: url("${bgTablet.src}")`
      );
    } else if (isMobile.matches) {
      document.body.setAttribute(
        "style",
        `background-image: url("${bgMobile.src}")`
      );
    } else {
      document.body.setAttribute(
        "style",
        `background-image: url("${bgDesktop.src}")`
      );
    }
  }

  useEffect(() => {
    console.log("destination page");
    setBackgroundImage();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setBackgroundImage);
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles["selections__left"]}`}>
        {techList.map((_, i) => {
          return (
            <div
              key={i}
              className={`${styles["selections__circles"]}`}
              onClick={() => {
                setTech(i);
              }}
            >
              <h5 className={`${bellefair.className}`}>{i + 1}</h5>
            </div>
          );
        })}
      </div>
      <article className={`${styles["group"]} ${styles["left-group"]}`}>
        <h5
          className={`${barlowCondensed.className} ${styles["left-group__header"]}`}
        >
          <span
            className={`${barlowCondensedBold.className} ${styles["left-group__span"]}`}
          >
            03
          </span>{" "}
          SPACE LAUNCH 101
        </h5>
        <Image
          src={techList[tech].locImageLandScape}
          alt={techList[tech].title}
          className={styles["left-group__landscape"]}
        />
        <div className={`${styles["selections__top"]}`}>
          {techList.map((_, i) => {
            return (
              <div
                key={i}
                className={`${styles["selections__circles"]}`}
                onClick={() => {
                  setTech(i);
                }}
              >
                <h5 className={`${bellefair.className}`}>{i + 1}</h5>
              </div>
            );
          })}
        </div>
        <h6
          className={`${barlowCondensed.className} ${styles["left-group__subheader"]}`}
        >
          THE TERMINOLOGY...
        </h6>
        <h3 className={`${bellefair.className}`}>{techList[tech].title}</h3>
        <p className={`${barlow.className} ${styles["left-group__desc"]}`}>
          {techList[tech].desc}
        </p>
      </article>
      <div className={`${styles["right-group"]}`}>
        <Image
          src={techList[tech].locImagePort}
          alt={techList[tech].title}
          className={styles["right-group__portrait"]}
        />
      </div>
    </main>
  );
}
