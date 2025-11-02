import style from "../assets/subCategory.module.css";

export default function SubCategory(props) {
  return (
    <div className={style.container}>
      <div className={style.containerImage}>
        //TODO gestion des liens
        <a href=""></a>
        <img src={props.src} alt={props.alt} className={style.image} />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
}
