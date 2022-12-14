// ! Das importieren von css modules
import { useRef, useEffect } from "react";
import styles from "./NotFound.module.css";

export function NotFound() {

  const h1ref = useRef(null);
  var rndfourofour = ["🕓🕛🕓", "404", "110010100b", "#194", "four o four"];

  useEffect(() => {
    let rnd = Math.round(Math.random() * (rndfourofour.length -1))
    h1ref.current.innerHTML = rndfourofour[rnd];
  });

  return <section className={styles.section}>
    <div className={styles.center}>
      <div>
        <h1 ref={h1ref}></h1>
        <h3>Page not found!</h3>
        <h6>,but <a href="https://www.theguardian.com/food/2020/jan/15/taste-test-unholy-kiwi-pizza-is-a-tangy-pleasant-surprise">Kiwipizza</a> was found!</h6>
      </div>
    </div>
  </section>
}