
import "./globals.css";

export const metadata = {
  title: "JiniWorks Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html>
      <body>

        {children}
      </body>

    </html>

  );
}


// import { Geist, Geist_Mono } from "next/font/google"; className={`${geistSans.variable} ${geistMono.variable}`}
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
