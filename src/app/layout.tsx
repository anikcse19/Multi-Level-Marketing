"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import SocketTest from "@/components/SocketTest";
// import { useSocketStore } from "@/Zustand/Store/socketStore";
import { useEffect } from "react";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const connectSocket = useSocketStore((state) => state.connectSocket);
  // const disconnectSocket = useSocketStore((state) => state.disconnectSocket);

  // useEffect(() => {
  //   // Connect the socket on mount
  //   connectSocket();

  //   // Disconnect the socket on unmount
  //   return () => {
  //     disconnectSocket();
  //   };
  // }, [connectSocket, disconnectSocket]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
          <Toaster position="bottom-right" />
          {/* <SocketTest /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
