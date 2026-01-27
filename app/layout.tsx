import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niket Dadhaniya - React Native Developer",
  description: "Portfolio website showcasing my work as a React Native Developer specializing in cross-platform mobile applications, Firebase, and cloud integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
