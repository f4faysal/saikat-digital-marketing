import type { Metadata } from 'next';
import '../style/admin.css';

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Auth layout '
};

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className='overflow-hidden'>{children}</div>;
}
