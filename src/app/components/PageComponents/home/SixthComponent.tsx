'use client'

import React, { useState } from 'react';

interface ResidenceInfo {
    bedrooms: number;
    bathrooms: number;
    powderRooms?: number;
    privateTerraces?: number;
    interior: string;
    balcony?: string;
    total: string;
    floorPlanImage: string;
}

interface ResidenceDetails {
    residenceNumber: string;
    info: ResidenceInfo;
}

const residences: Record<string, ResidenceDetails> = {
    "Residence 1°": {
        residenceNumber: "1",
        info: {
            bedrooms: 3,
            bathrooms: 3,
            powderRooms: 1,
            privateTerraces: 1,
            interior: "2,178 SQ. FT. 202 SQ. M",
            balcony: "908 SQ. FT. 84 SQ. M.",
            total: "3,086 SQ. FT. 286 SQ. M.",
            floorPlanImage: "/Park-Residence-01_page-0001-e1701865478564.webp"
        }
    },
    "Residence 2°": {
        residenceNumber: "2",
        info: {
            bedrooms: 4,
            bathrooms: 4,
            powderRooms: 1,
            privateTerraces: 1,
            interior: "1,357 SQ. FT. 126 SQ. M.",
            balcony: "279 SQ. FT. 25 SQ. M.",
            total: "1,636 SQ. FT. 151 SQ. M.",
            floorPlanImage: "/Park-Residence-02_page-0001-e1701865658622.webp"
        }
    },
    "Residence 3°": {
        residenceNumber: "3",
        info: {
            bedrooms: 3,
            bathrooms: 4,
            privateTerraces: 0,
            interior: "2,335 SQ. FT. 217 SQ. M.",
            balcony: "679 SQ. FT. 63 SQ. M.",
            total: "3,014 SQ. FT. 280 SQ. M.",
            floorPlanImage: "/Park-Residence-03_page-0001-e1701865940463.webp"
        }
    },
    "Residence 4°": {
        residenceNumber: "4",
        info: {
            bedrooms: 1,
            bathrooms: 1,
            powderRooms: 1,
            privateTerraces: 0,
            interior: "1,000 SQ FT. 93 SQ. M.",
            balcony: "187 SQ. FT. 17 SQ. M.",
            total: "1,187 SQ. FT. 110 SQ. M.",
            floorPlanImage: "/Park-Residence-04_page-0001-e1701866198775.webp"
        }
    },
    "Residence 5°": {
        residenceNumber: "5",
        info: {
            bedrooms: 2,
            bathrooms: 2,
            powderRooms: 1,
            privateTerraces: 0,
            interior: "1,516 SQ FT. 140 SQ. M.",
            balcony: "818 SQ. FT. 76 SQ. M.",
            total: "2,334 SQ. FT. 216 SQ. M.",
            floorPlanImage: "/Park-Residence-05_page-0001-e1701866438935.webp"
        }
    },
    "Residence 6°": {
        residenceNumber: "6",
        info: {
            bedrooms: 1,
            bathrooms: 1,
            powderRooms: 1,
            privateTerraces: 1,
            interior: "1,010 SQ. FT. 94 SQ. M",
            balcony: "186 SQ. FT. 17 SQ. M.",
            total: "1,196 SQ. FT. 110 SQ. M.",
            floorPlanImage: "/Park-Residence-06_page-0001-e1701786766901.webp"
        }
    },
    "Residence 7°": {
        residenceNumber: "7",
        info: {
            bedrooms: 2,
            bathrooms: 2,
            powderRooms: 1,
            privateTerraces: 0,
            interior: "1,451 SQ. FT. 135 SQ. M",
            balcony: "448 SQ. FT. 41 SQ. M.",
            total: "1,899 SQ. FT. 176 SQ. M.",
            floorPlanImage: "/Park-Residence-07_page-0001-e1701864977791.webp"
        }
    },
    "Residence 8°": {
        residenceNumber: "8",
        info: {
            bedrooms: 1,
            bathrooms: 1,
            powderRooms: 1,
            privateTerraces: 0,
            interior: "878 SQ. FT. 82 SQ. M.",
            balcony: "231 SQ. FT. 21 SQ. M.",
            total: "1,109 SQ. FT. 103 SQ. M.",
            floorPlanImage: "/Park-Residence-08_page-0001-1-e1701866917809.webp"
        }
    }
};

function ResidenceDetails({ residenceName, details }: { residenceName: string; details: ResidenceDetails }) {
    const info = details.info;

    return (
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
                <div className="bg-white shadow-lg p-6">
                    <h3 className="text-3xl font-neue-plak-black mb-4">{residenceName}</h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <span className="text-2xl">Bedrooms</span>
                            <span className="text-xl font-semibold">{info.bedrooms}</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-2xl">Bathrooms</span>
                            <span className="text-xl font-semibold">{info.bathrooms}</span>
                        </li>
                        {info.powderRooms && (
                            <li className="flex justify-between items-center">
                                <span className="text-2xl">Powder Room</span>
                                <span className="text-xl font-semibold">{info.powderRooms}</span>
                            </li>
                        )}
                        {info.privateTerraces && info.privateTerraces > 0 && (
                            <li className="flex justify-between items-center">
                                <span className="text-2xl">Private Terrace</span>
                                <span className="text-xl font-semibold">{info.privateTerraces}</span>
                            </li>
                        )}
                        <li className="flex justify-between items-center">
                            <span className="text-2xl">Interior</span>
                            <span className="text-xl font-semibold">{info.interior}</span>
                        </li>
                        {info.balcony && (
                            <li className="flex justify-between items-center">
                                <span className="text-2xl">Balcony</span>
                                <span className="text-xl font-semibold">{info.balcony}</span>
                            </li>
                        )}
                        <li className="flex justify-between items-center">
                            <span className="text-2xl">Total</span>
                            <span className="text-xl font-semibold">{info.total}</span>
                        </li>
                    </ul>
                    <button className="text-xl font-neue-plak-black w-full mt-6 px-6 py-3 bg-black border-2 border-black text-white hover:bg-white hover:text-black transition-colors duration-300">
                        SCHEDULE A VISIT
                    </button>
                </div>
            </div>
            <div className="text-2xl w-full md:w-2/3">
                <img
                    src={info.floorPlanImage}
                    alt={`Floor Plan for ${residenceName}`}
                    className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
            </div>
        </div>
    );
}

function SixthComponent() {
    const [activeResidence, setActiveResidence] = useState<string>(Object.keys(residences)[0]);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-gray-800 mb-2">FLOOR PLANS</h2>
                </div>
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {Object.keys(residences).map((residenceName) => (
                            <button
                                key={residenceName}
                                onClick={() => setActiveResidence(residenceName)}
                                className={`px-6 py-3 font-medium transition-colors duration-300 ${activeResidence === residenceName
                                    ? 'bg-white border-2 border-black text-3xl text-black font-bold'
                                    : 'bg-black text-3xl text-white hover:bg-white hover:text-black hover:border-2 hover:border-black'
                                    }`}
                            >
                                {residenceName}
                            </button>
                        ))}
                    </div>
                </div>

                <ResidenceDetails
                    residenceName={activeResidence}
                    details={residences[activeResidence]}
                />
            </div>
        </div>
    );
}

export default SixthComponent;
