import type { Metadata } from 'next';
import { nunito_sans, poppins, lato } from './utils/font';
import { AppProvider } from '@/app/rtk-base/provider';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
  title: 'Fidelity Wallet',
  description: 'Fidelity Wallet',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito_sans} ${poppins} ${lato}`}>
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
