import type { Metadata } from "next";
import NavbarPage from "@/components/Layouts/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Management Api",
  description: "Pretest web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarPage />
        {children}
      </body>
    </html>
  );
}
