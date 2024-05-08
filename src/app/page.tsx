"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import { useEffect } from "react";

import bgDesktop from "../../public/home/background-home-desktop.jpg";
import bgTablet from "../../public/home/background-home-tablet.jpg";
import bgMobile from "../../public/home/background-home-mobile.jpg";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "200" });
const barlow = Barlow({ subsets: ["latin"], weight: "200" });

export default function Home() {
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
      <div className={`${styles.group} ${styles["left-group"]}`}>
        <h5 className={barlowCondensed.className}>SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className={bellefair.className}>SPACE</h1>
        <p className={barlow.className}>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className={`${styles.group} ${styles["right-group"]}`}>
        <Link href={"/destination"}>
          <div className={styles["circle-container"]}>
            <h4
              className={`${bellefair.className} ${styles["circle-container__explore"]}`}
            >
              EXPLORE
            </h4>
          </div>
        </Link>
      </div>
    </main>
  );
}
