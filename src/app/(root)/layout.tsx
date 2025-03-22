import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Frontend Layout with Navbar'
};

export default async function FontEndLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
