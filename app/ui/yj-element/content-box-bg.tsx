import { lusitana } from '@/app/ui/fonts';


export default function YjContentBox({ url }: { url: string }) {
  return (
    <div 
      className="flex justify-center items-center" // 添加 Flexbox 布局类
    >
    <div className="flex  flex-col " 
    style={{ 
        backgroundImage: `url(${url})`,
        backgroundSize: 'contain', // 或 'contain'
        backgroundRepeat: 'no-repeat', // 防止背景图片重复
        backgroundPosition: 'center', // 将背景图片居中 
        width: '80vw',
        height: 'auto',
        paddingTop: '56.25%',
        position: 'relative',
        marginBottom: '500px'
    }}>
        </div>
    </div>
  );
}
