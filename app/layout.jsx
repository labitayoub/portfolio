import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


// Components
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Labit Ayoub - Portfolio | Développeur Web Full Stack",
  description: "Portfolio de Labit Ayoub, développeur web full stack spécialisé en React, Next.js, Node.js et MongoDB. Découvrez mes projets et compétences en développement web et mobile.",
  keywords: "développeur web, full stack, React, Next.js, Node.js, MongoDB, portfolio, développement web, JavaScript, TypeScript",
  authors: [{ name: "Labit Ayoub" }],
  creator: "Labit Ayoub",
  openGraph: {
    title: "Labit Ayoub - Portfolio | Développeur Web Full Stack",
    description: "Portfolio de Labit Ayoub, développeur web full stack spécialisé en React, Next.js, Node.js et MongoDB.",
    url: "https://portfolio-labitayoub.vercel.app",
    siteName: "Labit Ayoub Portfolio",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <BackgroundAnimation />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
