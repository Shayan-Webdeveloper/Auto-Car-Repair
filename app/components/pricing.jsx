     "use client";

     import { useState } from "react";

     export default function Pricing() {
     const [currentSlide, setCurrentSlide] = useState(0);

     return (
     <section className="mt-44 text-center md:mt-80">
          <p className="text-lg uppercase tracking-[0.25em] text-red-500">
          Pricing plan
          </p>
          <h1 className="mt-3 text-4xl font-medium text-white md:text-5xl">
          Choose the Right Plan for You
          </h1>

          {currentSlide === 0 && (
          <div className="mx-auto my-16 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
               <article className="relative rounded-2xl bg-white pt-44 text-left">
               <div className="absolute w-full left-4 top-0 h-44 skew-x-10 rounded-2xl bg-red-500 px-10 pt-5 text-white">
               <h2 className="text-xl italic">Basic Oil Change</h2>
               <p className="mt-4 text-sm italic">Starting at</p>
               <p className="mt-4 text-5xl font-semibold italic">$29.99</p>
               </div>

               <div className="px-6 pb-8 pt-8">
               <ul className="space-y-3 text-black">
                    <li>✓ Includes up to 5 quarts of conventional oil</li>
                    <li>✓ Includes standard oil filter replacement</li>
                    <li>✓ Tire pressure check and adjustment</li>
                    <li>✓ Includes basic vehicle inspection</li>
                    <li>✓ Additional fees may apply</li>
               </ul>
               <button className="mt-8 w-full cursor-pointer rounded-3xl bg-red-500 py-4 text-white hover:bg-red-600">
                    Get Started
               </button>
               </div>
               </article>

               <article className="relative  rounded-2xl bg-white pt-44 text-left">
               <div className="absolute w-full left-4 top-0 h-44 skew-x-10 rounded-2xl bg-red-500 px-10 pt-5 text-white">
               <h2 className="text-xl italic">Express Service</h2>
               <p className="mt-4 text-sm italic">Starting at</p>
               <p className="mt-4 text-5xl font-semibold italic">$49.99</p>
               </div>

               <div className="px-6 pb-8 pt-8">
               <ul className="space-y-3 text-black">
                    <li>✓ Includes up to 5 quarts of conventional oil</li>
                    <li>✓ Includes standard oil filter replacement</li>
                    <li>✓ Tire pressure check and adjustment</li>
                    <li>✓ Includes basic vehicle inspection</li>
                    <li>✓ Additional fees may apply</li>
               </ul>
               <button className="mt-8 w-full cursor-pointer rounded-3xl bg-red-500 py-4 text-white hover:bg-red-600">
                    Get Started
               </button>
               </div>
               </article>
          </div>
          )}

          {currentSlide === 1 && (
          <div className="mx-auto my-16 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
               <article className="relative rounded-2xl bg-white pt-44 text-left">
               <div className="absolute w-full left-4 top-0 h-44 skew-x-10 rounded-2xl bg-red-500 px-10 pt-5 text-white">
               <h2 className="text-xl italic">Basic Oil Change</h2>
               <p className="mt-4 text-sm italic">Starting at</p>
               <p className="mt-4 text-5xl font-semibold italic">$89.99</p>
               </div>

               <div className="px-6 pb-8 pt-8">
               <ul className="space-y-3 text-black">
                    <li>✓ Includes up to 5 quarts of conventional oil</li>
                    <li>✓ Includes standard oil filter replacement</li>
                    <li>✓ Tire pressure check and adjustment</li>
                    <li>✓ Includes basic vehicle inspection</li>
                    <li>✓ Additional fees may apply</li>
               </ul>
               <button className="mt-8 w-full cursor-pointer rounded-3xl bg-red-500 py-4 text-white hover:bg-red-600">
                    Get Started
               </button>
               </div>
               </article>

               <article className="relative  rounded-2xl bg-white pt-44 text-left">
               <div className="absolute w-full left-4 top-0 h-44 skew-x-10 rounded-2xl bg-red-500 px-10 pt-5 text-white">
               <h2 className="text-xl italic">Express Service</h2>
               <p className="mt-4 text-sm italic">Starting at</p>
               <p className="mt-4 text-5xl font-semibold italic">$149.99</p>
               </div>

               <div className="px-6 pb-8 pt-8">
               <ul className="space-y-3 text-black">
                    <li>✓ Includes up to 5 quarts of conventional oil</li>
                    <li>✓ Includes standard oil filter replacement</li>
                    <li>✓ Tire pressure check and adjustment</li>
                    <li>✓ Includes basic vehicle inspection</li>
                    <li>✓ Additional fees may apply</li>
               </ul>
               <button className="mt-8 w-full cursor-pointer rounded-3xl bg-red-500 py-4 text-white hover:bg-red-600">
                    Get Started
               </button>
               </div>
               </article>
          </div>
          )}

          {currentSlide === 2 && (
          <div className="mx-auto my-16 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
               <article className="relative rounded-2xl bg-white pt-44 text-left">
               <div className="absolute w-full left-4 top-0 h-44 skew-x-10 rounded-2xl bg-red-500 px-10 pt-5 text-white">
               <h2 className="text-xl italic">Basic Oil Change</h2>
               <p className="mt-4 text-sm italic">Starting at</p>
               <p className="mt-4 text-5xl font-semibold italic">$59.99</p>
               </div>

               <div className="px-6 pb-8 pt-8">
               <ul className="space-y-3 text-black">
                    <li>✓ Includes up to 5 quarts of conventional oil</li>
                    <li>✓ Includes standard oil filter replacement</li>
                    <li>✓ Tire pressure check and adjustment</li>
                    <li>✓ Includes basic vehicle inspection</li>
                    <li>✓ Additional fees may apply</li>
               </ul>
               <button className="mt-8 w-full cursor-pointer rounded-3xl bg-red-500 py-4 text-white hover:bg-red-600">
                    Get Started
               </button>
               </div>
               </article>

               <article className="relative  rounded-2xl bg-white pt-44 text-left">
               <div className="absolute w-full left-4 top-0 h-44 skew-x-10 rounded-2xl bg-red-500 px-10 pt-5 text-white">
               <h2 className="text-xl italic">Express Service</h2>
               <p className="mt-4 text-sm italic">Starting at</p>
               <p className="mt-4 text-5xl font-semibold italic">$199.99</p>
               </div>

               <div className="px-6 pb-8 pt-8">
               <ul className="space-y-3 text-black">
                    <li>✓ Includes up to 5 quarts of conventional oil</li>
                    <li>✓ Includes standard oil filter replacement</li>
                    <li>✓ Tire pressure check and adjustment</li>
                    <li>✓ Includes basic vehicle inspection</li>
                    <li>✓ Additional fees may apply</li>
               </ul>
               <button className="mt-8 w-full cursor-pointer rounded-3xl bg-red-500 py-4 text-white hover:bg-red-600">
                    Get Started
               </button>
               </div>
               </article>
          </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-6">

          <div className="flex items-center gap-3" aria-label="Pricing carousel slides">
               <button
               type="button"
               onClick={() => setCurrentSlide(0)}
               aria-label="Show pricing slide 1"
               aria-current={currentSlide === 0 ? "true" : undefined}
               className={`h-2 cursor-pointer rounded-full w-8 ${
               currentSlide === 0 ? " bg-red-500" : " bg-gray-500"
               }`}
               />
               <button
               type="button"
               onClick={() => setCurrentSlide(1)}
               aria-label="Show pricing slide 2"
               aria-current={currentSlide === 1 ? "true" : undefined}
               className={`h-2 cursor-pointer rounded-full w-8 ${
               currentSlide === 1 ? "bg-red-500" : " bg-gray-500"
               }`}
               />
               <button
               type="button"
               onClick={() => setCurrentSlide(2)}
               aria-label="Show pricing slide 3"
               aria-current={currentSlide === 2 ? "true" : undefined}
               className={`h-2 cursor-pointer rounded-full w-8 ${
               currentSlide === 2 ? "bg-red-500" : " bg-gray-500"
               }`}
               />
          </div>

          </div>
     </section>
     );
     }