import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar'
import { Metadata } from "next";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SongBird",
  description: "Where new melodies take flight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
        {children} 
        </Sidebar>
        </body>
    </html>
  );
}
