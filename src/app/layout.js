import AuthProvider from "@/components/providers/session-provider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title:
    "Mojidpur Society of Welfare Organization Club | Community Development & Social Welfare",
  description:
    "Discover the Mojidpur Society of Welfare Organization Club. We're dedicated to community development, support, and well-being. Join us today!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, poppins.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
