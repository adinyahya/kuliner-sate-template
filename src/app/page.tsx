"use client";

import Image from "next/image";
import { useState } from "react";

import Footer from "../components/Footer";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Testmonial from "@/components/Testmonial";
import Benefit from "@/components/Benefit";
import Cta from "@/components/Cta";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Benefit />
      <Stats />
      <Cta />
      <Testmonial />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
