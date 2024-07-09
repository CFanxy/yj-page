import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function YjContent({ url }: { url: string }) {
  return (
    <div 
      className="flex justify-center items-center " 
    >
        <div className="relative w-4/5 flex-col" style={{ marginTop: '20px' }}>
      <Image src={url}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width={800}
            height={450}
            layout="responsive"
            alt="desktop logo" />
    </div>
    </div>
  );
}
