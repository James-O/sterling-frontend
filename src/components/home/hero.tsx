'use client'
import React from "react";
import Link from "next/link";
import { CTAButton, AnimateY } from "../partials";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    // <div className="w-full h-full pt-10">
    <div className="w-full overflow-x-hidden overflow-y-hidden pt-10">
      <Slider {...settings}>
        <div className="relative">
          <div className="relative w-full h-[450px] md:h-[600px] lg:h-[580px]">
            <img
              src="/hero-img.png"
              alt="Tech Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="pt-10 bg-black/50 text-white md:pb-16 absolute top-0 left-0 w-full">
            <div className="px-6 md:px-16 lg:px-20 w-full">
              {/* <div className="space-y-6 pt-20 md:min-h-screen"> */}
              <div className="space-y-6 pt-16 md:pt-20">
                <AnimateY staggerAmount={0.35}>

                  <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                    <div className="w-full">
                      We are committed to constantly exploring new ideas, and
                      harnessing innovation to drive your success
                    </div>
                  </h2>
                </AnimateY>

                <div className="space-y-6 md:space-y-10">
                  <AnimateY staggerAmount={0.45}>
                    <h1 className="text-[2rem] font-semibold leading-[150%] tracking-tight  md:text-6xl lg:text-7xl  lg:leading-[140%]">
                      Shaping A Smarter World{" "}
                      <span className="text-primary">
                        Our Vision, Your Solution.
                      </span>{" "}
                    </h1>
                  </AnimateY>

                  <AnimateY staggerAmount={0.5}>
                    <div>
                      <Link href={"/contact"}>
                        <CTAButton title="Let's Talk Now" />
                      </Link>
                    </div>
                  </AnimateY>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
         <div className="relative w-full h-[450px] md:h-[600px] lg:h-[580px]">
            <img 
              src="/images/erp.jpg" 
              alt="ERP Image" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
         </div>

          <div className="pt-10 bg-black/50 text-white md:pb-16 absolute top-0 left-0 w-full">
            <div className="px-6 md:px-16 lg:px-20 w-full">
              <div className="space-y-6 pt-16 md:pt-20">
                <AnimateY staggerAmount={0.35}>

                  <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                    <div className="w-full">
                      We are committed to constantly exploring new ideas, and
                      harnessing innovation to drive your success
                    </div>
                  </h2>
                </AnimateY>

                <div className="space-y-6 md:space-y-10">
                  <AnimateY staggerAmount={0.45}>
                    <h1 className="text-[2rem] font-semibold leading-[150%] tracking-tight  md:text-6xl lg:text-7xl  lg:leading-[140%]">
                      Shaping A Smarter World{" "}
                      <span className="text-primary">
                        Our Vision, Your Solution.
                      </span>{" "}
                    </h1>
                  </AnimateY>

                  <AnimateY staggerAmount={0.5}>
                    <div>
                      <Link href={"/contact"}>
                        <CTAButton title="Let's Talk Now" />
                      </Link>
                    </div>
                  </AnimateY>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full h-[450px] md:h-[600px] lg:h-[580px]">
            <img 
              src="/images/erp7.webp" 
              alt="AI Image"
              className="absolute inset-0 w-full h-full object-cover" 
            />
         </div>

          <div className="pt-10 bg-black/50 text-white md:pb-16 absolute top-0 left-0 w-full">
            <div className="px-6 md:px-16 lg:px-20 w-full">
              <div className="space-y-6 pt-16 md:pt-20">
                <AnimateY staggerAmount={0.35}>

                  <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                    <div className="w-full">
                      We are committed to constantly exploring new ideas, and
                      harnessing innovation to drive your success
                    </div>
                  </h2>
                </AnimateY>

                <div className="space-y-6 md:space-y-10">
                  <AnimateY staggerAmount={0.45}>
                    <h1 className="text-[2rem] font-semibold leading-[150%] tracking-tight  md:text-6xl lg:text-7xl  lg:leading-[140%]">
                      Shaping A Smarter World{" "}
                      <span className="text-primary">
                        Our Vision, Your Solution.
                      </span>{" "}
                    </h1>
                  </AnimateY>

                  <AnimateY staggerAmount={0.5}>
                    <div>
                      <Link href={"/contact"}>
                        <CTAButton title="Let's Talk Now" />
                      </Link>
                    </div>
                  </AnimateY>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full h-[450px] md:h-[600px] lg:h-[580px]">
            <img 
              src="/images/quickcash4.jpg" 
              alt="quick cash"
              className="absolute inset-0 w-full h-full object-cover" 
            />
         </div>
          
          <div className="pt-10 bg-black/50 text-white md:pb-16 absolute top-0 left-0 w-full">
            <div className="px-6 md:px-16 lg:px-20 w-full">
              <div className="space-y-6 pt-16 md:pt-20">
                <AnimateY staggerAmount={0.35}>

                  <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                    <div className="w-full">
                      We are committed to constantly exploring new ideas, and
                      harnessing innovation to drive your success
                    </div>
                  </h2>
                </AnimateY>

                <div className="space-y-6 md:space-y-10">
                  <AnimateY staggerAmount={0.45}>
                    <h1 className="text-[2rem] font-semibold leading-[150%] tracking-tight  md:text-6xl lg:text-7xl  lg:leading-[140%]">
                      Shaping A Smarter World{" "}
                      <span className="text-primary">
                        Our Vision, Your Solution.
                      </span>{" "}
                    </h1>
                  </AnimateY>

                  <AnimateY staggerAmount={0.5}>
                    <div>
                      <Link href={"/contact"}>
                        <CTAButton title="Let's Talk Now" />
                      </Link>
                    </div>
                  </AnimateY>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full h-[450px] md:h-[600px] lg:h-[580px]">
            <img 
              src="/images/iotimg.jpg"
              alt="IoT Image"
              className="absolute inset-0 w-full h-full object-cover" 
            />
         </div>

          <div className="pt-10 bg-black/50 text-white md:pb-16 absolute top-0 left-0 w-full">
            <div className="px-6 md:px-16 lg:px-20 w-full">
              <div className="space-y-6 pt-16 md:pt-20">
                <AnimateY staggerAmount={0.35}>

                  <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                    <div className="w-full">
                      We are committed to constantly exploring new ideas, and
                      harnessing innovation to drive your success
                    </div>
                  </h2>
                </AnimateY>

                <div className="space-y-6 md:space-y-10">
                  <AnimateY staggerAmount={0.45}>
                    <h1 className="text-[2rem] font-semibold leading-[150%] tracking-tight  md:text-6xl lg:text-7xl  lg:leading-[140%]">
                      Shaping A Smarter World{" "}
                      <span className="text-primary">
                        Our Vision, Your Solution.
                      </span>{" "}
                    </h1>
                  </AnimateY>

                  <AnimateY staggerAmount={0.5}>
                    <div>
                      <Link href={"/contact"}>
                        <CTAButton title="Let's Talk Now" />
                      </Link>
                    </div>
                  </AnimateY>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
