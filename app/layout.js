import "./globals.css";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Pavish's Portfolio",
  description: "Portfolio of Pavish – Full Stack Developer specializing in web and mobile development. Showcasing projects, skills, and a passion for building user-friendly applications.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF7C8" },
    { media: "(prefers-color-scheme: dark)", color: "#FFFBDC" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
        className={`antialiased`}
      >
        {children}
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
