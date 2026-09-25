export default function TestimonialsSection() {
  return (
    <section className="bg-[#292929] text-white">

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
          <div className="flex w-64 skew-x-10 items-center gap-3 rounded-lg bg-red-600 px-6 py-4">
            <div className="flex skew-x-12 items-center gap-3">
              <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Sarah Tumiwa</p>
                <p className="text-[10px] text-red-100">California, USA</p>
              </div>
            </div>
          </div>

          <div className="flex w-64 skew-x-10 items-center gap-3 rounded-lg bg-white px-6 py-4">
            <div className="flex skew-x-12 items-center gap-3">
              <img src="/Avatar1.jfif" alt="John Dolton" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-black">John Dolton</p>
                <p className="text-[10px] text-gray-500">New York, USA</p>
              </div>
            </div>
          </div>

          <div className="flex w-64 skew-x-10 items-center gap-3 rounded-lg bg-white px-6 py-4">
            <div className="flex skew-x-12 items-center gap-3">
              <img src="/Avatar1.jfif" alt="Sarah Tumiwa" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-black">Sarah Tumiwa</p>
                <p className="text-[10px] text-gray-500">Karen Miller</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative mt-20 overflow-hidden rounded-xl bg-cover bg-center text-left"
          style={{ backgroundImage: "url('/banner-image1.jpg')" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.75),rgba(0,0,0,0.1))]"></div>

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