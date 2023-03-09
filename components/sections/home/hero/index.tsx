import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="py-14 md:py-20 lg:py-28">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center px-4 md:px-20">
        {/* hero text */}
        <div className="pb-10 md:pb-0">
          <h2 className="headingsm md:text-headingmd md:font-black md:w-[85%] mb-5">
            Take Control of <br />
            <span className="text-blue-500"> Your Finances</span> with Our
            Budget Tracker App
          </h2>

          <p className="md:w-[55%] text-zinc-500 font-medium leading-6 mb-10">
            Easily Track Your Income, Expenses, and Savings to Achieve Your
            Financial Goals
          </p>

          <div className="flex items-center space-x-2">
            <Link href="/" className="relative w-32 md:w-44 h-20">
              <Image
                src="/images/appstore.png"
                alt="appstore"
                fill
                className="object-contain"
              />
            </Link>
            <Link href="/" className="relative w-32 md:w-44 h-20">
              <Image
                src="/images/googleplay.png"
                alt="playstore"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* hero image */}
        <div className="w-full md:w-[75%] mx-auto h-[24em] flex flex-col justify-end relative">
          <div className="absolute top-0 left-0 z-50 w-full md:w-2/3 mx-auto h-80 md:h-full bg-[rgba(0,0,0,0.02)] rounded-full"></div>

          <div className="relative w-full mx-auto h-[56rem] -mb-24">
            <Image
              src="/images/prod.png"
              alt="Showcase"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 70%, 100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
