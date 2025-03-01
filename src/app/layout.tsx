"use client";

import "./globals.css";
import { Provider } from "react-redux";

import { store } from "@/redux/store";
import { ThemeProvider } from "@/context/ThemeProvider";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 h-full">
        <ThemeProvider>
          <Provider store={store}>
            <Header />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
