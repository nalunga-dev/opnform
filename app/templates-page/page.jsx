import React from "react";
import Navbar from "../components/nav";
import Header from "../components/Header";
import Clients from "../components/Clients";
import SiteFooter from "../components/Footer";
import IndustriesGrid from "../components/Indudtries";
import Types from "../components/Types";

export default function Templates() {
  return (
    <div>
      <Navbar />
      <Header />
      <Clients />
      <Types />
      <IndustriesGrid />
      <SiteFooter />
    </div>
  );
}
