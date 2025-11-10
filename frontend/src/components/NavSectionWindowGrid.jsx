import style from "../assets/navSectionWindowGrid.module.css";
import SubCategory from "./SubCategory";
import subCategories from "../data/categories.json";

export default function NavSectionWindowGrid() {
  return (
    <ul className={style.grid}>
      {subCategories.map((item, index) => (
        <SubCategory
          key={index}
          itemTitle={item.itemTitle}
          src={`/icons/icon_${item.icon}.png`}
          alt={item.alt}
        />
      ))}
    </ul>
  );
}
