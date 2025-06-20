import IMage from "../common/imagecommon"
import Servicdetail from "../common/servicdetail"


const Services = () => {
    return (
        <>
            <IMage header="Our Services"
                headercss="text-3xl font-bold mb-5" />
            <div className="py-[60px] max-w-[1250px] mx-auto px-4">
                <h3 className="text-3xl font-semibold text-center">Our Services</h3>
                <div className="sm:grid sm:grid-cols-1  gap-16 py-8 sm:max-w-[800px] mx-auto px-4">
                    {Servicdetail.map((service, idx) => (
                        <div
                            className={`flex flex-col sm:flex-row ${idx % 2 === 1 ? 'sm:flex-row-reverse' : ''} items-center gap-6 group transition-colors duration-300`}
                            key={idx}
                        >
                            <div className="flex-shrink-0 sm:w-96 sm:h-80 w-72 h-40 overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="max-w-[360px]">
                                <h3 className="text-[16px] mb-2 font-semibold text-black">{service.title}</h3>
                                {service.description && (
                                    <p className="text-black/70 text-[16px] leading-6 mb-2">{service.description}</p>
                                )}
                                {service.descriptions && (
                                    <ul className="list-disc list-inside text-[15px] space-y-1 text-black/70">
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