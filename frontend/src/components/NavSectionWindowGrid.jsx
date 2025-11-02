import style from "../assets/navSectionWindowGrid.module.css";
import SubCategory from "./SubCategory";

export default function NavSectionWindowGrid() {
  return (
    <div className={style.grid}>
      <SubCategory
        title="Ordinateurs Portables"
        src="/icon_pcPortable.png"
        alt="Ordinateurs Portables"
      />
      <SubCategory
        title="Ordinateurs Fixes"
        src="/icon_pcFixe.png"
        alt="Ordinateurs Fixes"
      />
      <SubCategory
        title="Ordinateurs Mac"
        src="/icon_mac.png"
        alt="Ordinateurs Mac"
      />
    </div>
  );
}
