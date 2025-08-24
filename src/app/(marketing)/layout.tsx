import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}
