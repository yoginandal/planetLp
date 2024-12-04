"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import logo from "../assets/logo.png";
import bannerBg from "../assets/banner_bg.png";
import mobileBannerBg from "../assets/banner_bg_res.png"; // Import mobile background

export default function LandingBanner() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    education: "",
    country: "",
    level: "",
    exam: "",
    city: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [digitError, setDigitError] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhoneStart = (value) => {
    if (value && !/^[6-9]/.test(value)) {
      setPhoneError("Phone number must start with 6, 7, 8, or 9");
    } else {
      setPhoneError("");
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "contact") {
      if (e.target.value.length !== 10) {
        setDigitError("Phone number must be of 10 digits");
      } else {
        setDigitError("");
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "fullname") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        setError("Name can only contain letters and spaces.");
        return;
      }
    }

    if (name === "contact") {
      const sanitizedValue = value.replace(/\D/g, "");
      validatePhoneStart(sanitizedValue);
      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue.slice(0, 10),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (phoneError || digitError) {
      setError("Please correct the errors before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Check if email exists
      const emailQuery = query(
        collection(db, "leads"),
        where("email", "==", formData.email)
      );
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        setError("Email already exists.");
        setIsSubmitting(false);
        return;
      }

      // Check if phone exists
      const phoneQuery = query(
        collection(db, "leads"),
        where("contact", "==", formData.contact)
      );
      const phoneSnapshot = await getDocs(phoneQuery);

      if (!phoneSnapshot.empty) {
        setError("Phone number already exists.");
        setIsSubmitting(false);
        return;
      }

      await addDoc(collection(db, "leads"), {
        ...formData,
        submissionDate: new Date().toLocaleString(),
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit form. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Main container with background image */}
      <div
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 1024 ? bannerBg : mobileBannerBg
          })`,
        }}
        className="min-h-screen w-full bg-cover bg-no-repeat bg-center"
      >
        {/* Logo */}
        <div className="p-4 flex justify-center lg:justify-start">
          <img src={logo} alt="Planet Education" className="w-[250px]" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto lg:mt-[-2rem] px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8">
          {/* Left Section */}
          <div className="text-white max-w-screen-lg pt-8 lg:pt-8 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl font-normal mb-2">
              Dreaming of
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Studying in Australia?
            </h2>
            <div className="text-black max-w-[768px]">
              <p className="text-xl inline-block bg-[#FFD700] px-4 py-2">
                Explore Endless Possibilities at the Australia <br /> Education
                Fair by Planet Education!
              </p>
            </div>
            <div className="inline-block text-white p-4 bg-[#1E2875]">
              <p className="text-xl">
                Your One-Stop Solution for Study Abroad Guidance
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div
            className="w-full max-w-sm bg-[#FFD700] p-8 mt-8 lg:mt-[-2rem] relative mx-auto lg:mx-0
            [clip-path:polygon(40px_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%,0_40px)]"
          >
            <h3 className="text-xl font-bold text-center mb-6">
              Sign-up to choose your best-fit university or college with our
              expert counselors.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              {phoneError && (
                <p className="text-red-500 text-sm text-center">{phoneError}</p>
              )}
              {digitError && (
                <p className="text-red-500 text-sm text-center">{digitError}</p>
              )}

              <Input
                type="text"
                placeholder="Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleInput}
                className="w-full p-3 border-none rounded bg-white"
                required
              />

              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                className="w-full p-3 border-none rounded bg-white"
                required
              />

              <Input
                type="tel"
                placeholder="Phone Number"
                name="contact"
                value={formData.contact}
                onChange={handleInput}
                onBlur={handleBlur}
                className="w-full p-3 border-none rounded bg-white"
                required
              />

              <Select
                value={formData.city}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, city: value }))
                }
              >
                <SelectTrigger className="w-full p-3 border-none rounded bg-white">
                  <SelectValue placeholder="Choose your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai (Andheri)</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="vidyanagar">Vidyanagar</SelectItem>
                  <SelectItem value="vadodara">Vadodara</SelectItem>
                  <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="jammu">Jammu</SelectItem>
                  <SelectItem value="srilanka">Sri Lanka</SelectItem>
                  <SelectItem value="manipal">Manipal</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={formData.country}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, country: value }))
                }
              >
                <SelectTrigger className="w-full p-3 border-none rounded bg-white">
                  <SelectValue placeholder="Your Preferred Study Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Australia">Australia</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={formData.education}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, education: value }))
                }
              >
                <SelectTrigger className="w-full p-3 border-none rounded bg-white">
                  <SelectValue placeholder="Current Level of Education" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12th">12th Pass</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="postgraduate">Post Graduate</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={formData.level}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, level: value }))
                }
              >
                <SelectTrigger className="w-full p-3 border-none rounded bg-white">
                  <SelectValue placeholder="Your Course of Interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="postgraduate">Post Graduate</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={formData.exam}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, exam: value }))
                }
              >
                <SelectTrigger className="w-full p-3 border-none rounded bg-white">
                  <SelectValue placeholder="Have you taken up IELTS/PTE exam?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="w-full bg-[#1E2875] hover:bg-[#1E2875]/90 text-white p-3 rounded"
                disabled={isSubmitting}
              >
                Register Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
