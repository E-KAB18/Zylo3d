import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SoftwareSection from "@/components/Software";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zylo3D — The Complete Digital Dentistry Manufacturing Platform",
  description:
    "Integrated hardware, intelligent software, validated materials, and expert guidance — built to work as one.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <SoftwareSection />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
