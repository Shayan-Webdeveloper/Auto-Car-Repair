'use client'
import Image from "next/image";
export default function Choose() {
     return(
     <div className="mt-25 lg:ms-30 ms-0 ">
          <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-left text-center text-white">
Why Choose Us?
          </h1>
          <p className="text-red-500 lg:text-2xl text-xl lg:text-left text-center mt-4">We're here for whatever you need</p>
          <div className="flex flex-col lg:flex-row mt-15">
               <div className="rounded lg:w-1/2 w-full overflow-hidden border ">
                    <Image
                         src="/choosing.jfif"
                         alt="Auto Works"
                         width={800}
                         height={100}
                         className="w-full h-full"
                    />
               </div>
               <div className="flex lg:w-1/2 w-full flex-col mt-9 lg:mt-0 gap-4 [&>div>div:first-child]:flex [&>div>div:first-child]:size-14 [&>div>div:first-child]:shrink-0 [&>div>div:first-child]:items-center [&>div>div:first-child]:justify-center">
                    <div className="flex items-center gap-6 px-10">
                         <div className="rounded-full p-3 bg-red-600 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 640 640"><path fill="white" d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z"/></svg>
                              </div>
                         <div>
                              <h2 className="text-white text-2xl font-medium">Competetive Pricing</h2>
                              <p className="w-full my-4 text-[#909090]">Lorem ipsum dolor sit amet consectet ullam ipsam error reiciendis consectetur ratione animi earum tem</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-6 bg-[#292929] w-full px-10 py-4">
                         <div className="rounded-full p-3 bg-red-600 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 640 640"><path fill='white' d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z"/></svg>                       </div>
                         <div>
                              <h2 className="text-white text-2xl font-medium ">Competetive Pricing</h2>
                              <p className="w-full my-4 text-white">Lorem ipsum dolor sit amet consectet ullam ipsam error reiciendis consectetur ratione animi earum tem</p>

                         </div>
                    </div>
                    <div className="flex items-center gap-6 px-10">
                         <div className="bg-red-600 text-white p-3 rounded-full"><svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill='white' d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg></div>
                         <div>
                              <h2 className="text-white text-2xl font-medium ">Competetive Pricing</h2>
                              <p className="w-full my-4 text-white">Lorem ipsum dolor sit amet consectet ullam ipsam error reiciendis consectetur ratione animi earum tem</p>

                         </div>
                    </div>
                    <div className="flex items-center gap-6 px-10">
                         <div className="bg-red-600 text-white p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 640 640"><path fill='white' d="M192 96C156.7 96 128 124.7 128 160L128 384C128 419.3 156.7 448 192 448L544 448C579.3 448 608 419.3 608 384L608 160C608 124.7 579.3 96 544 96L192 96zM368 192C412.2 192 448 227.8 448 272C448 316.2 412.2 352 368 352C323.8 352 288 316.2 288 272C288 227.8 323.8 192 368 192zM192 216L192 168C192 163.6 195.6 160 200 160L248 160C252.4 160 256.1 163.6 255.5 168C251.9 197 228.9 219.9 200 223.5C195.6 224 192 220.4 192 216zM192 328C192 323.6 195.6 319.9 200 320.5C229 324.1 251.9 347.1 255.5 376C256 380.4 252.4 384 248 384L200 384C195.6 384 192 380.4 192 376L192 328zM536 223.5C507 219.9 484.1 196.9 480.5 168C480 163.6 483.6 160 488 160L536 160C540.4 160 544 163.6 544 168L544 216C544 220.4 540.4 224.1 536 223.5zM544 328L544 376C544 380.4 540.4 384 536 384L488 384C483.6 384 479.9 380.4 480.5 376C484.1 347 507.1 324.1 536 320.5C540.4 320 544 323.6 544 328zM80 216C80 202.7 69.3 192 56 192C42.7 192 32 202.7 32 216L32 480C32 515.3 60.7 544 96 544L488 544C501.3 544 512 533.3 512 520C512 506.7 501.3 496 488 496L96 496C87.2 496 80 488.8 80 480L80 216z"/></svg></div>
                         <div>
                              <h2 className="text-white text-2xl font-medium ">Competetive Pricing</h2>
                              <p className="w-full my-4 text-white">Lorem ipsum dolor sit amet consectet ullam ipsam error reiciendis consectetur ratione animi earum tem</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
)
}