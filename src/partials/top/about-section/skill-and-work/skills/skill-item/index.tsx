import { Skill } from "@/lib/fetch";
import styles from "./styles.module.css";
import { Image } from "@/components/image";

interface Props {
  skill: Skill;
}

export function SkillItem({ skill }: Props) {
  return (
    <li className={styles.item}>
      <Image
        className={styles.image}
        src={skill.icon.url}
        alt={skill.name}
        width={skill.icon.width}
        height={skill.icon.height}
      />
    </li>
  );
}
