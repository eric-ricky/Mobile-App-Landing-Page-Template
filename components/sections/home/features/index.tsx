import { features } from './data';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-14 md:py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto md:px-20 px-4">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="headingxs text-blue-400">Features</p>
          <h5 className="text-2xl md:text-headingsm font-bold md:w-[35%] mx-auto">
            Every feature you need for your finances
          </h5>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 md:px-10">
          {features.map((benefit, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 p-5 md:p-8 border rounded-md bg-slate-100 cursor-pointer hover:bg-slate-200 flex space-x-5"
            >
              <div className="bg-gradient-to-r from-blue-300 to-blue-500 rounded-md p-2 w-fit h-fit">
                {benefit.icon}
              </div>

              <div>
                <p className="headingxs mb-2">{benefit.title}</p>
                <p className="text-zinc-500 w-[85%]">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
