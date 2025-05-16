'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
    {
        url: "/Over-Park-Looking-South-1-e1701199899800.webp",
        alt: "Over Park Looking South",
    },
    {
        url: "/Park_View-e1701199940631.webp",
        alt: "Park View",
    },
    {
        url: "/Crown-Towards-South-Beach_Stage-e1701878329321.webp",
        alt: "Crown Towards South Beach",
    },
    {
        url: "/Downtown_View_At_Night-e1701200125888.webp",
        alt: "Downtown View At Night",
    }
];

function FourthContent() {
    return (
        <div className="bg-grey-100">
            <section className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <p className="text-gray-500 text-xl uppercase tracking-wider">neighborhood</p>
                        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            At water's edge, with the best of Miami at your door
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                            With the best qualities of neighborhood and city, Miami Beach is a place where the list of cultural touchstones is myriad, culinary and entertainment options dazzle, and life is just a little more tantalizing. With exciting new projects and a vital approach to environmental preservation, the region continues to be a hub for what's next.
                        </p>
                        <button className="bg-black text-white border-2 border-black px-6 sm:px-8 py-3 sm:py-4 text-md sm:text-lg font-neue-plak-black hover:bg-white hover:text-black transition-colors">
                            SCHEDULE A VISIT
                        </button>
                    </div>
                    <div className="relative w-full">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="w-full"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative group overflow-hidden">
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button className="swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FourthContent;
