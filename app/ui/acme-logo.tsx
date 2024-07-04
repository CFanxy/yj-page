import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
      <Image src="/header/logo-v2.png"
    className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    width="280" 
    height="130"
    alt={'desktop logo'} />
    
      // <Image
      //       src="/hero-desktop.png"
      //       width={1000}
      //       height={760}
      //       className="hidden md:block"
      //       alt="Screenshots of the dashboard project showing desktop version"
      //     />
  );
}
