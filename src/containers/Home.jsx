import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import gsap, { Back } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          invalidateOnRefresh: true,
        },
        ease: Back.easeInOut,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,

        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="mx-auto max-w-7xl pb-20">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="bg-[#13191a] h-52 text-white p-20 card">two</div>
      <div className="bg-red-300 h-screen text-white p-20 card">three</div>
      <div className="bg-red-100 h-screen text-white p-20 card">four</div>
    </div>
  );
}
