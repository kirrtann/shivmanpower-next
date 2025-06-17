import { PiBriefcaseMetalLight } from "react-icons/pi"


import { GoLocation } from "react-icons/go"

import Link from "next/link"
import IMage from "../common/imagecommon"
import { Jobdeatil } from "../common/jobdetail"

const Job = () => {
  return (
    <>
      <div>
        <IMage header="Job Openings"
        headercss="text-3xl font-bold mb-5" />
      </div>
      <div className=" px-2 md:px-0 py-[60px]">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Jobs</h2>
        <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Jobdeatil.map(job => (
            <Link 
            href={`/jobdeailpage/${job.id}`}
             prefetch={true} 
              key={job.id}
              className="flex items-center bg-white rounded-xl shadow border border-gray-100 p-6 gap-6 hover:shadow-lg transition-shadow"
            >
              <img
                src={job.img}
                alt={job.Job}
                className="w-20 h-20 object-contain rounded-md border"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">{job.Job}</h3>
                <p className="text-blue-600 text-sm  font-medium block mb-2">
                  {job.department}
                </p>
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
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Job