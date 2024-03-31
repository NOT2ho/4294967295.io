import React from 'react';
import { PropsWithChildren } from "react";
import "./globals.css";
import Link from 'next/link'

export default async function RootLayout({ children }: PropsWithChildren) {
  return (<html>
    <body> <Link href="/create">의견개진란</Link>
      <br></br><h1>
        {children}
        <br></br></h1>
    </body></html>)
}
export const metadata = {
  title: "4294967295.io",
  description: "Generated by 4294967295",
  icons: {
    icon: "/4.png",
  }
}
