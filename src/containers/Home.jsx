import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useGetSubdomain } from "../components/useGetSubdomain";

export default function Home() {
  const domain = useGetSubdomain();

  console.log(domain);
  return (
    <div className="mx-auto max-w-7xl pb-20 bg-[#13191a]">
      <Navbar />
      <Hero />
    </div>
  );
}
