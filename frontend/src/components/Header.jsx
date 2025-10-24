import style from "../assets/header.module.css";
import button from "../assets/button.module.css";
import logo from "../assets/Logo_LocMNS.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.brand}>
        <img src={logo} alt="Logo LocMNS" className={style.logo} />
        <h1 className={style.title}>LocMNS</h1>
        <Nav />
      </div>
      <button className={button.borderButton}>Inscription</button>
    </div>
  );
}
