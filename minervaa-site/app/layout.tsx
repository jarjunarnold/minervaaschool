import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minervaa Vidhya Mandhir',
  description:
    'Rooted in Values. Driven by Excellence. A trusted matriculation school in Pollachi delivering structured academic excellence through a CBSE-oriented curriculum approach.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
