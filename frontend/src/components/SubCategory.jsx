import style from "../assets/subCategory.module.css";

export default function SubCategory(props) {
  return (
    <li className={style.container}>
      <div className={style.containerImage}>
        {/*TODO gestion des liens*/}
        <a href=""></a>
        <img {...props} className={style.image} />
      </div>
      <h3>{props.itemTitle}</h3>
    </li>
  );
}
