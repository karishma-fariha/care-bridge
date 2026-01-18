import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, isLoggedIn }) => {
    const { _id, title, image, pricePerHour, discount, serviceType, ratings, reviews, info } = service;
    const discountedPrice = pricePerHour - (pricePerHour * discount) / 100;

    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 group">
            <figure className="relative h-56 overflow-hidden">
                <Image 
                    src={image} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="badge bg-white/90 text-primary font-bold px-4 py-3">{serviceType}</span>
                </div>
                {discount > 0 && (
                    <div className="absolute top-4 right-4">
                        <span className="badge badge-secondary font-bold text-white">{discount}% OFF</span>
                    </div>
                )}
            </figure>
            
            <div className="card-body p-6">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1">
                        <span className="text-orange-400">★</span>
                        <span className="font-bold">{ratings}</span>
                        <span className="text-xs text-gray-400">({reviews})</span>
                    </div>
                    <span className="text-xs font-semibold text-success bg-success/10 px-2 py-1 rounded">Available</span>
                </div>

                <h2 className="card-title text-xl font-bold text-gray-800">{title}</h2>
                
                <ul className="mt-3 space-y-1">
                    {info.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                            <span className="text-primary">✔</span> {item}
                        </li>
                    ))}
                </ul>

                <div className="divider my-2"></div>

                <div className="flex items-center justify-between mt-auto mb-4">
                    <div>
                        <p className="text-sm text-gray-400 line-through">৳{pricePerHour}</p>
                        <p className="text-2xl font-black text-primary">৳{discountedPrice}<span className="text-xs font-normal text-gray-500">/hr</span></p>
                    </div>
                    {/* Updated Details Link */}
                    <Link 
                        href={isLoggedIn ? `/services/${_id}` : '/login'} 
                        className="btn btn-primary btn-sm rounded-lg"
                    >
                        Details
                    </Link>
                </div>

                {/* Updated Book Now Link to also check login */}
                <Link 
                    href={isLoggedIn ? `/booking/${_id}` : '/login'} 
                    className="btn btn-primary btn-outline rounded-lg hover:btn-primary w-full"
                >
                    {isLoggedIn ? "Book Now" : "Login to Book"}
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;