import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl pb-20">
      <Navbar />
      <Hero />
    </div>
  );
}
