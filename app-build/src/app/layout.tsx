import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Cormorant_Garamond, Inter } from 'next/font/google';
import { NavigationProvider } from '@/context/NavigationContext';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';
import CustomCursor from '@/components/shared/CustomCursor';
import GrainOverlay from '@/components/shared/GrainOverlay';
import PageWipe from '@/components/shared/PageWipe';
import ScrollProgress from '@/components/shared/ScrollProgress';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });
const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Farhan Khan — Developer, Storyteller & Creative Technologist',
  description: 'Farhan Khan builds intelligent systems, tells cinematic stories, and leads creative communities. ML Engineer, Full-Stack Developer, and founder of FRK Productions — explore the work.',
  keywords: ['Farhan Khan', 'Farhan Khan Portfolio', 'Farhan Khan Developer', 'Full Stack Developer', 'Next.js Developer', 'ML Engineer', 'Creative Technologist', 'Storyteller', 'Community Builder', 'FRK Productions'],
  authors: [{ name: 'Farhan Khan' }],
  openGraph: {
    title: 'Farhan Khan — Developer, Storyteller & Creative Technologist',
    description: 'ML Engineer and Full-Stack Developer who builds production-grade AI systems, crafts cinematic visual stories, and leads FRK Productions — a community of creators across India.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Farhan Khan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farhan Khan — Developer, Storyteller & Creative Technologist',
    description: 'ML Engineer and Full-Stack Developer who builds production-grade AI systems, crafts cinematic visual stories, and leads FRK Productions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${cormorantGaramond.variable} ${inter.variable}`}>
        <NavigationProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <GrainOverlay />
            <PageWipe />
            <ScrollProgress />
            {children}
          </SmoothScrollProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}

