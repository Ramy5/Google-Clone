import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Created google clone app by using Next.js 13 and Tailwind CSS",
  icons: {
    shortcut: "/google.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen selection:bg-cyan-500 selection:text-white">
        {/* PROVIDER FOR THEME WILL PUT AROUND CONTENT HERE */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
