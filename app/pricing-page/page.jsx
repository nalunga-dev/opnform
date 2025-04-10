import React from "react";
import Priced from "../components/Price-head";
import Navbar from "../components/nav";
import Plan from "../components/plan";
import SiteFooter from "../components/Footer";
import Unlimited from "../components/Unlimited";
import Question from "../components/Quetion";
export default function Price() {
  return (
    <div>
      <Navbar />
      <Priced />
      <Plan />
      <Unlimited />
      <Question />
      <SiteFooter />
    </div>
  );
}
