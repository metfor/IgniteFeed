import styles from "./SideBar.module.css";
import { PencilLine } from "phosphor-react";

export function SideBar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1571862777746-c59ea9425ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://github.com/metfor.png"
            alt="perfil-foto"
          />
          <strong>Matheus frade</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
