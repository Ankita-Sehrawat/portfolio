import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankita-Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/assets/images/png/ankita.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
