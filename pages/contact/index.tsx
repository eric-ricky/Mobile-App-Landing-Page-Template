import MainLayout from '@/components/layout/main';
import { IPageMeta } from '@/types';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { NextPageWithLayout } from '../page';

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <section id="faq" className="py-14 md:py-20 lg:py-28">
        <div className="container mx-auto md:px-20 px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <p className="headingxs text-blue-400 ">Contact Us</p>
            <h5 className="text-xl md:text-headingsm font-bold md:w-[40%] mx-auto">
              Have questions or concerns? <br /> Get in touch with us:
            </h5>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-center md:space-x-4 space-y-4 md:space-y-0 mt-10">
            <Link
              href="mailto:support@wecodepro.top"
              className="py-2 px-6 rounded-full cursor-pointer bg-black text-white flex items-center justify-center space-x-2"
            >
              <span>Technical Support</span>
              <ArrowUpRightIcon className="w-5" />
            </Link>

            <Link
              href="mailto:hi@wecodepro.top"
              className="py-2 px-6 rounded-full cursor-pointer text-black bg-slate-200 hover:bg-slate-100 flex items-center justify-center space-x-2"
            >
              <span>General Inquiry</span>
              <ArrowUpRightIcon className="w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

const meta: IPageMeta = {
  title: 'Contact Us',
  description: 'Have questions or concerns |  Get in touch with us',
};

ContactPage.getLayout = (page) => <MainLayout meta={meta}>{page}</MainLayout>;
