import { Disclosure, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/outline';

import { faqQuestions } from './questions';

const FAQ = () => (
  <section id="faq" className="py-14 md:py-20 lg:py-28">
    <div className="container mx-auto md:px-20 px-4">
      <div className="flex flex-col items-center text-center mb-8">
        <p className="headingxs text-blue-400 ">FAQs</p>
        <h5 className="headingsm md:w-[40%] mx-auto">
          Frequently Asked Questions
        </h5>
      </div>

      <div className="w-full md:px-4 px-2">
        <div className="mx-auto w-[95%] md:w-[75%] rounded-2xl p-2">
          {faqQuestions.map(({ q, a }, i) => (
            <Disclosure as="div" className="mt-4 mb-8" key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full md:w-[65%] flex mx-auto justify-between text-headingxs font-medium text-left">
                    <span className="">{q}</span>
                    <PlusIcon
                      className={`${open ? 'rotate-180 transform' : ''} w-5`}
                    />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-500 ease-in-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                  >
                    <Disclosure.Panel className="text-zinc-500 pt-5 pr-2 w-full md:w-[65%] mx-auto">
                      {a}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
