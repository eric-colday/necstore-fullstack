import Navbar from "../components/navbar/Navbar.jsx";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "../context/ThemeContext.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";
import "./globals.css";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import Providers from "../redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "../providers/AuthProvider.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NecStore - Boutique e-commerce en France",
  description:
    "NecStore vous propose Une collection tendance de t-shirts, jeans et vestes pour un style unique. Exprimez-vous avec notre mode de qualité ! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <Providers>
                <main>
                  <Navbar />
                  <div className="container">{children}</div>
                  <Newsletter />
                  <Footer />
                  <ToastContainer
                    position="bottom-right"
                    theme="dark"
                    autoClose={3000}
                  />
                </main>
              </Providers>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
