"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
import bgDesktop from "../../../public/destination/background-destination-desktop.jpg";
import bgTablet from "../../../public/destination/background-destination-tablet.jpg";
import bgMobile from "../../../public/destination/background-destination-mobile.jpg";
import { DestinationBtn } from "@/components/DestinationBtn/DestinationBtn";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "200" });
const barlowCondensedBold = Barlow_Condensed({
  subsets: ["latin"],
  weight: "600",
});
const barlow = Barlow({ subsets: ["latin"], weight: "200" });

const destinationList: {
  name: string;
  avgDistance: string;
  estTravelTime: string;
  desc: string;
  locImage: any;
}[] = [
  {
    name: "MOON",
    avgDistance: "384,400 KM",
    estTravelTime: "3 DAYS",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    locImage: require("../../../public/destination/image-moon.png"),
  },
  {
    name: "MARS",
    avgDistance: "384,400 KM",
    estTravelTime: "3 DAYS",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    locImage: require("../../../public/destination/image-mars.png"),
  },
  {
    name: "EUROPA",
    avgDistance: "384,400 KM",
    estTravelTime: "3 DAYS",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    locImage: require("../../../public/destination/image-europa.png"),
  },
  {
    name: "TITAN",
    avgDistance: "384,400 KM",
    estTravelTime: "3 DAYS",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    locImage: require("../../../public/destination/image-titan.png"),
  },
];

export default function Destination() {
  const [destination, setCurrentDestination] = useState(0);

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
      <div className={`${styles["group"]} ${styles["left-group"]}`}>
        <h5
          className={`${barlowCondensed.className} ${styles["left-group__header"]}`}
        >
          <span
            className={`${barlowCondensedBold.className} ${styles["left-group__span"]}`}
          >
            01
          </span>{" "}
          PICK YOUR DESTINATION
        </h5>
        <Image
          src={destinationList[destination].locImage}
          alt={destinationList[destination].name}
          className={styles["left-group__image"]}
        />
      </div>
      <div className={`${styles["right-group"]}`}>
        <div className={`${styles["right-group__selections"]}`}>
          {destinationList.map((dest, index) => {
            return (
              <DestinationBtn
                key={dest.name}
                name={dest.name}
                value={index}
                selected={index === destination}
                setSelected={setCurrentDestination}
              />
            );
          })}
        </div>
        <h2 className={bellefair.className}>
          {destinationList[destination].name}
        </h2>
        <p className={`${barlow.className} ${styles["right-group__desc"]}`}>
          {destinationList[destination].desc}
        </p>
        <hr className={styles["right-group__hr"]} />
        <div className={styles["right-group__subgroup"]}>
          <h6
            className={`${styles["right-group__heading"]} ${barlowCondensed.className}`}
          >
            AVG. DISTANCE
          </h6>
          <h6
            className={`${styles["right-group__heading"]} ${barlowCondensed.className}`}
          >
            EST. TRAVEL TIME
          </h6>
          <h5
            className={`${styles["right-group__value"]} ${bellefair.className}`}
          >
            {destinationList[destination].avgDistance}
          </h5>
          <h5
            className={`${styles["right-group__value"]} ${bellefair.className}`}
          >
            {destinationList[destination].estTravelTime}
          </h5>
        </div>
      </div>
    </main>
  );
}
