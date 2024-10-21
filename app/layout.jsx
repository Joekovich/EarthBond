import { Inter} from "next/font/google";
import Header from "@/components/Header";
import CarbonCredits from "@/components/CarbonCredits";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "EarthBond",
  description: "EarthBond Solar Marketer app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
        </main>
        <CarbonCredits />
        <Footer />
      </body>
    </html>
  );
}
