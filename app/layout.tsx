import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";
import { Providers } from "./config/provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="border border-dashed rounded ">
      {/* <Header></Header> */}
        <section className="flex flex-row justify-start h-screen">
          <Sidebar></Sidebar>
          <section className="flex-1 p-4 border-dashed content bg-primary border-1">
          <Providers> {children}</Providers>
          </section>
        </section>
      </body>
    </html>
  );
}
