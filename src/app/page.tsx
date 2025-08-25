import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold">Frontend User Management API</h1>
          <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">Aplikasi sederhana untuk mengelola pengguna. Dibangun dengan Next.js, Tailwind, dan Flowbite.</p>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
