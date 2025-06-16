"use client"
import { MdOutlineCurrencyRupee, MdOutlineEmail, MdOutlineShield } from "react-icons/md"

import { HiOutlineAcademicCap } from "react-icons/hi2"

import IMage from "./imagecommon"
import { LiaThumbtackSolid, LiaUnlinkSolid } from "react-icons/lia"
import { BsTelephone } from "react-icons/bs"
import { useState } from "react"
import ApplyNowModal from "./applyfrom"
import { jobtype } from "./type"


const iconClass = "text-2xl text-blue-700";

const JobDetailCommon = ({ job }: { job: jobtype | undefined }) => {
    const [openApply, setOpenApply] = useState(false);
    if (!job) return <div className="text-center py-20">Job not found.</div>;
    return (
        <>
            <IMage
                header={job.Job}
                time={job.time}
                location={job.location} />

            <div className="max-w-7xl mx-auto px-4 md:px-8  flex flex-col lg:flex-row gap-8 py-14">
                <div className="flex-1 bg-white  rounded-xl px-4">
                    <div className="flex items-center gap-4 mb-6 border-b pb-5">
                        <img src={`/${job.img}`} alt={job.Job} className="w-20 h-20 object-contain rounded-md border" />
                        <div>
                            <h2 className="text-2xl ">{job.Job}</h2>
                            <div className="text-gray-500 text-sm">{job.location}</div>
                            <div className="lg:flex  items-center gap-5 mt-1 text-gray-500 text-sm">
                                <p className="flex items-center gap-1">
                                    <span className="text-xl"><LiaUnlinkSolid /></span>
                                    <a href={`https://${job.contact?.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{job.contact?.website}</a>
                                </p>
                                <p className="flex items-center gap-1">

                                    <span><BsTelephone /></span>
                                    <span>{job.contact?.phone}</span>
                                </p>
                                <p className="flex items-center gap-1">

                                    <span><MdOutlineEmail /></span>
                                    <span>{job.contact?.email}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Profile */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-1">{job.profile?.type}</h3>
                        <p className="text-gray-600 text-sm">{job.profile?.profiledecription}</p>
                    </div>
                    {/* Job Description */}
                    <div>
                        <h3 className="font-semibold mb-2">{job?.JobProfile?.JobProfile}</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:leading-8 leading-7">
                            {job.description?.map((desc: string, idx: number) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Right: Overview */}
                <div className="w-full lg:w-[320px]">
                    <button className="w-full mb-6 py-3 border-2 border-blue-700 rounded-lg text-blue-700 font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition" onClick={() => setOpenApply(true)}>

                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2"><path d="M2 12l8 8 8-8M2 12V4a2 2 0 012-2h12a2 2 0 012 2v8M2 12h16"></path></svg>
                        Apply for job
                    </button>
                    {openApply && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
                            <ApplyNowModal open={openApply} onClose={() => setOpenApply(false)} />
                        </div>
                    )}
                    <h3 className="text-xl mb-2">Job Overview</h3>
                    <div className="bg-white text-[13px] rounded-xl shadow border p-6 space-y-6">
                        <div className="flex items-center gap-3">
                            <MdOutlineCurrencyRupee className={iconClass} />
                            <div>
                                <div className=" text-[#1E1E1E]">Salary</div>
                                <div className="text-[#888888] ">{job.overview?.salary}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <LiaThumbtackSolid className={iconClass} />
                            <div>
                                <div className="text-[#1E1E1E]">Career Level</div>
                                <div className="text-gray-500 ">{job.overview?.careerLevel}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdOutlineShield className={iconClass} />
                            <div>
                                <div className="text-[#1E1E1E]">Experience</div>
                                <div className="text-[#888888]">{job.overview?.experience}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>

                                <HiOutlineAcademicCap className={iconClass} />
                            </div>
                            <div>
                                <div className="text-[#1E1E1E]">Qualification</div>
                                <div className="text-[#888888]">{job.overview?.qualification}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default JobDetailCommon;