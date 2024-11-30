"use client";

export default function Contact() {
  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-8">
        {/* Left Section */}
        <div className="bg-[#FFD700] p-8 rounded-lg text-center md:text-left flex-1">
          <h3 className="font-semibold text-2xl mb-4 text-[#b12830]">
            Don&apos;t Miss Out!
          </h3>
          <p className="text-lg mb-3">
            Take the first step towards your study abroad journey.
          </p>
          <p className="font-semibold text-lg">
            Register Now to Secure Your Spot!
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-[#FFD700] p-8 rounded-lg text-center md:text-left flex-1">
          <h3 className="font-semibold text-2xl mb-4 text-[#b12830]">
            Contact Us:
          </h3>
          <p className="text-lg mb-4">
            For more details, reach out to us today!
          </p>
          <div>
            <p className="font-semibold text-lg mb-2">
              Planet Education & EaseMyTrip
            </p>
            <p className="text-lg">
              Your Partners in Making Study Abroad Reality
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-1 mt-8"></div>
    </div>
  );
}
