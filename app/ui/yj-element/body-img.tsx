import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function YjContent({ url }: { url: string }) {
  return (
      <Image src={url}
    className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    width={160}
    height={120}
    alt={'desktop logo'} />
  );
}
