import { useState } from "react";
import style from "../assets/nav.module.css";
import Category from "./Category";
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
          Catalogue
          <CgChevronRight className={style.icon} />
        </a>
        <div className={`${style.window} ${open ? style.show : ""}`}>
          <Category title="Ordinateurs" />
        </div>
      </div>
    </div>
  );
}
