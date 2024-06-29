import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/navbar";
import Footer from "@/components/component/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Karamsetu Foundation",
  description: "Transforming lives through accessible education initiatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="#" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        {<Footer />}
        <Toaster />
      </body>
    </html>
  );
}
