import React from "react";
import { FaSwimmingPool, FaHandsHelping, FaHouseUser, FaGlassMartini, FaPray, FaSun, FaUmbrellaBeach, FaTree } from "react-icons/fa";

const amenitiesContent = [
    {
        logo: <FaSwimmingPool className="text-4xl md:text-5xl text-black"/>,
        title: "Adult Pool with Wading Area",
        description: "Enjoy our luxurious adult pool featuring a convenient wading area for relaxation and comfort.",
    },
    {
        logo: <FaSwimmingPool className="text-4xl md:text-5xl text-black"/>,
        title: "Children & Family-Friendly pool",
        description: "A dedicated pool space designed for family enjoyment, providing a safe and fun environment for children.",
    },
    {
        logo: <FaHandsHelping className="text-4xl md:text-5xl text-black"/>,
        title: "Pool Attendants & Towel Service",
        description: "Full-service poolside experience with attentive staff and complimentary towel service for your convenience.",
    },
    {
        logo: <FaHouseUser className="text-4xl md:text-5xl text-black"/>,
        title: "Private Cabanas and Lounges",
        description: "Exclusive private cabanas and premium lounges available for ultimate comfort and privacy.",
    },
    {
        logo: <FaHouseUser className="text-4xl md:text-5xl text-black"/>,
        title: "Easy Connectivity",
        description: "Convenient access to South Pointe Park, the Baywalk, the Miami Beach Marina and the beach via the Daniel Buren-designed Miami Beach Canopy pedestrian bridge.",
    },
    {
        logo: <FaGlassMartini className="text-4xl md:text-5xl text-black"/>,
        title: "Pool Bar & Café",
        description: "Refreshing beverages and delicious bites available poolside at our convenient bar and café.",
    },
    {
        logo: <FaPray className="text-4xl md:text-5xl text-black"/>,
        title: "Yoga Meditation Deck",
        description: "Dedicated space for yoga and meditation, offering tranquility and wellness opportunities.",
    },
    {
        logo: <FaSun className="text-4xl md:text-5xl text-black"/>,
        title: "Sunset Terrace 3,500 SF",
        description: "Expansive 3,500 square foot terrace offering breathtaking sunset views in an elegant setting.",
    },
    {
        logo: <FaUmbrellaBeach className="text-4xl md:text-5xl text-black"/>,
        title: "Private Beach Club",
        description: "Exclusive access to our private beach club in Miami Beach with complimentary house beach car service.",
    },
    {
        logo: <FaTree className="text-4xl md:text-5xl text-black"/>,
        title: "Canopy Park Access",
        description: "The adjacent 3-acre Canopy Park features a MONSTRUM Playground, outdoor gym, picnic areas, dog park, shaded gardens, and art installations.",
    },
];

const AmenitiesContent = () => {
    return (
        <div className="bg-[#f8f8f8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-6 md:px-20 lg:px-32 xl:px-56 py-10">
            {amenitiesContent.map((item, index) => (
                <div key={index} className="flex flex-col justify-between items-center bg-[#ffffff] p-6 rounded-lg shadow-md">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="w-full h-20 flex justify-center items-center mb-4">
                            {item.logo}
                        </div>
                        <h3 className="text-xl md:text-2xl font-neue-plak-black uppercase mb-4">{item.title}</h3>
                        <p className="text-sm md:text-base text-[#b4b6bb] mb-4">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AmenitiesContent;
