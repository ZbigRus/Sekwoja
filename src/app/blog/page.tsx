import type { Metadata } from 'next';
import Blog from '@/components/home/blog';
import Contact from '@/components/home/contact/contact';
import Opinions from '@/components/home/opinions';
import Partners from '@/components/home/partners';

export const metadata: Metadata = {
  title: 'Blog | Sekwoja - Meble na wymiar',
  openGraph: {
    title: 'Blog | Sekwoja - Meble na wymiar',
  },
};

export default async function Page() {
  return (
    <div>
      <Blog hideButton />
      <Opinions />
      <Partners />
      <Contact />
    </div>
  );
}
