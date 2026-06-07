import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Cormorant_Garamond, Inter } from 'next/font/google';
import { NavigationProvider } from '@/context/NavigationContext';
import CustomCursor from '@/components/shared/CustomCursor';
import PageWipe from '@/components/shared/PageWipe';
import ScrollProgress from '@/components/shared/ScrollProgress';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant' 
});
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Farhan Khan — Portfolio',
  description: 'Built with intent.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${cormorantGaramond.variable} ${inter.variable}`}>
        <NavigationProvider>
          <CustomCursor />
          <PageWipe />
          <ScrollProgress />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
