import { Biography } from "./biography";
import { SkillAndWork } from "./skill-and-work";
import styles from "./styles.module.css";

export function AboutSection() {
  return (
    <section id="about" className={styles.container}>
      <Biography />
      <SkillAndWork />
    </section>
  );
}
