import IMage from "../common/imagecommon"
import Servicdetail from "../common/servicdetail"


const Services = () => {
    return (
        <>
            <IMage header="Our Services" />
            <div className="py-[60px]">
                <h3 className="text-3xl font-semibold text-center">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-[1250px] mx-auto px-4">
                    {Servicdetail.map((service, idx) => (
                        <div
                            className="flex items-start gap-6 "
                            key={idx}
                        >
                            <div className="flex-shrink-0 flex items-center justify-center p-2 sm:w-20 sm:h-20 rounded-full border  text-4xl text-gray-400 hover:bg-[#466DA8] hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-[15px]  mb-2 text-black">{service.title}</h3>
                                {service.description && (
                                    <p className="text-[#888888] mb-2">{service.description}</p>
                                )}
                                {service.descriptions && (
                                    <ul className="list-disc list-inside text-[11px] space-y-1 text-gray-600">
                                        {service.descriptions.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services