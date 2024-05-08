"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavBarBtn } from "./NavBarBtn";
import { usePathname } from "next/navigation";

const routes: { numLabel: string; label: string; id: string; path: string }[] =
  [
    { numLabel: "00", label: "HOME", id: "home", path: "/" },
    {
      numLabel: "01",
      label: "DESTINATION",
      id: "DESTINATION",
      path: "/destination",
    },
    { numLabel: "02", label: "CREW", id: "crew", path: "/crew" },
    {
      numLabel: "03",
      label: "TECHNOLOGY",
      id: "technology",
      path: "/technology",
    },
  ];

export function NavBar() {
  const pathName = usePathname();
  const [selectedNav, setSelectedNav] = useState("home");
  const [showSideNav, setShowSideNav] = useState(true);

  function onClickCollapsible() {
    setShowSideNav(!showSideNav);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("here");
      if (window.innerWidth > 742) {
        setShowSideNav(true);
      } else {
        setShowSideNav(false);
      }
    });
  }, []);

  useEffect(() => {
    routes.forEach(({ path, id }) => {
      if (path === pathName) {
        setSelectedNav(id);
      }
    });
  }, [pathName]);

  return (
    <div className={styles.navbar}>
      <Image
        src={require("../../../public/shared/logo.svg")}
        alt="website-icon"
        className={styles["navbar__logo"]}
      />
      <label
        className={styles["collapsible-label"]}
        onClick={onClickCollapsible}
      >
        {showSideNav ? (
          <Image
            src={require("../../../public/shared/icon-close.svg")}
            alt="hamburger-icon"
            className={styles["collapsible-label__hamburger-icon"]}
          />
        ) : (
          <Image
            src={require("../../../public/shared/icon-hamburger.svg")}
            alt="hamburger-icon"
            className={styles["collapsible-label__hamburger-icon"]}
          />
        )}
      </label>
      {showSideNav && (
        <nav
          className={styles["navbar__right-group"]}
          id={"navbar__right-group"}
        >
          {routes.map((route) => {
            return (
              <NavBarBtn
                {...route}
                key={route.id}
                selected={selectedNav === route.id}
                setSelected={setSelectedNav}
              />
            );
          })}
        </nav>
      )}
      <hr className={styles["navbar__horizontal-rule"]} id="navbar-hr" />
    </div>
  );
}
