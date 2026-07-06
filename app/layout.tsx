import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hobbies of Shubha | ಹೊಬ್ಬೀಸ್ ಆಫ್ ಶುಭ — Traditional Saree Art Courses',
  description:
    'Learn the exquisite art of traditional miniature saree draping and majestic doll creation. Premium online courses by Shubha — master fabric preparation, pleating, scale modeling, and festival accessories. ಕಲಾತ್ಮಕ ಸೀರೆ ವಿನ್ಯಾಸ ಕಲಿಯಿರಿ.',
  keywords: [
    'saree draping course',
    'traditional arts Karnataka',
    'miniature saree doll',
    'ಸೀರೆ ವಿನ್ಯಾಸ',
    'Hobbies of Shubha',
    'ಹೊಬ್ಬೀಸ್ ಆಫ್ ಶುಭ',
    'Indian handicrafts',
    'silk saree art',
  ],
  authors: [{ name: 'Hobbies of Shubha' }],
  openGraph: {
    title: 'Hobbies of Shubha | ಹೊಬ್ಬೀಸ್ ಆಫ್ ಶುಭ',
    description: 'Master the art of traditional saree draping and doll creation.',
    type: 'website',
    locale: 'kn_IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn" className="antialiased">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
