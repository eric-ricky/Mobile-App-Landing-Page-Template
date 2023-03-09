import Button from '@/components/ui/button';
import { QrCodeIcon } from '@heroicons/react/24/outline';

const CTASection = () => {
  return (
    <section id="getstarted" className="py-14 md:py-20">
      <div className="container mx-auto md:px-28 px-4">
        <div className="flex flex-col md:flex-row bg-slate-100 rounded-md mb-5 p-10 md:p-16">
          <div className="flex-grow">
            <h5 className="headingsm">Get started today</h5>
            <p className="w-full md:w-[75%] mt-5 mb-10 font-medium">
              Start Taking Control of Your Finances Today Download the App Now
              From App Store
            </p>

            <Button link="/">Download Now</Button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <QrCodeIcon className="w-44 text-zinc-400" />
            <div>
              <h5 className="headingxs">Download the app</h5>
              <p className="text-zinc-400 w-2/3">
                Scan the QR code to download the app from the App Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
