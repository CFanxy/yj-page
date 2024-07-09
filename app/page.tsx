import YJLogoHeader from '@/app/ui/logo-header';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import YjContent from '@/app/ui/yj-element/body-img';
import YjContentBoxBg from '@/app/ui/yj-element/content-box-bg';

// #65df91

export default function Page() {
  return (
    <main className="relative col">
      <div className='flex min-h-screen flex-col'>
        
        <YJLogoHeader/>

        
        {/* <YjContentBoxBg url='/yj-banner1.jpg' /> */}

        <div className="flex grow flex-col" 
              style={{ 
                  backgroundImage: `url(/yj-banner3.png)`,
                  backgroundSize: 'contain', // 或 'contain'
                  backgroundRepeat: 'no-repeat', // 防止背景图片重复
                  backgroundPosition: 'center', // 将背景图片居中 
                  width: '100vw',
                  height: 'auto',
                  paddingTop: '32%'
        }}>
          <div className=""></div>
        </div>

        {/* <YjContent url='/content/we-do.png'/> */}


        <YjContentBoxBg url='/content/we-do.png' />
        <YjContentBoxBg url='/content/we-solve.png' />
        <YjContentBoxBg url='/content/time-line.png' />
        <YjContentBoxBg url='/content/case-1-yuantongluqiao.png' />

        {/* <div className="flex grow flex-col gap-4 justify-center items-center" style={{ backgroundColor: '#65df91' }}>
          <div className="flex flex-col justify-center items-center gap-0 px-6 py-10 ">
            <p className="text-xl text-black-800 md:text-3xl">
            狂想不止，羿启引爆
            </p>
            
            <p className="text-xl text-black-800 font-sans">
            Keep Dreaming, we are blooming
            </p>
          </div>
        </div>  */}
      </div>
      <div className='flex flex-col'>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
              <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>Welcome to Acme.</strong> This is the example for the{' '}
                <a href="https://nextjs.org/learn/" className="text-blue-500">
                  Next.js Learn Course
                </a>
                , brought to you by Vercel.
              </p>
              <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              {/* Add Hero Images Here */}
            </div>
          </div>
      </div>
      {/* <div className='flex flex-col'>
        <div className="flex flex-row">
          <div className="h-24 p-8 bg-blue-500 mx-2 rounded-lg px-6 basis-1/4 hover:basis-1/2 hover-trigger">01</div>
          <div className="h-24 p-8 bg-blue-500 mx-2 rounded-lg px-6 basis-1/4 hover:basis-1/2 hover-trigger">02</div>
          <div className="h-24 p-8 bg-blue-500 mx-2 rounded-lg px-6 basis-1/2  hover-target">03</div>
        </div>
        
      </div> */}
    </main>
  );
}
