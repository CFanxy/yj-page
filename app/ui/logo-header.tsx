import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div className="flex h-20 shrink-0 items-end  p-4 md:h-22">
    <Image
        src="/header/logo-v2.png"
        width={120}
        height={48}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/header/logo-v2.png"
        width={160}
        height={120}
        className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
