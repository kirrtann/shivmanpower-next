"use client"
import { useState } from "react";
const Landingpage = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 p-2 flex items-center justify-center bg-black/75 min-h-screen">
      <div className="sm:p-4 p-2 bg-white rounded-2xl">
        <div className="bg-[#EDEFF7]  rounded-xl shadow-xl max-w-xl w-full p-4 sm:p-8 relative max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-2 text-gray-500 hover:text-red-500 text-3xl font-bold focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Shiv Manpower Services Office
          </h1>
          <h2 className="text-xl font-semibold mb-2">Beware of Job Scams</h2>
          <p className="text-gray-700 mb-6">
            We do not charge/accept any amount or security deposit from job seekers during the selection process or while inviting candidates for interview. We have a no-fee policy from job seekers which means that our recruiters/representatives will never seek money from job seekers
          </p>
          <h3 className="text-xl font-semibold mb-2">For more information call us:</h3>
          <div className="mb-2">
            <span className="font-bold">Call Us :</span>
          </div>
          <ul className="text-gray-800 space-y-1">
            <li>(O)+91 9714500484,</li>
            <li>(O)+91 9624237788,</li>
            <li>(O)+91 7265017788</li>
            <li>(O)+91 9327168885</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Landingpage