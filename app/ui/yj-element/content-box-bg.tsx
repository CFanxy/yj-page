import { lusitana } from '@/app/ui/fonts';


export default function YjContentBox({ url }: { url: string }) {
  return (
    <div className="flex grow flex-col" 
    style={{ 
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover', // 或 'contain'
        backgroundRepeat: 'no-repeat', // 防止背景图片重复
        backgroundPosition: 'center', // 将背景图片居中 
        width: '100vw',
        height: 'auto',
        paddingTop: '56.25%'
    }}>
    </div>
  );
}
