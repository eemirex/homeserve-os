import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
const manrope=Manrope({subsets:["latin"],variable:"--font-body"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-display"});
export const metadata:Metadata={title:"HomeServe OS — Field service, finally in sync",description:"AI-powered customer lifecycle and field service operations for home service businesses."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>}

