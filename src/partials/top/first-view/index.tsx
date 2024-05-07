import { Background } from "@/components/background";
import { Typography } from "@/components/typography";
import { classnames } from "@/lib/classnames";
import styles from "./styles.module.css";
import { NavigationButton } from "@/components/navigation-button";

export function FirstView() {
  return (
    <section id="first_view" className={classnames(styles.container)}>
      <Background className={styles.background} color="light" />
      <div className={styles.title}>
        <Typography className={styles.heading} variant="h1" align="center">
          Shohei Yamagiwa
        </Typography>
        <Typography className={styles.subheading} variant="body1" align="center">
          Find the best architecture of software engineering
        </Typography>
      </div>
      <nav className={styles.navigation}>
        <NavigationButton href="#about" />
      </nav>
    </section>
  );
}
