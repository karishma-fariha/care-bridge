import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactUs = () => {
    return (
        <section className="py-24 bg-base-100">
            <div className="container mx-auto px-4 md:px-12">
                <div className="bg-base-200 rounded-[3rem] overflow-hidden shadow-sm border border-base-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left Side: Contact Information */}
                        <div className="p-8 md:p-16 bg-neutral text-base-100">
                            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                                Get In Touch
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                                Let's Talk About <br />
                                <span className="text-primary">Your Care Needs</span>
                            </h3>
                            <p className="text-base-100/60 text-lg mb-12">
                                Have questions about our services or need a custom care plan?
                                Reach out and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">Call Us</h4>
                                        <p className="text-base-100/60">+880 1234 567 890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">Email Us</h4>
                                        <p className="text-base-100/60">support@carebridge.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">Response Time</h4>
                                        <p className="text-base-100/60">Typically within 2-4 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="p-8 md:p-16">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold text-neutral">Full Name</span>
                                        </label>
                                        <input type="text" placeholder="John Doe" className="input input-bordered bg-base-100 rounded-xl focus:border-primary focus:outline-none" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold text-neutral">Email Address</span>
                                        </label>
                                        <input type="email" placeholder="john@example.com" className="input input-bordered bg-base-100 rounded-xl focus:border-primary focus:outline-none" />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold text-neutral">Service Type</span>
                                    </label>
                                    <select
                                        defaultValue="default"
                                        className="select select-bordered bg-base-100 rounded-xl focus:border-primary focus:outline-none font-medium"
                                    >
                                        <option value="default" disabled>
                                            Select a Service
                                        </option>
                                        <option>Elderly Care</option>
                                        <option>Baby Care</option>
                                        <option>Sick Support</option>
                                    </select>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold text-neutral">Your Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered bg-base-100 rounded-xl focus:border-primary focus:outline-none h-32" placeholder="Tell us about your requirements..."></textarea>
                                </div>

                                <button type="button" className="btn btn-primary w-full rounded-xl text-lg font-black shadow-lg shadow-primary/30 group">
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;