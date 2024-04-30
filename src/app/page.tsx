import { FirstView } from "@/partials/top/first-view";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Top | Shohei Yamagiwa",
};

export default async function Top() {
  return (
    <main className={styles.main}>
      <FirstView />
    </main>
  );
}
