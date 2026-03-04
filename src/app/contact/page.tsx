import React from "react";
import { AppLayout } from "@/layouts";
import { ContactForm } from "@/components/contact-us";
import { PageHeader } from "@/components/partials";

export const metadata = {
  title: "Contact Us - Sterling Technologies & Systems",
  description: "Fill out the form below to get in contact with us",
};

export default function Contact() {
  return (
    <AppLayout>
      <PageHeader
        heading="Contact Us"
        body="Fill out the form below to get in contact with us"
        cta="Let's Talk Now"
        link="/contact"
      />
      <ContactForm />
    </AppLayout>
  );
}
