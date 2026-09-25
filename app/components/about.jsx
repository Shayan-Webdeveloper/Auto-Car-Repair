'use client'
export default function About() {
     return(
     <div className="w-full items-stretch bg-[#222222] lg:px-25 md:px-15 px-7 py-25 ">
          <div className="flex lg:flex-row flex-col bg-[#292929] relative rounded overflow-hidden">

<div className="relative z-10 bg-[#292929] rounded lg:px-20 md:px-13 px-9  lg:py-30 md:py-20 py-10 lg:w-1/2 w-full">
<h1 className="uppercase text-red-500 tracking-[4] font-medium text-xl">About us</h1>
<h1 className="text-white lg:text-5xl md:text-4xl text-3xl font-medium leading-tight mt-6">Our Reputation Speaks for Itself</h1>
<p className="text-[#949494] mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim quo commodi culpa iste magnam libero laborum quaerat quae sequi, molestias soluta dolore pariatur aspernatur animi aperiam nobis saepe dicta.</p>
</div>
<div className="absolute bg-[#292929] p-1 hidden lg:block h-140 w-1/2 left-20 rotate-12 top-[-63]"></div>
<div className="flex h-133 lg:w-1/2 w-full ms-auto items-center overflow-hidden">
<iframe className="h-full w-full rounded rounded-l-none" src="https://www.youtube.com/embed/IPWX9UcvhgM" title="How to Create an eBook with AI to Sell Online 🔥" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>
          </div>
</div>
     )
}