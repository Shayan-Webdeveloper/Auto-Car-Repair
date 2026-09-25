     'use client'

     export default function Newsletter() {
     return (
     <div className="relative z-20 mx-auto -mt-60 w-[90%] max-w-6xl rounded-2xl bg-red-500">
               <div className="w-full items-stretch ">
          <div className="flex lg:flex-row flex-col relative rounded overflow-hidden">

<div className="flex lg:w-1/2 w-full items-center overflow-hidden">
<img src="/repairing-image1.jfif" className="h-full w-full rounded rounded-r-none" alt="" />
</div>
<div className="absolute bg-red-500 p-1 hidden lg:block h-160 w-1/2 left-129 rotate-10"></div>
{/* <div className="absolute hidden h-160 w-1/2 rotate-10 border-l-4 border-transparent p-1 lg:left-123 lg:block [border-image:linear-gradient(to_bottom,#ff0000,#ef4444,#fff)_1]"></div> */}
<div className="absolute hidden h-160 w-1/2 rotate-10 border-l-4 border-transparent p-1 lg:left-123 lg:block [border-image:linear-gradient(to_bottom,#ff0000,#ef4444,transparent,transparent)_1]"></div>
<div className="relative z-10 bg-red-500 rounded-l-none rounded lg:px-8 md:px-8 lg:py-20 md:py-20 py-10 lg:w-1/2 w-full">
<h1 className="text-white lg:text-4xl md:text-3xl text-2xl font-medium leading-tight mt-6">Subscribe to Our Newsletter</h1>
<p className="text-white mt-7">Lorem ipsum  molestias soluta dolore pariatur aspernatur animi aperiam nobis saepe dicta.</p>
<input type="email" className="text-white border p-4 rounded-3xl mt-4 w-full block" placeholder="Email Address" />
<button className="text-black bg-white cursor-pointer p-4 rounded-3xl px-12 mt-5">Submit</button>
</div>

          </div>
</div>
     </div>
     );
     }
