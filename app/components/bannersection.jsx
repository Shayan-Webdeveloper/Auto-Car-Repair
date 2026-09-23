"use client";

import { useState } from "react";

const bannerImages = [
  "/banner-image1.jpg",
  "/banner-image2.png",
  "/banner-image3.jfif",
];

export default function Bannersection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat pt-20 ps-20 pe-20 text-white transition-[background-image] duration-500"
      style={{ backgroundImage: `url("${bannerImages[currentSlide]}")` }}
    >

    <div className="absolute left-6 right-6 top-20 h-100 w-auto border-l-2 border-red-600 md:left-20 md:right-20"></div>
    <div className="absolute left-6 right-6 top-46 mt-2 h-80 w-auto border-x-2 border-b-2 border-slate-600 md:left-20 md:right-20"></div>
    <div className="absolute w-auto top-11 right-17">
     <svg xmlns="http://www.w3.org/2000/svg"  className="w-7 cursor-pointer bg-gray-400 p-1.5 rounded-full" viewBox="0 0 640 640"><path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg"  className="w-7 cursor-pointer mt-2 bg-gray-400 p-1.5 rounded-full" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg"  className="w-7 cursor-pointer mt-2 bg-gray-400 p-1.5 rounded-full" viewBox="0 0 640 640"><path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg"  className="w-7 cursor-pointer mt-2 bg-gray-400 p-1.5 rounded-full" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
    </div>
      <h1 className="relative z-10 text-5xl ms-12" style={{fontWeight: "500"}}><span className="text-red-500">AutoWorks</span> - Drive</h1>
      <h1 className="relative z-10 text-5xl mt-3 ms-12" style={{fontWeight: "500"}}>with Confidence</h1>
    <p className="relative z-10 ms-12 mt-8 w-100 text-gray-500">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ipsam quas, expedita laborum provident dicta inventore officia cumque quibusdam qui neque debitis similique voluptas dolores id libero tempore eligendi voluptate.
</p>
<p className="relative z-10 ms-12 mt-20 flex items-center"><span className="border rounded-full border-red-600 p-1 flex justify-center me-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="red" className="w-6"><path className="text-red-500" d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg></span>See how we work</p>
<div className="flex justify-between align-items-center">

<p className="mt-20">
  {String(currentSlide + 1).padStart(2, "0")}/03
</p>
<div className="flex items-end justify-between px-4">
     {bannerImages.map((image, index) => (
       <button
         key={image}
         type="button"
         onClick={() => setCurrentSlide(index)}
         className="cursor-pointer p-1"
       >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={`w-7 ${currentSlide === index ? "fill-red-500" : "fill-gray-500"}`}>
           <path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
         </svg>
       </button>
     ))}
</div>
</div>

    </div>
  );
}
