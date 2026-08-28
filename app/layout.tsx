import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Татьяна Мирошина — системы, AI, человек",
  description:
    "Работа со сложными задачами: контекст, системное мышление, цифровые процессы и AI без подмены человеческого решения.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
