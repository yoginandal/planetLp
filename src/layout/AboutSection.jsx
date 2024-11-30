"use client";

import { Card } from "../ui/card";
import AboutUs from "../assets/AboutUs.png";

export default function AboutSection() {
  return (
    <div className="w-full py-12 md:pb-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4">
        {/* Left Content Card */}
        <div className="w-full md:w-2/5 relative z-[5] md:-mr-16">
          <Card className=" max-h-fit  relative md:left-32 md:top-16 bg-[#FFD700] p-8 rounded-none">
            <div className="max-w-sm">
              <h2 className="text-2xl md:text-2xl font-bold mb-4">
                <span className="text-[#B31942] border-b-2 border-[#B31942] whitespace-nowrap">
                  About Planet Education
                </span>
              </h2>
              <p className="text-base md:text-xl leading-relaxed text-center md:text-left text-gray-800">
                With over 25 years of expertise, Planet Education has guided
                thousands of students toward achieving their international
                education dreams. Representing 350+ universities worldwide, we
                offer personalized counseling to help you select the right
                course, university, and country, ensuring a smooth application
                process.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-3/5">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <img
              src={AboutUs}
              alt="Student counseling session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
