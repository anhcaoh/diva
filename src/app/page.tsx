import { Inter } from "next/font/google";
import styles from "./page.module.css";
import PlanningDiva from "./features/PlanningDiva";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <PlanningDiva />
    </main>
  );
}
