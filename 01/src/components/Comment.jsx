import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/metfor.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Frade</strong>
              <time title="15/07/2022" dateTime="2022-07-15">
                adadd
              </time>
            </div>
            <button title="deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>legas sadghdfsfd</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
