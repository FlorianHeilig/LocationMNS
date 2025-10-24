import style from "../assets/NavSection.module.css";
import { CgChevronRight } from "react-icons/cg";
import NavSectionWindowCategory from "./NavSectionWindowCategory";

export default function NavSection() {
  return (
    <>
      <a className={style.section}>
        Catégorie
        <CgChevronRight className={style.icon} />
      </a>
      <div className={style.window}>
        <NavSectionWindowCategory />
      </div>
    </>
  );
}
