import style from "../assets/brand.module.css";

export default function Brand() {
  return (
    <div className={style.brand}>
      <img src="/Logo_LocMNS.png" alt="Logo LocMNS" className={style.logo} />
      <h1 className={style.title}>LocMNS</h1>
    </div>
  );
}
