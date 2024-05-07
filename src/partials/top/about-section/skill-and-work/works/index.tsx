"use client";

import { Work } from "@/lib/fetch";
import styles from "./styles.module.css";
import { Typography } from "@/components/typography";
import { Link } from "@/components/link";

interface Props {
  works: Work[];
}

export function Works({ works }: Props) {
  return (
    <div className={styles.works}>
      <div className={styles.labels}>
        <Typography className={styles.heading} variant="h1" align="left">
          Works
        </Typography>
        <Link href="/skills">
          <Typography className={styles.link} variant="body2" align="left">
            See more
          </Typography>
        </Link>
      </div>
    </div>
  );
}
