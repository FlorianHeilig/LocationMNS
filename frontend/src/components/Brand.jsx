import logo from "../assets/Logo_LocMNS.png";
import style from "../assets/brand.module.css";

export default function Brand() {
  return (
    <div className={style.brand}>
      <img src={logo} alt="Logo LocMNS" className={style.logo} />
      <h1 className={style.title}>LocMNS</h1>
    </div>
  );
}
