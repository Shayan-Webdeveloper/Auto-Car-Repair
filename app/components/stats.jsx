export default function StatsSection() {
  return (
    <section className="bg-[#232323] text-white mt-40">
      <div className="h-0.75 w-full bg-[linear-gradient(to_right,#dc2626,transparent)]"></div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-24 text-center md:grid-cols-4">
        <div>
          <h3 className="text-6xl font-bold md:text-8xl">20</h3>
          <p className="mt-4 text-lg text-gray-300">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold md:text-8xl">3.8</h3>
          <p className="mt-4 text-lg text-gray-300">Vehicle Repaired</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold md:text-8xl">30</h3>
          <p className="mt-4 text-lg text-gray-300">Technicians and Workers</p>
        </div>
        <div>
          <h3 className="text-6xl font-bold md:text-8xl">100%</h3>
          <p className="mt-4 text-lg text-gray-300">Satisfied Customers</p>
        </div>
      </div>

      <div className="h-0.75 w-full bg-[linear-gradient(to_left,#dc2626,transparent)]"></div>
    </section>
  );
}