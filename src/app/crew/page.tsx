"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
import bgDesktop from "../../../public/crew/background-crew-desktop.jpg";
import bgTablet from "../../../public/crew/background-crew-tablet.jpg";
import bgMobile from "../../../public/crew/background-crew-mobile.jpg";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "200" });
const barlowCondensedBold = Barlow_Condensed({
  subsets: ["latin"],
  weight: "600",
});
const barlow = Barlow({ subsets: ["latin"], weight: "200" });

const crewList: {
  job: string;
  name: string;
  description: string;
  locImage: any;
}[] = [
  {
    job: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    locImage: require("../../../public/crew/image-douglas-hurley.png"),
  },
  {
    job: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    locImage: require("../../../public/crew/image-mark-shuttleworth.png"),
  },
  {
    job: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    locImage: require("../../../public/crew/image-victor-glover.png"),
  },
  {
    job: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    locImage: require("../../../public/crew/image-anousheh-ansari.png"),
  },
];

export default function Crew() {
  const [currentCrew, setCurrentCrew] = useState(0);

  function setBackgroundImage() {
    const isTablet = window.matchMedia("(max-width: 1024px)");
    const isMobile = window.matchMedia("(max-width: 500px)");

    document.body.setAttribute(
      "style",
      `background-image: url("${bgDesktop.src}")`
    );
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
    console.log("crew");
    setBackgroundImage();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setBackgroundImage);
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles["group"]} ${styles["left-group"]}`}>
        <h5
          className={`${barlowCondensed.className} ${styles["left-group__header"]}`}
        >
          <span
            className={`${barlowCondensedBold.className} ${styles["left-group__span"]}`}
          >
            02
          </span>{" "}
          MEET YOUR CREW
        </h5>
        <div>
          <h4 className={`${bellefair.className} ${styles["left-group__job"]}`}>
            {crewList[currentCrew].job}
          </h4>
          <h3 className={bellefair.className}>{crewList[currentCrew].name}</h3>
        </div>
        <p className={`${barlow.className} ${styles["left-group__desc"]}`}>
          {crewList[currentCrew].description}
        </p>

        <div className={styles["left-group__circle-group"]}>
          {Array(crewList.length)
            .fill(0)
            .map((_, i) => {
              return (
                <div
                  key={i}
                  className={`${styles["left-group__small-circles"]} ${
                    i !== currentCrew
                      ? styles["left-group__small-circles__selected"]
                      : ""
                  }`}
                  onClick={() => setCurrentCrew(i)}
                />
              );
            })}
        </div>
      </div>
      <div className={`${styles["right-group"]}`}>
        <Image
          src={crewList[currentCrew].locImage}
          alt={crewList[currentCrew].name}
          className={`${styles["right-group__image"]}`}
        />
      </div>
    </main>
  );
}
