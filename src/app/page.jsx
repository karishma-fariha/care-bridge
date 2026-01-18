import Banner from "@/components/home/Banner";
import ExpertCaregivers from "@/components/home/ExpertCaregivers";
import FAQ from "@/components/home/FAQ";
import HowItWorks from "@/components/home/HowItWorks";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <ExpertCaregivers></ExpertCaregivers>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <FAQ></FAQ>
      </section>
    </div>
  );
}
