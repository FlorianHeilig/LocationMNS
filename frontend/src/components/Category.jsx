import style from "../assets/category.module.css";
import NavSectionWindowGrid from "./NavSectionWindowGrid";

export default function Category(props) {
  return (
    <>
      <h2 className={style.categoryName}>{props.title}</h2>
      <NavSectionWindowGrid />
    </>
  );
}
