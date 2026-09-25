export default function TestimonialsSection() {
  return (
    <section className="bg-[#292929] h-200 text-white relative">

      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-xl font-semibold tracking-[0.3em] text-red-600">TESTIMONIALS</p>
        <h2 className="mt-3 text-5xl font-semibold">What Our Clients Say</h2>

        <p className="mx-auto mt-13 max-w-lg text-sm leading-6 text-gray-400">
          "I have been taking my car to AutoWorks for years and have always had a great
          experience. The staff is knowledgeable and friendly, and they always take the time
          to explain the repairs needed. I highly recommend them for anyone looking for
          reliable auto repair services."
        </p>

        <div className="mt-4 text-xl tracking-widest text-red-600">★★★★★</div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="flex w-90 text-center justify-center skew-x-10 items-center gap-3 rounded-lg bg-red-600 px-6 py-4">
            <div className="flex itew-x-ems-center gap-3">
               <div className="flex align-middle items-center gap-3 skew-[-200]">

              <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-15 skew-[-100] rotate-5 w-15 rounded-full object-cover" />
              <div className="text-left rotate-0">
                <p className="text-sm font-semibold text-white">Sarah Tumiwa</p>
                <p className="text-[10px] text-red-100">California, USA</p>
               </div>
              </div>
            </div>
          </div>

          <div className="flex w-90 text-center justify-center skew-x-10 items-center gap-3 rounded-lg bg-white px-6 py-4">
            <div className="flex itew-x-ems-center gap-3">
               <div className="flex align-middle items-center gap-3 skew-[-200]">

              <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-15 skew-[-100] rotate-5 w-15 rounded-full object-cover" />
              <div className="text-left rotate-0">
                <p className="text-sm font-semibold text-black">Sarah Tumiwa</p>
                <p className="text-[10px] text-[#8D8D8B]">California, USA</p>
               </div>
              </div>
            </div>
          </div>

          <div className="flex w-90 text-center justify-center skew-x-10 items-center gap-3 rounded-lg bg-white px-6 py-4">
            <div className="flex itew-x-ems-center gap-3">
               <div className="flex align-middle items-center gap-3 skew-[-200]">

              <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-15 skew-[-100] rotate-5 w-15 rounded-full object-cover" />
              <div className="text-left rotate-0">
                <p className="text-sm font-semibold text-black">Sarah Tumiwa</p>
                <p className="text-[10px] text-[#8D8D8B]">California, USA</p>
               </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-140 w-270 mt-20 overflow-hidden rounded-xl bg-cover bg-center text-left"
          style={{ backgroundImage: "url('/banner-image1.jpg')" }}
        >

          <div className="relative px-15 py-20 md:py-24">
            <h3 className="max-w-sm text-4xl w-90 font-medium leading-tight">
              Ready to schedule an <span className="text-red-600">appointment?</span>
            </h3>
            <p className="mt-8 text-sm text-white">Contact us today to book your next service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}