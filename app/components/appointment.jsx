"use client";

export default function AppointmentForm() {
  return (
    <section className="grid grid-cols-1 bg-[#222222] mt-50 text-white md:grid-cols-2">
      <div
        className="min-h-100 bg-cover bg-center md:min-h-full rounded"
        style={{ backgroundImage: `url("/appointment-car.jfif    ")`}}
     ></div>

      <div className="px-8 py-16 md:px-16 ">
        <p className="text-sm font-semibold tracking-[0.25em] text-red-600">
          BOOK AN
        </p>
        <h2 className="mt-2 text-4xl font-bold md:text-5xl">
          Appointment Form
        </h2>

        <h3 className="mt-10 text-lg font-semibold">Contact Info</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-2xl border border-gray-600 bg-transparent px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-red-600"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="rounded-2xl border border-gray-600 bg-transparent px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-red-600"
          />

          <div className="relative">
            <input
              type="text"
              placeholder="Date"
              className="w-full rounded-2xl border border-gray-600 bg-transparent px-4 py-3 pr-10 text-sm placeholder-gray-400 outline-none focus:border-red-600"
            />
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Time"
            className="rounded-2xl border border-gray-600 bg-transparent px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-red-600"
          />
        </div>

        <h3 className="mt-10 text-lg font-semibold">Contact Info</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <select className="w-full cursor-pointer appearance-none rounded-2xl border border-gray-600 bg-transparent px-4 py-3 pr-10 text-sm text-gray-400 outline-none focus:border-red-600">
              <option value="">Maker</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <div className="relative">
            <select className="w-full appearance-none rounded-2xl cursor-pointer border border-gray-600 bg-transparent px-4 py-3 pr-10 text-sm text-gray-400 outline-none focus:border-red-600">
              <option value="">Model</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

<h3 className="mt-10 text-lg font-normal">Select Services Needed</h3>
<div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-5 text-base text-gray-200 sm:grid-cols-3">
  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"
    />
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Air Conditioner
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"
      type="checkbox"
/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Heating &amp; Cooling
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"
      type="checkbox"
/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Transmission Repair
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"

/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Brakes Repair
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"
      defaultChecked
/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Oil, Lube &amp; Filters
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"

/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Wheel Alignment
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"
      type="checkbox"
      defaultChecked
/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Engine Diagnostics
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"
/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Steering &amp; Suspension
  </label>

  <label className="relative flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      className="peer cursor-pointer h-4 w-4 shrink-0 appearance-none rounded border-[1.5] border-red-600 bg-transparent"

/>
    <svg
      className="pointer-events-none absolute left-0 top-1/2 h-3.5  w-3.5 mx-auto -translate-y-1/2 ms-[1] hidden text-red-600 peer-checked:block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    Others:
    <span className="ml-1 flex-1 border-b border-gray-500"></span>
  </label>
</div>

        <button className="mt-10 bg-red-600 rounded-2xl px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
          Make an Appointment ↗
        </button>
      </div>
    </section>
  );
}