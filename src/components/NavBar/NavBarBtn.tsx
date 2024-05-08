"use client";

import { Barlow_Condensed } from "next/font/google";
import styles from "./navbar.module.css";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "200" });
const barlowCondensedBold = Barlow_Condensed({
  subsets: ["latin"],
  weight: "600",
});

type Props = {
  id: string;
  path: string;
  label: string;
  numLabel: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
};

export function NavBarBtn({
  label,
  numLabel,
  id,
  path,
  selected,
  setSelected,
}: Props) {
  function onClickLink() {
    setSelected(id);
  }

  useEffect(() => {
    const doc = document.getElementById(id);
    if (!doc) return;
    if (selected) {
      if (window.innerWidth > 742) {
        doc.style.borderBottom = "3px solid #fff";
        doc.style.borderRight = "0px solid #fff";
      } else {
        doc.style.borderRight = "3px solid #fff";
        doc.style.borderBottom = "0px solid #fff";
      }
    } else {
      if (window.innerWidth > 742) {
        doc.style.borderBottom = "0px solid #fff";
      } else {
        doc.style.borderRight = "0px solid #fff";
      }
    }
  }, [id, selected]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const doc = document.getElementById(id);
      if (!doc) return;
      if (selected) {
        if (window.innerWidth > 772) {
          doc.style.borderBottom = "3px solid #fff";
          doc.style.borderRight = "0px solid #fff";
        } else {
          doc.style.borderRight = "3px solid #fff";
          doc.style.borderBottom = "0px solid #fff";
        }
      } else {
        if (window.innerWidth > 772) {
          doc.style.borderBottom = "0px solid #fff";
        } else {
          doc.style.borderRight = "0px solid #fff";
        }
      }
    });
  }, [id, selected]);

  return (
    <Link
      href={path}
      className={`${styles["navbar__rg-link"]} ${barlowCondensed.className}`}
      onClick={onClickLink}
      id={id}
    >
      <span className={barlowCondensedBold.className}>{numLabel}</span> {label}
    </Link>
  );
}
