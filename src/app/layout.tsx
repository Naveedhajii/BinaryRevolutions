import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'GoStartup - Tailwind CSS Template',
  description: 'Handcrafted Tailwind CSS template for startups, SaaS, and businesses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} antialiased bg-white dark:bg-dark`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: '#2563eb',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
              },
            },
            error: {
              style: {
                background: '#ef4444',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
              },
            },
          }}
        />
      </body>
    </html>
  );
}