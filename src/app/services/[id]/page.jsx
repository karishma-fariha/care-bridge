import { getSingleProduct } from "@/actions/server/service";
import ServiceDetails from "@/components/cards/ServiceDetails";

const Page = async ({ params }) => {
    const { id } = await params; 
    const service = await getSingleProduct(id);

    return <ServiceDetails service={service} />;
};

export default Page;