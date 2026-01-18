import React from 'react';
import Image from 'next/image';
import { Star, Award, Heart, Quote } from 'lucide-react';

const CaregiverCard = ({ staff }) => {
    return (
        <div className="bg-base-100 rounded-[2.5rem] overflow-hidden border border-base-300 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* Image Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <Image 
                    src={staff.image} 
                    alt={staff.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-base-300">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-xs font-black text-neutral">{staff.rating}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-neutral mb-1">{staff.name}</h4>
                    <div className="badge badge-primary badge-outline font-bold text-[10px] uppercase tracking-wider">
                        {staff.role}
                    </div>
                </div>
                
                <div className="relative mb-6 px-2">
                    <Quote className="w-3 h-3 text-primary/20 absolute -top-1 -left-1" />
                    <p className="text-xs text-neutral/60 italic line-clamp-2 leading-relaxed text-center">
                        {staff.bio}
                    </p>
                </div>

                <div className="flex items-center justify-center gap-3 py-4 border-y border-base-200 mb-6 bg-base-200/30 rounded-xl">
                    <div className="flex flex-col items-center gap-1">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black text-neutral/50 uppercase tracking-tighter">{staff.exp}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-base-300 mx-2"></div>
                    <div className="flex flex-col items-center gap-1">
                        <Heart className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black text-neutral/50 uppercase tracking-tighter">{staff.specialty}</span>
                    </div>
                </div>

                <button className="btn btn-neutral btn-sm w-full rounded-xl group-hover:btn-primary transition-all duration-300 border-none">
                    View Full Profile
                </button>
            </div>
        </div>
    );
};

export default CaregiverCard;