"use client";

import { Link } from "@/components/link";
import { Typography } from "@/components/typography";
import { Skill } from "@/lib/fetch";
import { SkillItem } from "./skill-item";
import styles from "./styles.module.css";

interface Props {
  skills: Skill[];
}

export function Skills({ skills }: Props) {
  return (
    <div className={styles.skills}>
      {/* Label */}
      <div className={styles.labels}>
        <Typography className={styles.heading} variant="h1" align="left">
          Skills
        </Typography>
        <Link href="/skills">
          <Typography className={styles.link} variant="body2" align="left">
            See more
          </Typography>
        </Link>
      </div>

      {/* List */}
      <ul className={styles.list}>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
