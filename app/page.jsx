import React from "react";
import Navbar from "./components/nav";
import HeroSection from "./components/hero";
import Picture from "./components/Picture";
import Freeplan from "./components/Freeplan";
import WorkProcess from "./components/Work";
import Ai from "./components/Ai";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Marquee from "./components/Macque";
import LevelSection from "./components/Level";
import SiteFooter from "./components/Footer";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Picture />
      <Freeplan />
      <WorkProcess />
      <Ai />
      <Features />
      <Pricing />
      <Marquee />
      <LevelSection />
      <Form />
      <SiteFooter />
    </div>
  );
}
