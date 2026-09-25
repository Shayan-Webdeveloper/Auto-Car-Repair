export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#292929]  text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 pb-0 text-center">
        <p className="text-xl font-semibold tracking-[0.3em] text-red-600">TESTIMONIALS</p>
        <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">What Our Clients Say</h2>

        <p className="mx-auto mt-13 max-w-lg text-sm leading-6 text-gray-400">
          &quot;I have been taking my car to AutoWorks for years and have always had a great
          experience. The staff is knowledgeable and friendly, and they always take the time
          to explain the repairs needed. I highly recommend them for anyone looking for
          reliable auto repair services.&quot;
        </p>

        <div className="mt-4 text-xl tracking-widest text-red-600">★★★★★</div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="flex w-full max-w-90 justify-center skew-x-10 items-center gap-3 rounded-lg bg-red-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-15 w-15 rounded-full object-cover" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">Sarah Tumiwa</p>
                  <p className="text-[10px] text-red-100">California, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-90 justify-center skew-x-10 items-center gap-3 rounded-lg bg-white px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-15 w-15 rounded-full object-cover" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">Sarah Tumiwa</p>
                  <p className="text-[10px] text-[#8D8D8B]">California, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-90 justify-center skew-x-10 items-center gap-3 rounded-lg bg-white px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-15 w-15 rounded-full object-cover" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-black">Sarah Tumiwa</p>
                  <p className="text-[10px] text-[#8D8D8B]">California, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden rounded-xl top-40 bg-cover bg-center text-left"
          style={{ backgroundImage: "url('/banner-image1.jpg')" }}
        >
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 md:px-15 md:py-20">
            <h3 className="max-w-sm text-2xl font-medium leading-tight sm:text-3xl md:text-4xl">
              Ready to schedule an <span className="text-red-600">appointment?</span>
            </h3>
            <p className="mt-6 text-sm text-white md:text-base">Contact us today to book your next service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}