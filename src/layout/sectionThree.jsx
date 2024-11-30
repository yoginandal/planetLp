"use client";

import Girl from "../assets/girlSmile.png";
import yellow from "../assets/yellowTick.png";
import white from "../assets/whiteTick.png";

export default function SectionThree() {
  const services = [
    "Expert Study Abroad Counseling",
    "Country & University Selection",
    "Application & Visa Assistance",
    "Pre-Departure Workshops",
    "Post-Landing Support",
    "Access to Top Australian Universities",
    "Assistance with Scholarships & Internships",
    "Post-Study Work Permit Guidance",
  ];

  return (
    <div className="w-full bg-[#f8efe7] py-12 md:pt-28 pb-18 px-4 md:px-12">
      <div className="max-w-[90rem] mx-auto relative">
        {/* Left and Right Sections Container */}
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-[#B31942] p-8 md:pl-40 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
            <h3 className="text-[#FFD700] text-2xl font-bold mb-6">
              Our Services Include:
            </h3>
            <ul className="space-y-4">
              {services.slice(0, 4).map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-white text-lg"
                >
                  <img src={yellow} alt="check" className="w-7 h-7" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-black p-8 md:pl-52 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <h3 className="text-[#FFD700] text-2xl font-bold mb-6">
              Why Choose Planet Education?
            </h3>
            <ul className="space-y-4">
              {services.slice(4).map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-white text-lg"
                >
                  <img src={white} alt="check" className="w-7 h-7" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centered Image overlaying both sections */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full md:w-1/3 flex justify-center">
          <img
            src={Girl}
            alt="Student Counselor"
            className="w-48 md:w-96 lg:w-[18rem] object-contain hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
