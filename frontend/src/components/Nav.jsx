import { useState } from "react";
import style from "../assets/nav.module.css";
import NavSectionWindowCategory from "./NavSectionWindowCategory";
import { CgChevronRight } from "react-icons/cg";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.nav}>
      <div
        className={style.sectionContainer}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <a className={style.section}>
          Catégorie
          <CgChevronRight className={style.icon} />
        </a>
        <div className={`${style.window} ${open ? style.show : ""}`}>
          <NavSectionWindowCategory />
        </div>
      </div>
    </div>
  );
}
