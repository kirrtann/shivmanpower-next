"use client"
import { GoLocation } from "react-icons/go";
import { IMageProps } from "./type";



const IMage = ({ header, pere, detail, time, location }: IMageProps) => {
  return (
    <div className="bg-[#2A356D] opacity-100 z-50">
      <div
        className="bg-gradient-image  bg-cover flex justify-center items-end pb-5 h-[340px]"
      >
        <div className="text-center text-white px-12">
          <h3 className="text-3xl mb-[30px] font-bold">{header}</h3>
          <p className="mt-[20px] ">{pere}</p>
          <h4 className="text-2xl  mt-[20px]">{detail}</h4>
          <div className=" flex-none sm:flex   justify-items-start space-y-5 sm:space-y-0 items-center  sm:space-x-5">
            {time && (
              <p className="border-[#2A356D] text-white">
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