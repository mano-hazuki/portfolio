import { fetchRandomSkills, fetchWorks } from "@/lib/fetch";
import { Skills } from "./skills";
import styles from "./styles.module.css";
import { Works } from "./works";

export async function SkillAndWork() {
  const skills = await fetchRandomSkills();
  const works = await fetchWorks();
  return (
    <div className={styles.container}>
      <Skills skills={skills} />
      <Works works={works} />
    </div>
  );
}
