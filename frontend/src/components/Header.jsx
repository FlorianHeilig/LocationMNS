import style from "../assets/header.module.css";
import button from "../assets/button.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <button className={button.borderButton}>Inscription</button>
    </div>
  );
}
