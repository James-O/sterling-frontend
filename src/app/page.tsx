import { AppLayout, Container } from "@/layouts";
import {
  Hero,
  Services,
  Work,
  WhyChooseUs,
  PartnersAndClients,
  Reviews
} from "@/components/home";
import { CollaborateWithUs } from "@/components/partials";

export const metadata = {
  title: "Home - Sterling Technologies & Systems",
  description: "Sterling Technologies & Systems - Professional Services",
};

export default function Home() {
  return (
    <AppLayout title="Home - Sterling Technologies & Systems">
      <Hero />
      <Services />
      <Work />
      <WhyChooseUs />
      <PartnersAndClients />
      <CollaborateWithUs />
      <Reviews/>
    </AppLayout>
  );
}
