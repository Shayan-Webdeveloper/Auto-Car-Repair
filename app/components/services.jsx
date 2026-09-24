'use client'
import Image from "next/image";
export default function Services() {
     return(
     <div className="bg-[#222222] pb-10">
          <h1 className="text-red-500 uppercase text-md tracking-[3] text-center">What we offer</h1>
          <h1 className="text-white text-5xl text-center mt-4">Our Services</h1>
          <div className="mt-10 grid grid-cols-5 pt-10">
               <div className="relative aspect-2/3 overflow-hidden img-card cursor-pointer hover:scale-110 hover:p-5 hover:ps-7 hover:pb-15 hover:z-20 hover:rounded-2xl bg-red-500 transition-all duration-500">
                    <Image
                         src="/repairing-image1.jfif"
                         alt="Auto Works"
                         width={400}
                         height={100}
                         className="object-cover w-full h-full object-center"
                    />
                    <p className="learnmore text-center text-white mt-2">Learn More</p>
               </div>
               <div className="relative aspect-2/3 overflow-hidden img-card cursor-pointer hover:scale-110 hover:p-5 hover:pb-15 hover:z-20 hover:rounded-2xl bg-red-500 transition-all duration-500">
                    <Image
                         src="/repairing-image2.jfif"
                         alt="Auto Works"
                         width={400}
                         height={100}
                         className="object-cover w-full h-full object-center"
                    />
                    <p className="learnmore text-center text-white mt-2">Learn More</p>
               </div>
              <div className="relative aspect-2/3 overflow-hidden img-card cursor-pointer hover:scale-110 hover:p-5 hover:pb-15 hover:z-20 hover:rounded-2xl bg-red-500 transition-all duration-500">
                    <Image
                         src="/repairing-image3.jfif"
                         alt="Auto Works"
                         width={400}
                         height={100}
                         className="object-cover w-full h-full object-center"
                    />
                    <p className="learnmore text-center text-white mt-2">Learn More</p>
               </div>
               <div className="relative aspect-2/3 overflow-hidden img-card cursor-pointer hover:scale-110 hover:p-5 hover:pb-15 hover:z-20 hover:rounded-2xl bg-red-500 transition-all duration-500">
                    <Image
                         src="/repairing-image4.jfif"
                         alt="Auto Works"
                         width={400}
                         height={100}
                         className="object-cover w-full h-full object-center"
                    />
                    <p className="learnmore text-center text-white mt-2">Learn More</p>
               </div>
               <div className="relative aspect-2/3 overflow-hidden img-card cursor-pointer hover:scale-110 hover:p-7 hover:pb-15 hover:z-20 hover:rounded-2xl bg-red-500 transition-all duration-500">
                    <Image
                         src="/repairing-image5.jfif"
                         alt="Auto Works"
                         width={400}
                         height={100}
                         className="object-cover w-full h-full object-center"
                    />
                    <p className="learnmore text-center text-white mt-2">Learn More</p>
               </div>
          </div>
     </div>
)
}