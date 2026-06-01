// app/layout.tsx
import './globals.css';
import { Sora, DM_Sans } from 'next/font/google';
import AOSWrapper from "@/components/layout/AOSWrapper";

// Define a secondary font for headings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

// Define a font for your primary body text
const dmSans = DM_Sans({
  subsets: ['latin'],
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
