import React from 'react';
import { ShieldCheck, Clock, Users, HeartPulse, Award, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Verified Caregivers",
            description: "Every caregiver undergoes a rigorous 5-step background check and identity verification process."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "24/7 Availability",
            description: "Whether it's a midnight emergency or early morning support, our team is available around the clock."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Expert Supervision",
            description: "Our care plans are monitored by registered nurses to ensure the highest medical standards."
        },
        {
            icon: <HeartPulse className="w-8 h-8" />,
            title: "Compassionate Care",
            description: "We don't just provide medical support; we provide companionship and emotional empathy."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Certified Specialists",
            description: "All staff are certified in First Aid, CPR, and specialized age-group care protocols."
        },
        {
            icon: <BadgeCheck className="w-8 h-8" />,
            title: "Affordable Plans",
            description: "Premium healthcare shouldn't break the bank. We offer flexible, transparent hourly rates."
        }
    ];

    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                        The CareBridge Advantage
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-neutral mb-6">
                        Why Families <span className="text-primary">Trust Us</span>
                    </h3>
                    <p className="text-neutral/70 text-lg">
                        We go beyond simple caregiving. We provide a safety net for your loved ones, 
                        combining professional expertise with genuine human connection.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-base-100 p-8 rounded-[2.5rem] border border-base-300 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
                        >
                            {/* Icon Container using Primary Brand Color */}
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                                <div className="text-primary group-hover:text-base-100 transition-colors duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            
                            <h4 className="text-xl font-bold text-neutral mb-3">
                                {item.title}
                            </h4>
                            <p className="text-neutral/60 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats Bar */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-12 pt-10 border-t border-base-300">
                   <div className="text-center">
                       <div className="text-3xl font-black text-primary">10k+</div>
                       <div className="text-xs font-bold uppercase text-neutral/50 tracking-tighter">Happy Families</div>
                   </div>
                   <div className="text-center">
                       <div className="text-3xl font-black text-primary">500+</div>
                       <div className="text-xs font-bold uppercase text-neutral/50 tracking-tighter">Certified Staff</div>
                   </div>
                   <div className="text-center">
                       <div className="text-3xl font-black text-primary">4.9/5</div>
                       <div className="text-xs font-bold uppercase text-neutral/50 tracking-tighter">Average Rating</div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;