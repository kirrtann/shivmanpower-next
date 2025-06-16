"use client"
import { PiBriefcaseMetalLight } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import Servicdetail from "./common/servicdetail";
import Link from "next/link";
import ApplyNowModal from "./common/applyfrom";
import { Jobdeatil } from "./common/jobdetail";
import TestimonialSection from "./common/ownwecard";

export default function Home() {
    const [openApply, setOpenApply] = useState(false);
  const slideimg = [
    { img: '/slide-1.png', alt: 'Car Image' },
    { img: '/slide-2.png', alt: 'Civil Image' }
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slideimg.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slideimg.length - 1 ? 0 : prev + 1));
  return (
    <>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden mt-20">
        <img
          src={slideimg[current].img}
          alt={slideimg[current].alt}
          className="w-full h-full object-cover opacity-80 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
          <h3 className="sm:text-4xl font-bold mb-2 drop-shadow-lg">Find the career you deserve</h3>
          <p className="sm:text-lg text-[12px] drop-shadow-lg">Your job search starts and ends with us.</p>
        </div>

        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-2xl z-10 pointer-events-auto"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-2xl z-10 pointer-events-auto"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
        <div className="absolute bottom-0 hidden  border p-5 rounded-full sm:block left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about-shiv-manpower');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white border border-white   text-[#466DA8] rounded-full p-3 shadow-lg transition"
            aria-label="Scroll Down"
          >
            <HiArrowDown size={26} />
          </button>
        </div>
      </div>
      <div id="about-shiv-manpower" className="max-w-[1250px] sm:py-16 py-5 px-1  mx-auto text-center">
        <div className="">
          <h3 className="text-3xl  mb-5 font-bold">About Shiv Manpower</h3>
          <p className="text-[#888888] text-[15px]">
            Shiv Manpower Services is registered firm under the “The Ministry of Micro, Small and Medium Enterprises” a branch of the Government of India. Shiv Manpower Services is a group of expertise, which is self-motivated, dynamic & qualified professionals working towards a common goal "Customer Satifaction". We render basic services of human resources development. It has been reiable resource fuelling for companies with competent reliable prospects. The team comprises of quality Manpower like graduates. Post graduates, Engineers & MBAs from reputed institutes & experience persons from well-known companies.
          </p>
        </div>
      </div>
      <div className="sm:py-28  py-5 mt-10 bg-[#f4f5fa]  text-center min-h-[400px]">
        <h3 className="text-3xl font-bold mb-10">Our Best Services</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {Servicdetail.filter((_, idx) => idx !== 2).slice(0, 4).map((service, idx) => (
            <Link
              href="/services"
              key={idx}
              className="w-[260px] h-[180px] bg-white rounded-lg flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-5xl mb-4 text-[#6c7685]">{service.icon}</div>
              <div className="text-lg font-medium text-[#222]">{service.title}</div>
            </Link>
          ))}
        </div>
         <Link
              href="/services" className="mt-2 px-8 py-3 border-2 border-[#466DA8] text-[#222] rounded-lg hover:bg-[#466DA8] hover:text-white transition font-medium text-base">
          View More <span className="inline-block ml-2">&#8250;</span>
        </Link>
      </div>
      <div className="bg-home-image relative overflow-hidden w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center text-white text-center">
          <h3 className="text-4xl font-bold mb-4 tracking-wide">EXPERTS ARE BEHIND YOU!</h3>
          <p className="text-lg mb-8">
            Fresher Or Experienced Candidates We Offer Energizing And Challenging Career Opportunity.
          </p>
          <button
            className="px-8 py-3 border-2 border-white rounded-lg text-white font-medium text-lg hover:bg-white hover:text-[#466DA8] transition"
            onClick={() => setOpenApply(true)}
          >
            Apply For Job
          </button>
        </div>
        {/* Fullscreen modal */}
        {openApply && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
            <ApplyNowModal open={openApply} onClose={() => setOpenApply(false)} />
          </div>
        )}
      </div>
      <div className="max-w-[1250px] mx-auto my-16 px-1">
        <h3 className="text-3xl font-bold mb-10 text-center">Latest Jobs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
          {Jobdeatil.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md p-6 sm:flex items-center justify-between gap-6 border hover:shadow-lg transition"
            >
              <div className="flex items-center gap-6 flex-1 mb-3">
                <img
                  src={`/${job.img}`}
                  alt={job.Job}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h4 className="text-lg font-semibold mb-1">{job.Job}</h4>
                  <div className="text-[#466DA8] text-sm font-medium mb-1 cursor-pointer ">
                    {job.department || job.JobProfile?.JobProfile}
                  </div>
                  <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1">
                      <PiBriefcaseMetalLight />
                      {job.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <GoLocation />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href={`/job/${job.id}`}
                className="px-6 py-2 bg-[#466DA8] text-white rounded-lg hover:bg-[#2A356D] transition font-medium"
              >
                View more
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/job"
            className="px-8 py-3 border-2 border-[#466DA8] text-[#222] rounded-lg hover:bg-[#466DA8] hover:text-white transition font-medium text-base flex items-center gap-2"
          >
            View More Jobs <span className="inline-block">&#8250;</span>
          </Link>
        </div>
      </div>
      <div className="bg-image-fb py-8 ">
        <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center gap-3 ">
          <div className="flex flex-col items-center w-full max-w-sm mx-auto">
            <h2 className="text-3xl text-white font-semibold mb-6 text-center">Facebook Feed</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full flex justify-center">
              <iframe
                title="Facebook Page Plugin"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShivmanpowerservices%2F&tabs=timeline&width=340&height=350&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="350"
                className="border-none overflow-hidden"
                allowFullScreen={true}
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
            <TestimonialSection />
          </div>
        </div>
      </div>
    </>
  );
}
