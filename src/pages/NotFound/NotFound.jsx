// ! Das importieren von css modules
import { useRef, useEffect } from "react";
import styles from "./NotFound.module.css";

export function NotFound() {

  const h1ref = useRef(null);

  useEffect(() => {
    let rnd = Math.round(Math.random() * 4)

    if (rnd === 0) {
      h1ref.current.innerHTML = "🕓🕛🕓";
    } else if (rnd === 1) {
      h1ref.current.innerHTML = "404";
    } else if (rnd === 2) {
      h1ref.current.innerHTML = "110010100b";
    } else if (rnd === 3) {
      h1ref.current.innerHTML = "#194";
    }
  });

  return <section className={styles.section}>
    <div className={styles.center}>
      <div>
        <h1 ref={h1ref}></h1>
      </div>
    </div>
  </section>
}