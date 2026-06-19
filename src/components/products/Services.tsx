'use client'
import { Container } from '@/layouts';
import Aos from 'aos';
import React, { useEffect } from 'react'
import { Btn } from '../partials/cta-button';
import Link from 'next/link';

export const serviceData = [
  {
    id: 1,
    icon: "/images/vend.png",
    title: "Utility Billing",
    desc: "End-to-end utility billing operations for prepaid electricity, including STS token generation, third-party payment collection management, and real-time transaction processing.",
  },
  {
    id: 2,
    icon: "/images/erpicon.png",
    title: "Debt Management & Collection",
    desc: "Structured debt recovery using our sub-account engine, supporting multiple debt types and flexible repayment configurations tailored to each customer.",
  },
  {
    id: 3,
    icon: "/images/payment.png",
    title: "Third Party Payment Collection Management",
    desc: "Onboarding, monitoring, and managing third-party collection agents, aggregators, and payment channels within a unified network.",
  },
  {
    id: 4,
    icon: "/images/data.png",
    title: "Energy Infrastructure Analytics",
    desc: "End-to-end management of distribution assets including transformers, feeders, meters, and service connections within the utility network.",
  },
  {
    id: 5,
    icon: "/images/iot.png",
    title: "Electricity Meter Data Management",
    desc: "Professional installation, registration, and configuration of prepaid (STS) and smart (AMI) meters, including tariff and parameter setup.",
  },
  {
    id: 6,
    icon: "/images/ai.webp",
    title: "ERP Deployment Services",
    desc: "Implementation and customization of enterprise resource planning solutions tailored to utility and energy service businesses.",
  },
  {
    id: 7,
    icon: "/images/ai.webp",
    title: "Revenue Assurance Services",
    desc: "Identification and recovery of revenue leakages through data audits, billing reconciliation, and commercial loss analysis.",
  },
  {
    id: 8,
    icon: "/images/ai.webp",
    title: "Custom Application Development",
    desc: "Bespoke software development for utility operators, estates, institutions, and enterprises requiring specialized digital solutions.",
  },
  {
    id: 9,
    icon: "/images/ai.webp",
    title: "Cloud & Hosting Services",
    desc: "Secure, scalable infrastructure hosting for utility platforms, including multi-tenant cloud deployments and managed server environments.",
  },
  {
    id: 10,
    icon: "/images/ai.webp",
    title: "AMI Implementation & Integration",
    desc: "Full-cycle deployment of Advanced Metering Infrastructure — from hardware procurement to communication setup, platform integration, and shared AMI service models.",
  },
  {
    id: 11,
    icon: "/images/ai.webp",
    title: "GIS/Geomapping Integration",
    desc: "Integration of Geographic Information Systems (GIS) for network mapping, asset enumeration, transformer onboarding, and spatial infrastructure analysis.",
  },
  {
    id: 12,
    icon: "/images/ai.webp",
    title: "Turnkey App Development",
    desc: "End-to-end development of custom mobile and web applications for utility operations. We deliver ready-to-deploy solutions for vending, billing, meter data management, and customer engagement."
  },
  {
    id: 13,
    icon: "/images/ai.webp",
    title: "Cloud Infrastructure and Hosting Services",
    desc: "Secure, scalable cloud hosting and infrastructure management for utility operations. We provide reliable cloud solutions with 24/7 monitoring, data backup, and disaster recovery to keep your systems running smoothly."
  },
  {
    id: 14,
    icon: "/images/ai.webp",
    title: "E-commerce and Payment Services",
    desc: "Integrated e-commerce platforms and payment gateway solutions for utility providers. Enable customers to pay bills, purchase tokens, and manage accounts seamlessly through secure online and mobile payment channels."
  },
  {
    id: 15,
    icon: "/images/ai.webp",
    title: "Renewable Energy Services",
    desc: "Sustainable energy solutions including solar integration, renewable energy metering, and grid connectivity services. We help utilities transition to clean energy while maintaining efficient billing and monitoring systems."
  }
];
interface serviceData {
  id: number,
  icon: string,
  title: string,
  desc: string
}
export interface ServicesProps {
  data: serviceData[]
}
export default function Services() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='bg-blue-950 text-white py-20'>
      <Container>

        <div className='text-center mb-10'>
          <h1 className='text-3xl font-bold'>Our Services</h1>
          <h2 className='text-2xl font-semibold'>End-to-end utility management support</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {serviceData.map(service => (
            <div key={service.id} data-aos="zoom-out"
              className='bg-white text-black p-4 rounded space-y-5 text-center'
            >
              {/* <div className='flex'>
                <img src={service.icon} alt={service.title}
                  className="w-12 h-12 object-contain mx-auto"
                />
              </div> */}
              <div className="bg-primary p-3 flex  rounded-md w-max mx-auto">
                <img src={service.icon} alt={service.title} className="w-12 h-12 mx-auto" />
              </div>
              <h3 className='font-bold text-lg text-blue-950 border-b border-primary'>{service.title}</h3>
              <p className='pb-16'>{service.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className='text-center mt-10 flex justify-center'>
          <Btn
            className="mt-10 mx-auto block text-blue-950 font-bold bg-white hover:bg-gray-100 transition-colors py-4 px-10 rounded-lg"
            title='See More' />
        </Link>
      </Container>
    </div>
  );
}
