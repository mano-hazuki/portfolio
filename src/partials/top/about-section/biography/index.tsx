"use client";

import { Typography } from "@/components/typography";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export function Biography() {
  return (
    <motion.div className={styles.biography}>
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        viewport={{ once: true }}
      >
        <Typography className={styles.text} variant="h1" align="center">
          Who am I?
        </Typography>
        <div className={styles.underline} />
      </motion.div>
      <motion.div
        className={styles.description}
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "fit-content" }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 2.0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.0, delay: 2.75 }}
        >
          <Typography className={styles.text} variant="body1" align="center" wrap="pretty">
            Hello there! I&apos;m <strong>Shohei Yamagiwa</strong>. <br />
            I&apos;m a junior at KONAN University. <br />
            <br />
            I&apos;m major in Software Engineering. (especially Software Architecture) <br />
            Check out my{" "}
            <a href="/research">
              <strong>
                <u>research page</u>
              </strong>
            </a>{" "}
            for more details.
            <br />
            <br />
            I&apos;d been worked as a fullstack engineer. <br />
            Check{" "}
            <a href="/works">
              <strong>
                <u>here</u>
              </strong>
            </a>{" "}
            for my works. <br />
          </Typography>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
