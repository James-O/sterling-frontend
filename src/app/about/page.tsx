import React from 'react'
import { AppLayout } from "@/layouts";
import Hero from '@/components/about-us/Hero';
import PerformanceAtScale from '@/components/about-us/PerfAtScale';

export const metadata = {
  title: "About Us - Sterling Technologies & Systems",
  description: "Learn more about Sterling Technologies & Systems",
};

export default function About() {
  return (
    <AppLayout>
      <div>
        <Hero />
        <PerformanceAtScale />
      </div>
    </AppLayout>
  )
}
