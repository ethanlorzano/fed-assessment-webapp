"use client";

import { Barlow_Condensed } from "next/font/google";
import styles from "./destinationbtn.module.css";
import { Dispatch, SetStateAction, useEffect } from "react";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "200" });

type Props = {
  name: string;
  selected: boolean;
  value: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

export function DestinationBtn({ name, selected, setSelected, value }: Props) {
  function onClickLink() {
    setSelected(value);
  }

  useEffect(() => {
    const doc = document.getElementById(name);

    if (doc) {
      if (selected) {
        doc.style.borderBottom = "3px solid #fff";
      } else {
        doc.style.borderBottom = "0px";
      }
    }
  }, [name, selected]);

  return (
    <h6
      className={`${styles["destination"]} ${barlowCondensed.className}`}
      onClick={onClickLink}
      id={name}
    >
      {name}
    </h6>
  );
}
