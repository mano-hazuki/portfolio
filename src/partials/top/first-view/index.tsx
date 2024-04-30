import { Typography } from "@/components/typography";
import { classnames } from "@/lib/classnames";
import styles from "./styles.module.css";
import { Background } from "@/components/background";

export function FirstView() {
  return (
    <section id="first_view" className={classnames(styles.container)}>
      <Background className={styles.background} color="light" />
      <Typography className={styles.title} variant="h1" align="center">
        Shohei Yamagiwa
      </Typography>
      <Typography className={styles.subtitle} variant="body1" align="center">
        Find the best architecture of software engineering
      </Typography>
    </section>
  );
}
