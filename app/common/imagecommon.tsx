"use client"
import { GoLocation } from "react-icons/go";
import { IMageProps } from "./type";



const IMage = ({ header, pere, detail, time, location,headercss }: IMageProps) => {
  return (
    <div className="bg-[#2A356D] opacity-100 z-50">
      <div
        className="bg-gradient-image bg-[url(/bgimg.jpg)] bg-center flex justify-center items-end sm:pb-5 max-h-[450px] min-h-[350px] sm:h-[380px]"
      >
        <div className="text-center text-white sm:px-12 px-2">
          <h3 className={headercss}>{header}</h3>
          <p className="sm:mt-[20px] ">{pere}</p>
          <h4 className="sm:text-2xl  sm:mt-[20px]">{detail}</h4>
          <div className=" flex-none sm:flex   justify-items-center space-y-5 sm:space-y-0  sm:space-x-5">
            {time && (
              <p className="border-[#2A356D] mt-2 text-white">
                <span className="border px-5 py-2 rounded-full">{time}</span>
              </p>
            )}
            {location && (
              <p className="text-[12px] flex items-center gap-1">
                <GoLocation /> {location}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMage;