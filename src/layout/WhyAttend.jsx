"use client";

import yellow from "../assets/yellowTick.png";
import whyAttend from "../assets/whyAttend.png";

export default function WhyAttend() {
  const benefits = [
    "Meet Representatives from Australia's Leading Universities",
    "Explore Scholarship & Internship Opportunities",
    "Learn about Post-Study Work Permits & Career Paths",
    "Get Expert Advice on Application & Visa Processes",
  ];

  return (
    <div className="w-full bg-[#b12830] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={whyAttend}
            alt="Why Attend Education Fair"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-6">
            Why Attend?
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <img
                  src={yellow}
                  alt="check"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span className="text-white md:text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
