
import type { Metadata } from "next";

import "./globals.css";
// import { ThemeProvider } from "./Provider";



export const metadata: Metadata = {
  title: "Shayan's Portfolio",
  description: "Shayan Khan's Portfolio",
};

export default function RootLayout({
  children,
} : Readonly<{
  children : React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
