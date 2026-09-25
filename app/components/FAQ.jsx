"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#292929] w-[80%] mt-50 px-25 py-24 rounded-2xl text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-medium w-[60%] md:text-5xl">
          Frequenty Asked Questions
        </h2>

        <div className="mt-12 space-y-5 relative left-40">
          {/* Item 1 */}
          <div className="rounded-lg bg-[#f2f2f2] px-8 py-6 text-black">
            <button
              type="button"
              onClick={() => toggle(0)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <span className="text-base font-medium">
                What types of vehicles do you service?
              </span>
              <span className="ml-4 shrink-0 text-2xl text-red-600">
                {openIndex === 0 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 0 && (
              <p className="mt-3 text-sm text-gray-600">
                We service all types of vehicles, including cars, trucks, and SUVs.
              </p>
            )}
          </div>

          {/* Item 2 */}
          <div className="rounded-lg bg-[#f2f2f2] px-8 py-6 text-black">
            <button
              type="button"
              onClick={() => toggle(1)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <span className="text-base font-medium">
                Do I need an appointment for auto repairs?
              </span>
              <span className="ml-4 shrink-0 text-2xl text-red-600">
                {openIndex === 1 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 1 && (
              <p className="mt-3 text-sm text-gray-600">
                While walk-ins are welcome, we recommend booking an appointment to
                guarantee a time slot and avoid long wait times.
              </p>
            )}
          </div>

          {/* Item 3 */}
          <div className="rounded-lg bg-[#f2f2f2] px-8 py-6 text-black">
            <button
              type="button"
              onClick={() => toggle(2)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <span className="text-base font-medium">
                How long does it typically take to complete an auto repair?
              </span>
              <span className="ml-4 shrink-0 text-2xl text-red-600">
                {openIndex === 2 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 2 && (
              <p className="mt-3 text-sm text-gray-600">
                Repair times vary depending on the service, but most jobs are
                completed within the same day.
              </p>
            )}
          </div>

          {/* Item 4 */}
          <div className="rounded-lg bg-[#f2f2f2] px-8 py-6 text-black">
            <button
              type="button"
              onClick={() => toggle(3)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <span className="text-base font-medium">
                Do you offer any warranties on your repairs?
              </span>
              <span className="ml-4 shrink-0 text-2xl text-red-600">
                {openIndex === 3 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 3 && (
              <p className="mt-3 text-sm text-gray-600">
                Yes, all of our repairs come with a warranty covering parts and
                labor for your peace of mind.
              </p>
            )}
          </div>

          {/* Item 5 */}
          <div className="rounded-lg bg-[#f2f2f2] px-8 py-6 text-black">
            <button
              type="button"
              onClick={() => toggle(4)}
              className="flex w-full cursor-pointer items-center justify-between text-left"
            >
              <span className="text-base font-medium">
                What forms of payment do you accept?
              </span>
              <span className="ml-4 shrink-0 text-2xl text-red-600">
                {openIndex === 4 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 4 && (
              <p className="mt-3 text-sm text-gray-600">
                We accept cash, all major credit cards, and mobile payment
                options such as Apple Pay and Google Pay.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}