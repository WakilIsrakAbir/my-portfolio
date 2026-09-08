import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SettingsDrawer from "@/components/SettingsDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Abir",
    template: "%s | Wakil Israk Abir",
  },
  description:
    "Official portfolio of Wakil Israk Abir. B.Sc. in Computer Science & Engineering graduate (CGPA 3.59) from Southeast University. Specializing in React, Next.js, Node.js, Express, MongoDB, and modern IT operations.",
  keywords: [
    "Wakil Israk Abir",
    "Abir",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Software Engineer Bangladesh",
    "Southeast University CSE",
    "KitchenHood",
    "Textile Planning Solution"
  ],
  authors: [{ name: "Wakil Israk Abir", url: "https://github.com/WakilIsrakAbir" }],
  creator: "Wakil Israk Abir",
  openGraph: {
    title: "Wakil Israk Abir | Full-Stack MERN Developer",
    description: "Explore real-world full-stack web applications, management dashboards, and IT operations expertise by Wakil Israk Abir.",
    url: "https://wakil-israk-abir.vercel.app",
    siteName: "Wakil Israk Abir Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${geistSans.variable} ${geistMono.variable}`} data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var scheme = localStorage.getItem('abir-scheme') || 'dark';
                  if (scheme === 'green') scheme = 'dark';
                  var accent = localStorage.getItem('abir-accent') || 'green';
                  var root = document.documentElement;
                  root.setAttribute('data-accent', accent);
                  root.setAttribute('data-density', 'compact');
                  root.setAttribute('data-theme', scheme);
                  if (scheme === 'dark') {
                    root.classList.remove('light');
                    root.classList.add('dark');
                  } else {
                    root.classList.remove('dark');
                    root.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
        <ThemeProvider>
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <SettingsDrawer />
        </ThemeProvider>
      </body>
    </html>
  );
}
