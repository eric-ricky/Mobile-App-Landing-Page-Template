import { Icon } from '@iconify/react';
import Image from 'next/image';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="">
      <div className="container mx-auto md:px-20 px-4">
        <div className="mb-20">
          <p className="headingxs text-blue-400">Testimonials</p>
          <h5 className="text-2xl md:text-headingsm font-bold w-2/3 md:w-[25%]">
            Check what our clients are saying
          </h5>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {[4, 2].map((n) => (
            <div
              key={n}
              className="col-span-12 md:col-span-6 flex flex-col md:flex-row bg-slate-50 rounded-md shadow-sm"
            >
              <div className="w-full md:w-2/3 h-80 md:h-[20rem] pt-10">
                <div className="relative h-full w-2/3 mx-auto">
                  <Image
                    src={`/images/user${n}-rm.png`}
                    alt="testimonial"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-10">
                <Icon icon="bi-quote" className="text-blue-500 text-5xl" />
                <h2 className="headingxs md:w-[55%] mb-4">
                  I'm saving more money than ever before!
                </h2>
                <div className="text-zinc-400 flex flex-col space-y-2 mb-8">
                  <p className="">
                    I've been using this budget tracker app for six months now,
                    and it's completely changed the way I manage my finances.
                  </p>
                  <p className="">
                    I never thought I'd be able to stick to a budget, but this
                    app has made it so easy. Highly recommend
                  </p>
                </div>
                <p className="headingxs">- Jane D.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
