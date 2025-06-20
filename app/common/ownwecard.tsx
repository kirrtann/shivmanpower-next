"use client"
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Chintan Shah",
        position: "GM Service, Automobile Dealer.",
        text: "Shiv manpower is not a consultancy. It’s a fantastic organisation which helps you every stage of your career. It’s like forever friendship",
        img: "test-2.png",
    },
    {
        name: "Nikul Vaishnav",
        position: "Sales Manager, Automobile Dealer.",
        text: "Shiv manpower is not a consultancy. It’s a fantastic organisation which helps you every stage of your career. It’s like forever friendship",
        img: "test-1.png",
    },
];

const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
       <div className="pt-20 pb-8 flex flex-col items-center justify-center w-full">
            <h2 className="text-3xl text-white font-bold mb-2 text-center">
                Happyness Candidates Say's
            </h2>
            <p className="text-white text-center mb-8">
                What other people thought about the service provided by Shiv Manpower
            </p>
            <div className="relative w-full mt-20 max-w-4xl flex flex-col items-center">
                <div className="absolute -top-16 left-24 -translate-x-1/2 z-10">
                    <img
                        src={testimonials[current].img}
                        alt={testimonials[current].name}
                        className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
                    />
                </div>
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="w-full flex-shrink-0 px-2 flex flex-col items-center">
                                <div className="bg-white rounded-xl shadow-lg p-8 pt-16 w-full flex flex-col justify-between min-h-[220px]">
                                    <div className="flex justify-end text-4xl text-[#424dc1] mb-2">
                                        <span>&rdquo;</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2 font-semibold">
                                        <span className="font-semibold text-lg">{testimonial.name}</span>
                                        <span className="ml-2 text-[15px] text-gray-500">{testimonial.position}</span>
                                    </div>
                                    <div className="text-gray-600 text-sm font-semibold">{testimonial.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2 mt-6 justify-center">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-4 h-4 rounded-full border-2 p-1 border-white ${idx === current ? "bg-[#424dc1]" : "bg-white"} transition`}
                            onClick={() => setCurrent(idx)}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;