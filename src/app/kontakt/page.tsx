import type { Metadata } from 'next';
import Contact from '@/components/home/contact/contact';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Kontakt | Sekwoja - Meble na wymiar',
  openGraph: {
    title: 'Kontakt | Sekwoja - Meble na wymiar',
  },
};

export default async function Page({
  searchParams: promiseSearchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const searchParams = await promiseSearchParams;

  const defaultType = searchParams.type || 'measurement';
  return (
    <div>
      <div className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] mt-8">
        <Breadcrumbs />
      </div>
      <Contact defaultType={defaultType} isExpanded />
    </div>
  );
}
