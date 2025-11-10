import style from "../assets/nav.module.css";
import NavSection from "./NavSection";

export default function Nav() {
  return (
    <ul className={style.nav}>
      <NavSection section="Catalogue" />
    </ul>
  );
}
