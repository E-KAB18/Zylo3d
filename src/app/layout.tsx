// app/layout.tsx
import './globals.css';
import localFont from 'next/font/local';
import AOSWrapper from "@/components/layout/AOSWrapper";

const sora = localFont({
  src: [
    { path: '../../public/fonts/Sora-400.woff2', weight: '400' },
    { path: '../../public/fonts/Sora-500.woff2', weight: '500' },
    { path: '../../public/fonts/Sora-600.woff2', weight: '600' },
    { path: '../../public/fonts/Sora-700.woff2', weight: '700' },
  ],
  variable: '--font-sora',
});

const dmSans = localFont({
  src: [
    { path: '../../public/fonts/dm-sans-400.woff2', weight: '400' },
    { path: '../../public/fonts/dm-sans-500.woff2', weight: '500' },
    { path: '../../public/fonts/dm-sans-600.woff2', weight: '600' },
    { path: '../../public/fonts/dm-sans-700.woff2', weight: '700' },
  ],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Zylo3D: Digital Dentistry Manufacturing Platform',
  description: 'The complete digital dentistry manufacturing platform: hardware, software, and validated materials, built to work as one.',
  icons: {
    icon: [
      { url: '/images/logo/zylo-logo.webp', type: 'image/webp' },
    ],
    apple: '/images/logo/zylo-logo.webp',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <AOSWrapper />
        {children} {/* no global Header/Footer */}
      </body>
    </html>
  );
}
