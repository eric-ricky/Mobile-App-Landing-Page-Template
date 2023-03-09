import MainLayout from '@/components/layout/main';
import CTASection from '@/components/sections/home/cta';
import FAQ from '@/components/sections/home/faq';
import FeaturesSection from '@/components/sections/home/features';
import HeroSection from '@/components/sections/home/hero';
import HowItWorksSection from '@/components/sections/home/how-it-works';
import TestimonialsSection from '@/components/sections/home/testimonials';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQ />
      <CTASection />
    </>
  );
};

export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
