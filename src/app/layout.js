import Providers from "@/store/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

import NextThemeProvider from "./NextThemeProvider";
import NavBar from "@/components/nav";
import AuthProvider from "./AuthProvider";
import MainFooter from "@/components/footer";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authenticating with Next.js, RTK Query, and JWTs",
  description:
    "A demo of how to authenticate with Next.js, RTK Query, and JWTs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            <NextThemeProvider>
              <NavBar />
              {children}
              <MainFooter />
            </NextThemeProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
