'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const residenceImages = [
    "/Res03_Master_Bedroom-1-scaled-e1701201298161.webp",
    "/Res04-Master-Bedroom-scaled-e1701201326330.webp",
    "/Res04_Living-Room-scaled-e1701201355933.webp",
    "/Res05_LivingRoom-scaled-e1701201380838.webp",
    "/Res05_Master_Bedroom-scaled-e1701201404356.webp",
    "/Residence-01-Living_Vignette02-scaled-e1701201426996.webp"
];

const kitchenImages = [
    "/Res01-Kitchen_Vignette-scaled-e1701878437814.webp",
    "/Res01_Kitchen-1-copy-scaled-e1701201662162.webp",
    "/Res01_Kitchen-1-scaled-e1701201708374.webp"
];

const bedroomImages = [
    "/Res01_Living_Vignette-scaled-e1701202222327.webp",
    "/Res01_LivingRoom_View-2-scaled-e1701202027930.webp",
    "/Res01_Master_Bathroom_HighAngle-1-scaled-e1701878380888.webp",
    "/PurpleBar-e1701201880192.webp"
];

const residenceFeatures = [
    "Private elevator doors open to welcome you home",
    "Lofty 10-foot ceilings create an expansive feel",
    "Oversized balconies bring the outside in",
    "Floor-to-ceiling windows with unobstructed views",
    "Open floor plans designed to maximize views",
    "Professional-grade appliances and Italian cabinetry"
];

const bedroomFeatures = [
    "Master bathrooms custom designed by Gabellini Sheppard",
    "Italian-made vanities for elegant design",
    "Textured glass shower doors for privacy",
    "Select units include luxurious wet rooms",
    "Meticulously planned with resident's needs in mind",
    "Exceptional finishes and attention to detail"
];

function FifthContent() {
    return (
        <div className="bg-white w-full">
            {/* First Section - Residences */}
            <section className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-[600px] lg:h-screen relative">
                        <Swiper
                            modules={[Autoplay, EffectFade, Pagination]}
                            effect="fade"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {residenceImages.map((image, index) => (
                                <SwiperSlide key={`residence-${index}`}>
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image})` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 uppercase tracking-wider">
                            UNRIVALED RESIDENCES
                        </h2>
                        <p className="text-xl lg:text-4xl mb-10 text-gray-600 uppercase">
                            AS YOUR PRIVATE ELEVATOR DOORS OPEN, YOU KNOW YOU'VE OFFICIALLY ARRIVED.
                            LOFTY 10-FOOT CEILINGS AND OVERSIZED BALCONIES WELCOME YOU HOME AND
                            BRING THE OUTSIDE IN
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Great Room</h3>
                        <div className="mb-12">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className="h-64 w-full mb-6 rounded-lg overflow-hidden"
                            >
                                {kitchenImages.map((image, index) => (
                                    <SwiperSlide key={`kitchen-${index}`}>
                                        <div
                                            className="h-full w-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${image})` }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section - Bedrooms */}
            <section className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-16 flex flex-col justify-center bg-white order-2 lg:order-1">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 uppercase tracking-wider">
                            BEDROOMS
                        </h2>
                        <p className="text-xl lg:text-4xl mb-10 text-gray-600">
                            Master bathrooms custom designed by Gabellini Sheppard evoke a mood of elegance and indulgence.
                            Sporting Italian-made vanities, textured glass shower doors, and — in select units — wet rooms,
                            bathrooms are meticulously planned with a resident's needs in mind.
                        </p>

                        <ul className="text-2xl list-disc pl-5 space-y-4 text-gray-600 mb-8">
                            {bedroomFeatures.map((feature, index) => (
                                <li key={index} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="h-[600px] lg:h-full relative order-1 lg:order-2">
                        <Swiper
                            modules={[Autoplay, EffectFade, Pagination]}
                            effect="fade"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {bedroomImages.map((image, index) => (
                                <SwiperSlide key={`bedroom-${index}`}>
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image})` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FifthContent;
