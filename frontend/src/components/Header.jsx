import style from "../assets/header.module.css";
import Nav from "./Nav";
import Brand from "./Brand";
import Login from "./Login";

export default function Header() {
  return (
    <div className={style.header}>
      <Brand />
      <Nav />
      <Login />
    </div>
  );
}
