"use client";

import LandingBanner from "../layout/LandingBanner";
import AboutSection from "../layout/AboutSection";
import SectionThree from "../layout/sectionThree";
import TableSection from "../layout/TableSection";
import WhyAttend from "../layout/WhyAttend";
import Contact from "../layout/Contact";
export default function LandingPage() {
  return (
    <main>
      <LandingBanner />
      <AboutSection />
      <SectionThree />
      <TableSection />
      <WhyAttend />
      <Contact />
    </main>
  );
}
