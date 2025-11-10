import { useState } from "react";
import style from "../assets/nav.module.css";
import Category from "./Category";
import { CgChevronRight } from "react-icons/cg";

export default function NavSection(props) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={style.sectionContainer}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a className={style.section}>
        {props.section}
        <CgChevronRight className={style.icon} />
      </a>
      <div className={`${style.window} ${open ? style.show : ""}`}>
        <Category title="Ordinateurs" />
      </div>
    </li>
  );
}
