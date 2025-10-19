import type { Metadata } from 'next';
import { skeleton } from '@/assets/images';
import LearnMore from '@/components/about/learn-more';
import ProductsBanner from '@/components/about/products-banner';
import Quality from '@/components/about/quality';
import Content from '@/components/furniture/content';
import Banner from '@/components/home/banner';
import Contact from '@/components/home/contact/contact';
import Opinions from '@/components/home/opinions';
import Skeleton from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'O firmie | Sekwoja - Meble na wymiar',
  description:
    'Firma „SEKWOJA” istnieje od 1994r. i specjalizuje się w wykonywaniu mebli na indywidualne zamówienia klientów. Od samego początku dynamicznie wkroczyliśmy na rynek i wciąż aktywnie na nim działamy.',
  openGraph: {
    title: 'O firmie | Sekwoja - Meble na wymiar',
    description:
      'Firma „SEKWOJA” istnieje od 1994r. i specjalizuje się w wykonywaniu mebli na indywidualne zamówienia klientów. Od samego początku dynamicznie wkroczyliśmy na rynek i wciąż aktywnie na nim działamy.',
  },
};

export default function Page() {
  return (
    <div>
      <Skeleton
        title="O firmie"
        content={
          <Content
            paragraphs={[
              'Firma „SEKWOJA” istnieje od 1994r. i specjalizuje się w wykonywaniu mebli na indywidualne zamówienia klientów. Od samego początku dynamicznie wkroczyliśmy na rynek i wciąż aktywnie na nim działamy.',
              'Tworzyliśmy naszą firmę z myślą o dążeniu do perfekcji na każdym etapie jej funkcjonowania.',
            ]}
          />
        }
        media={[skeleton.src]}
      />
      <Quality />
      <ProductsBanner />
      <LearnMore />
      <Banner />
      <Opinions />
      <Contact />
    </div>
  );
}
