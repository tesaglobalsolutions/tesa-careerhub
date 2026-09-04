import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tesa-careerhub.vercel.app'),
  title: {
    default: 'TESA CareerHub — Learn. Build. Get Hired.',
    template: '%s | TESA CareerHub',
  },
  description:
    'Branded EdTech and career acceleration platform by TESA Global Solutions. Career discovery, gated learning tracks, ATS-compliant CVs, mentorship and jobs.',
  applicationName: 'TESA CareerHub',
  authors: [{ name: 'TESA Global Solutions' }],
  keywords: [
    'TESA Global Solutions',
    'EdTech Nigeria',
    'career acceleration',
    'ATS CV builder',
    'tech mentorship',
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'TESA CareerHub',
    title: 'TESA CareerHub — Learn. Build. Get Hired.',
    description:
      'Career discovery, gated learning, ATS CVs, jobs and mentorship in one platform.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TESA CareerHub',
    description:
      'Career discovery, gated learning, ATS CVs, jobs and mentorship in one platform.',
    images: ['/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#1D60ED',
          colorBackground: '#020617',
          colorInputBackground: '#0F172A',
          colorInputText: '#F1F5F9',
          colorText: '#F1F5F9',
          colorTextSecondary: '#94A3B8',
          colorDanger: '#EC1817',
          colorSuccess: '#2DCC70',
          colorWarning: '#FF6F00',
          borderRadius: '0.75rem',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        },
        elements: {
          card: 'bg-slate-900 border border-slate-800 shadow-brand-lg',
          headerTitle: 'text-slate-100',
          headerSubtitle: 'text-slate-400',
          socialButtonsBlockButton:
            'bg-slate-950 border border-slate-800 text-slate-200 hover:bg-slate-800',
          dividerLine: 'bg-slate-800',
          dividerText: 'text-slate-500',
          formFieldLabel: 'text-slate-300',
          formButtonPrimary:
            'bg-brand-500 hover:bg-brand-600 text-sm font-semibold normal-case shadow-brand',
          footerActionText: 'text-slate-400',
          footerActionLink: 'text-brand-400 hover:text-brand-300',
        },
      }}
    >
      <html lang="en" className={inter.variable} suppressHydrationWarning>
        <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
