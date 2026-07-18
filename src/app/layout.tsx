import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: "CONNEX | Intelligence Platform",
  description: "AI Relationship Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-grain">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-[320px] flex flex-col min-h-screen relative">
            {/* Background Blobs */}
            <div className="blob blob-violet w-[500px] h-[500px] top-[-10%] left-[-10%]" />
            <div className="blob blob-sky w-[400px] h-[400px] top-[20%] right-[-5%]" />
            
            <TopBar />
            <main className="flex-1 p-0 md:p-8 relative z-10">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
