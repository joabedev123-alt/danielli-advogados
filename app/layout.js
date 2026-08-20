import { Cormorant_Garamond, Inter } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

export const metadata = {
  title: "Danielli Geovani Advogados Associados",
  description: "Direito, estratégia e segurança para decisões que importam. Atendimento jurídico em Portugal e no Brasil.",
  openGraph: {
    title: 'Danielli Geovani Advogados Associados',
    description: 'Orientação jurídica com proximidade, rigor e responsabilidade.',
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Danielli Geovani Advogados Associados',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-PT"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
