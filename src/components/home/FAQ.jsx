import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            q: "How do I know if a caregiver is qualified?",
            a: "Every caregiver on CareBridge undergoes a 5-step verification process, including background checks, identity verification, and professional certification reviews."
        },
        {
            q: "Can I change my caregiver if I'm not satisfied?",
            a: "Absolutely. We offer a 'Compatibility Guarantee.' If you don't feel comfortable with your matched caregiver, we will help you find a new one immediately at no extra cost."
        },
        {
            q: "What are the payment methods available?",
            a: "We accept all major credit cards, mobile banking (bKash/Nagad), and bank transfers. Payments are processed securely after the service hours are confirmed."
        },
        {
            q: "Is there a minimum booking duration?",
            a: "To ensure our caregivers can provide quality support, we have a minimum booking requirement of 2 hours per session."
        }
    ];

    return (
        <section className="py-24 bg-base-200">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Content */}
                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                            Common Questions
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-neutral mb-6">
                            Have Questions? <br />
                            <span className="text-primary">We Have Answers</span>
                        </h3>
                        <p className="text-neutral/60 text-lg mb-8">
                            Finding the right care can be confusing. We've compiled the most common 
                            questions families ask us to help you make an informed decision.
                        </p>
                        <button className="btn btn-primary rounded-2xl px-8 shadow-lg shadow-primary/20">
                            Contact Support
                        </button>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="collapse collapse-plus bg-base-100 rounded-[2rem] border border-base-300 shadow-sm"
                            >
                                <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
                                <div className="collapse-title text-xl font-bold text-neutral pr-10">
                                    {faq.q}
                                </div>
                                <div className="collapse-content"> 
                                    <p className="text-neutral/60 leading-relaxed pt-2 border-t border-base-200">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;