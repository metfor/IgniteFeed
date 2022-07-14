import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";
export function App() {
  return (
    <>
      <Header />
      <Post
        author="frade"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facilis ad laborum fugiat magnam eligendi eaque quaerat nihil, dignissimos totam veritatis! Quos quasi tenetur, at odit saepe consequuntur culpa amet."
      />
    </>
  );
}
