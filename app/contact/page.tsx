
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md"
import IMage from "../common/imagecommon"

const Contact = () => {
    return (
        <>
            <div className="mt-[]">
                <IMage
                    header="Beware of Job Scams"
                    pere="We do not charge/accept any amount or security deposit from job seekers during the selection process or while inviting candidates for interview. We have a no-fee policy from job seekers which means that our recruiters/representatives will never seek money from job seekers"
                    detail=" For more details connect us:"
                />
            </div>
            <div className="max-w-[1250px] mx-auto py-12 px-[15px]  grid grid-cols-1 md:grid-cols-2 gap-10 ">
                {/* Contact Form */}
                <form className="space-y-5 lg:pr-[100px]">
                    <h2 className=" mb-[-10px] text-xl ">Keep In Touch</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                    />
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                    />
                    <button
                        type="submit"
                        className="bg-[#466DA8] hover:bg-[white] hover:text-[#466DA8] text-white border border-[#466DA8] rounded-lg px-12 py-3 mt-2 transition-colors"
                    >
                        Send
                    </button>
                </form>
                <div className="bg-[#EDEFF7] text-[#888888] rounded-xl justify-center sm:p-8 p-4 flex flex-col text-[13px] ">
                    <h2 className="text-xl font-medium text-black mb-4">Shiv Manpower Services Office</h2>
                    <div className="flex items-center gap-3 mb-4">
                        <MdLocationOn className="sm:text-4xl text-2xl text-[#7a8493]" />
                        <div className="w-[300px]">
                            <span className="font-semibold">Address:</span> 702- 7th Floor Dynasty, B/S. Pintoo Garments, Nr. Navarangpura Stadium Circle, CG Road, Ahmedabad - 380009
                        </div>
                    </div>
                    <div className="flex items-start gap-3 mb-4">
                        <MdCall className="sm:text-4xl text-3xl text-[#7a8493]" />
                        <div>
                            <span className="font-semibold">Call Us :</span><br />
                            (O)+91 9714500484,<br />
                            (O)+91 9624237788,<br />
                            (O)+91 7265017788<br />
                            (O)+91 9327168885
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdEmail className="sm:text-3xl text-2xl text-[#7a8493]" />
                        <div>
                            <span className="font-semibold">Email :</span> jayesh@shivmanpower.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-12 max-w-[1250px]  mx-auto px-2 md:px-0">
                <h2 className="text-xl font-semibold mb-4">Get In Touch With Us</h2>
                <div className="h-[500px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.348536431173!2d72.54450318715817!3d23.038926700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f44a8bffff%3A0x9085b431c5186024!2sShiv%20Manpower%20Services!5e0!3m2!1sen!2sin!4v1749792315927!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact