import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Food Pilgrimages by Brandon Shewmake',
  description: 'Food-focused pilgrimage writing by Brandon Shewmake.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app">
        <header className="header">
          <nav className="nav">
            <Link href="/" className="logo" data-testid="nav-logo">
              shewmaps
            </Link>
            <div className="nav-links">
              <Link href="/?section=pilgrimages" data-testid="nav-pilgrimagesLink">
                Pilgrimages
              </Link>
              <Link href="/?section=about" data-testid="nav-aboutLink">
                About
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
