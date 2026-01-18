"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1,
        name: "Rahat Karim",
        role: "Parent",
        image: "https://i.pravatar.cc/150?u=1",
        review: "The newborn specialist we found through CareBridge was a lifesaver. Compassionate and highly professional.",
        rating: 5
    },
    {
        id: 2,
        name: "Farhana Ahmed",
        role: "Daughter",
        image: "https://i.pravatar.cc/150?u=2",
        review: "Finding a reliable elderly caregiver was so stressful until I used this platform. Highly recommended!",
        rating: 5
    },
    {
        id: 3,
        name: "Tanvir Hossain",
        role: "Patient",
        image: "https://i.pravatar.cc/150?u=3",
        review: "Post-surgery recovery was much smoother thanks to the physical therapy support I received at home.",
        rating: 4
    },
    {
        id: 4,
        name: "Nabila Sayed",
        role: "Mother",
        image: "https://i.pravatar.cc/150?u=4",
        review: "The pediatric care here is top-notch. My kids felt so comfortable with the caregiver from day one.",
        rating: 5
    },
    
];
const Testimonials = () => {
    return (
        <section className="bg-base-100 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                        Family Stories
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-neutral">
                        What Our <span className="text-primary">Clients</span> Say
                    </h3>
                </div>

                <Swiper
                    loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={
                {
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="mySwiper"
                >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id} className="max-w-[350px] md:max-w-[450px]">
                            <div className="bg-base-200 p-8 md:p-10 rounded-[3rem] border border-base-300 relative shadow-xl">
                                {/* Quote Icon */}
                                <div className="absolute -top-5 -left-2 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-base-100 shadow-lg shadow-primary/30">
                                    <Quote size={24} fill="currentColor" />
                                </div>

                                {/* Review Content */}
                                <p className="text-neutral/70 text-lg italic leading-relaxed mb-8 pt-4">
                                    "{item.review}"
                                </p>

                                {/* User Info Row */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary">
                                        <Image 
                                            src={item.image} 
                                            alt={item.name} 
                                            fill 
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-neutral text-lg">{item.name}</h4>
                                        <p className="text-primary font-bold text-sm uppercase tracking-tighter">{item.role}</p>
                                        <div className="flex gap-1 mt-1">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} size={12} className="text-orange-400 fill-orange-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Global Custom Swiper Styles for your Theme */}
            <style jsx global>{`
                .swiper-pagination-bullet-active {
                    background: var(--color-primary) !important;
                }
                .swiper-slide {
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;