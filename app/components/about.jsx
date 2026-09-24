export default function About() {
     return(
     <div className="w-full items-stretch bg-[#222222] p-25">
          <div className="flex bg-[#292929] relative rounded overflow-hidden">

<div className="relative z-10 bg-[#292929] rounded p-20 py-30 w-1/2">
<h1 className="uppercase text-red-500 tracking-[4] font-medium text-xl">About us</h1>
<h1 className="text-white text-5xl font-medium leading-tight mt-6">Our Reputation Speaks for Itself</h1>
<p className="text-[#949494]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, enim quo commodi culpa iste magnam libero laborum quaerat quae sequi, molestias soluta dolore pariatur aspernatur animi aperiam nobis saepe dicta.</p>
</div>
<div className="absolute bg-[#292929] p-1 h-140 w-1/2 left-20 rotate-12 top-[-63]"></div>
<div className="flex h-133 w-1/2 ms-auto items-center overflow-hidden">
<iframe className="h-full w-full rounded rounded-l-none" src="https://www.youtube.com/embed/IPWX9UcvhgM" title="How to Create an eBook with AI to Sell Online 🔥" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>
          </div>
</div>
     )
}