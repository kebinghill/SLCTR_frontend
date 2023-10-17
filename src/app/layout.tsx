import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { ClientCookiesProvider } from './provider/ClientCookiesProvider';
import { SessionProvider } from './provider/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <SessionProvider session={session}>
      <ClientCookiesProvider value={cookies().getAll()}>
        <html lang='en'>
          <body className={inter.className}>{children}</body>
        </html>
      </ClientCookiesProvider>
    </SessionProvider>
  );
}
