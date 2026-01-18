import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaClock, FaShieldAlt, FaHandHoldingHeart, FaUserFriends, FaArrowLeft, FaStar } from "react-icons/fa";

// Receive 'service' as a prop
const ServiceDetails = ({ service }) => {
    
    if (!service?._id) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const discountedPrice = service.pricePerHour - (service.pricePerHour * service.discount) / 100;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Top Navigation / Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <Link href="/services" className="flex items-center gap-2 text-primary font-bold hover:underline">
                    <FaArrowLeft /> Back to All Services
                </Link>
            </div>

            <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* LEFT COLUMN - CONTENT (8 Cols) */}
                <div className="lg:col-span-8 space-y-8">
                    
                    {/* Image Gallery Area */}
                    <div className="relative h-100 md:h-137.5 w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                        <Image 
                            src={service.image} 
                            alt={service.title} 
                            fill 
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-6 left-6">
                            <span className="badge badge-primary p-4 font-bold uppercase tracking-widest">
                                {service.serviceType}
                            </span>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-6">
                            <h1 className="text-4xl font-black text-slate-800">{service.title}</h1>
                            <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full">
                                <FaStar className="text-orange-400" />
                                <span className="font-bold text-orange-700">{service.ratings}</span>
                            </div>
                        </div>
                        
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            {service.description || "We provide compassionate, professional care tailored to your specific needs. Our caregivers are trained to ensure safety and comfort for your loved ones at all times."}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                <FaUserFriends className="text-primary text-xl" />
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase">Target Group</p>
                                    <p className="font-bold text-slate-700">{service.ageGroup}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                <FaShieldAlt className="text-primary text-xl" />
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase">Status</p>
                                    <p className="font-bold text-success">Verified & Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features (Using the 'info' Array from MongoDB) */}
                    <div className="bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                            <FaHandHoldingHeart className="text-primary" /> What's Included in this Service
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.info && service.info.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <FaCheckCircle className="text-success mt-1 shrink-0" />
                                    <span className="text-slate-600 font-medium leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - BOOKING STICKY (4 Cols) */}
                <div className="lg:col-span-4">
                    <div className="sticky top-10 bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-6">Booking Summary</h3>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                                <span className="text-slate-500 font-medium">Hourly Rate</span>
                                <span className="text-slate-400 line-through font-bold">৳{service.price}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-800 font-bold text-lg">Discounted Price</span>
                                <span className="text-3xl font-black text-primary">৳{discountedPrice}</span>
                            </div>
                            <p className="text-[10px] text-slate-400 text-right font-bold uppercase tracking-wider">
                                *Inclusive of all service taxes
                            </p>
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <FaClock className="text-primary" /> 
                                <span>Minimum booking: 2 hours</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <FaShieldAlt className="text-primary" /> 
                                <span>Insurance covered care</span>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-lg w-full rounded-2xl shadow-lg shadow-primary/20 normal-case text-lg font-bold h-16">
                            Proceed to Book
                        </button>
                        
                        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <p className="text-xs text-blue-700 leading-relaxed text-center font-medium">
                                Need a customized plan for long-term care? 
                                <br /> 
                                <span className="font-bold underline cursor-pointer">Contact Support</span>
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default ServiceDetails;