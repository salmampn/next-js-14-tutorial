/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang='en'>
    <body className={poppins.className}>
      <Navbar />
      <main className='max-w-3xl mx-auto py-8'>
      {children}
      </main>
    </body>
  </html>
}