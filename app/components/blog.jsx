"use client";

import { useState } from "react";

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      className="relative px-6 py-24 pb-100 text-center text-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url("/grayscale-car-image.jfif")` }}
    >
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10">
        <p className="text-lg font-semibold tracking-[0.25em] text-red-600">OUR BLOG</p>
        <h2 className="mt-3 text-4xl font-medium md:text-5xl">What's New?</h2>

        {currentSlide === 0 && (
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-3">
            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('grayscale-mechanic1.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>May 1, 2023</span>
                <span>by John Smith</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-medium leading-snug">
                5 Common Car Maintenance Mistakes and How to Avoid Them
              </h3>
            </article>

            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/grayscale-mechanic2.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>August 5, 2023</span>
                <span>by Emily Davis</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-semibold leading-snug">
                Signs Your Car Needs New Tires and How to Choose the Right Ones
              </h3>
            </article>

            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/grayscale-mechanic3.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>September 1, 2023</span>
                <span>by Michael Wilson</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-semibold leading-snug underline">
                The Benefits of Regular Engine Tune-ups for Your Car
              </h3>
            </article>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-3">
            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('grayscale-mechanic3.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>October 12, 2023</span>
                <span>by Sarah Lee</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-medium leading-snug">
                Winter-Proofing Your Vehicle: A Complete Checklist
              </h3>
            </article>

            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/grayscale-mechanic1.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>November 3, 2023</span>
                <span>by David Park</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-semibold leading-snug">
                Why Your Check Engine Light Doesn't Always Mean Trouble
              </h3>
            </article>

            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/grayscale-mechanic2.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>December 8, 2023</span>
                <span>by Rachel Kim</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-semibold leading-snug">
                Battery Care 101: Extending the Life of Your Car Battery
              </h3>
            </article>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-3">
            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('grayscale-mechanic2.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>January 15, 2024</span>
                <span>by Tom Rivera</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-medium leading-snug">
                Understanding Your Brake System: When to Get It Checked
              </h3>
            </article>

            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/grayscale-mechanic3.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>February 20, 2024</span>
                <span>by Nina Torres</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-semibold leading-snug">
                Synthetic vs Conventional Oil: Which Is Right for Your Car?
              </h3>
            </article>

            <article className="text-left">
              <div
                className="h-56 w-full rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/grayscale-mechanic1.jfif')" }}
              ></div>
              <div className="mt-4 px-9 flex items-center justify-between text-xs text-gray-400">
                <span>March 4, 2024</span>
                <span>by Alex Chen</span>
              </div>
              <h3 className="mt-3 px-9 text-lg font-semibold leading-snug">
                Top Signs It's Time to Replace Your Windshield Wipers
              </h3>
            </article>
          </div>
        )}

        <div className="mt-10 flex items-center justify-center gap-6">

          <div className="flex items-center gap-2" aria-label="Blog carousel slides">
            <button
              type="button"
              onClick={() => setCurrentSlide(0)}
              aria-label="Show blog slide 1"
              aria-current={currentSlide === 0 ? "true" : undefined}
              className={`h-1.5 w-6 cursor-pointer rounded-full ${
                currentSlide === 0 ? "bg-red-600" : "bg-gray-600"
              }`}
            />
            <button
              type="button"
              onClick={() => setCurrentSlide(1)}
              aria-label="Show blog slide 2"
              aria-current={currentSlide === 1 ? "true" : undefined}
              className={`h-1.5 w-6 cursor-pointer rounded-full ${
                currentSlide === 1 ? "bg-red-600" : "bg-gray-600"
              }`}
            />
            <button
              type="button"
              onClick={() => setCurrentSlide(2)}
              aria-label="Show blog slide 3"
              aria-current={currentSlide === 2 ? "true" : undefined}
              className={`h-1.5 w-6 cursor-pointer rounded-full ${
                currentSlide === 2 ? "bg-red-600" : "bg-gray-600"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}