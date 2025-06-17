"use client"
import { useState } from "react"
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md"
import IMage from "../common/imagecommon"

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

const Contact = () => {
    const [form, setForm] = useState(initialState)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [loading, setLoading] = useState(false);
    const validate = () => {
        const newErrors: { [key: string]: string } = {}
        if (!form.name.trim()) newErrors.name = "Full Name is required"
        if (!form.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            newErrors.email = "Invalid email address"
        }
        if (!form.subject.trim()) newErrors.subject = "Subject is required"
        if (!form.message.trim()) newErrors.message = "Message is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validate()) {
            setLoading(true);
            const formData = new FormData()
            formData.append("name", form.name)
            formData.append("email", form.email)
            formData.append("message", form.message)
            formData.append("subject", form.subject)
            try {
                const res = await fetch("/api/sendMail", {
                    method: "POST",
                    body: formData,
                })
                const data = await res.json()
                if (data.success) {
                    alert("Message sent successfully!")
                    setForm(initialState)
                    setErrors({})
                    setLoading(false);
                } else {
                    alert("Failed to send email: " + (data.error || "Unknown error"))
                }
            } catch (err) {
                alert("An error occurred while sending the email.")
            }
        }
    }

    return (
        <>
            <div className="mt-[]">
                <IMage
                    header="Beware of Job Scams"
                    pere="We do not charge/accept any amount or security deposit from job seekers during the selection process or while inviting candidates for interview. We have a no-fee policy from job seekers which means that our recruiters/representatives will never seek money from job seekers"
                    detail=" For more details connect us:"
                    headercss="sm:text-3xl text-xl font-bold"
                />
            </div>
            <div className="max-w-[1250px] mx-auto py-12 px-[15px]  grid grid-cols-1 md:grid-cols-2 gap-10 ">
                {/* Contact Form */}
                <form className="space-y-5  lg:pr-[100px]" onSubmit={handleSubmit}>
                    <h2 className=" mb-[10px] text-xl ">Keep In Touch</h2>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                        />
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows={4}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="bg-[#466DA8] hover:bg-[white] hover:text-[#466DA8] text-white border border-[#466DA8] rounded-lg px-12 py-3 mt-2 transition-colors"
                        disabled={loading}
                    >
                        {loading ? (
                            <span>
                                <svg className="animate-spin h-5 w-5 mr-2 inline" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            "Send"
                        )}
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