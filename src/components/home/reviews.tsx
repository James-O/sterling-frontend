

"use client";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Geometric Power",
    logo: "/gp.png",
    review:
      "Their technical expertise and execution speed exceeded our expectations. The team delivered a scalable and reliable solution tailored to our operational needs.",
  },
  {
    name: "EEDC",
    logo: "/eedc.png",
    review:
      "A highly professional team with deep industry understanding. Their attention to detail and commitment to quality stood out throughout the project lifecycle.",
  },
  {
    name: "BEDC",
    logo: "/bedc.png",
    review:
      "From consultation to deployment, the process was seamless. Their solution significantly improved our internal efficiency and reporting systems.",
  },
  {
    name: "APL Electric",
    logo: "/aple.png",
    review:
      "Reliable, innovative, and responsive. We value their ability to translate complex requirements into practical digital solutions.",
  },
  {
    name: "Utiliflex",
    logo: "/utiliflex.png",
    review:
      "Their platform integration was smooth and well-structured. The support team remains proactive and dependable.",
  },
];

export const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Client Reviews
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Here’s what our partners say about working with us
          </p>
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                “{client.review}”
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">
                  {client.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};