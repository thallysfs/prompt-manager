import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Prompt Manager',
  description: 'Gerencie seus prompts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
