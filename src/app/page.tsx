import styles from "./page.module.css";
import NavbarPage from "@/components/Layouts/navbar";

export default function Home() {
  return (
    <div>
      <NavbarPage />
      <main className={styles.main}>
        <h1 className="text-shadow-lime-600 text-amber-700">Wellcome App User ManagementAPI</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
