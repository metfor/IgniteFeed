import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { SideBar } from "./components/SideBar";
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {" "}
          <Post
            author="frade"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facilis ad laborum fugiat magnam eligendi eaque quaerat nihil, dignissimos totam veritatis! Quos quasi tenetur, at odit saepe consequuntur culpa amet."
          />
        </main>
      </div>
    </>
  );
}
