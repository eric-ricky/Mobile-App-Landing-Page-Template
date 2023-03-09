import { steps } from './data';

const HowItWorksSection = () => {
  return (
    <section id="howitworks" className="py-14 md:py-20 lg:py-28">
      <div className="container mx-auto md:px-20 px-4">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="headingxs text-blue-400">Get Started</p>
          <h5 className="text-2xl md:text-headingsm font-bold md:w-[35%] mx-auto">
            How it works
          </h5>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 md:px-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-4 p-5 md:p-8 relative"
            >
              <div className="absolute -top-20 left-2 text-[10rem] text-zinc-400 opacity-25">
                {i + 1}
              </div>

              <div>
                <p className="headingxs mb-2">{step.title}</p>
                <p className="text-zinc-500 w-[85%]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
