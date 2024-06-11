import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="w-[100%] border-t-[4px] border-t-[#605d5d]  py-[5px]">
        <div className="Hero-sec max-w-[1170px] h-[600px] md:h-auto grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 ">
          <div className="flex mx-auto items-center flex-col justify-center">
            <div className="font-serif font-bold text-[60px]">
              How work <br /> should work
            </div>
            <div className="text-xl pt-4 w-[385px]">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </div>
          </div>
          <div className="bg-white "></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
