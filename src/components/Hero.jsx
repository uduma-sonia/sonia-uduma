import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { FiDownload, FiLinkedin, FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import ProjectsCard from "./ProjectsCard";
import Technologies from "./Technologies";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";

export default function Hero() {
  return (
    <div className="text-slate-200 px-[1rem] md:px-[4rem] pt-10">
      <div className="flex items-start justify-between flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full lg:sticky top-5">
          <p className="font-normal text-lg text-slate-400">Hello, I'm</p>

          <h2 className="text-3xl lg:text-4xl font-medium mt-3 tracking-tighter">
            Sonia Uduma.
          </h2>

          <div className="mt-3">
            <p
              className="font-extralight text-sm max-w-xs lg:max-w-md"
              style={{ lineHeight: "23px" }}
            >
              I am an experienced front-end developer and
              <br />I build amazing products for the web.
            </p>
          </div>

          <div className="mt-10 flex lg:hidden">
            <a
              href="https://github.com/uduma-sonia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size="1.4rem" />
            </a>
            <a
              className="mx-8"
              href="https://www.linkedin.com/in/sonia-uduma-3529501ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size="1.4rem" />
            </a>
          </div>

          <div className="mt-10 hidden lg:flex items-center">
            <div className="w-16 h-16">
              <img
                src="/memoji.png"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="lg:ml-7 flex items-center">
              <a
                className="mr-10 shadow-xl flex border px-3 py-2 rounded-md border-gray-700 text-slate-200 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="mailto:sohnyauduma@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMailOutline size="0.8rem" />
                Email
              </a>
              <a
                className="flex text-slate-200 border px-3 py-2 rounded-md border-gray-700 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="https://drive.google.com/file/d/1k5NZWBi5kY-IfRl-zivMSXJCm9FFsso1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload size="0.8rem" />
                Resume
              </a>
            </div>
          </div>

          <div className="mt-10 hidden lg:block">
            <Technologies />
          </div>
        </div>

        <div className="lg:w-[50%] w-full mt-10 lg:mt-0">
          <p className="text-slate-400 my-4 text-sm flex items-center">
            Featured <IoMdArrowDropright />
          </p>

          <div className="lg:hidden">
            <Swiper
              spaceBetween={10}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".project_prev_button",
                nextEl: ".project_next_button",
              }}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3,
                },
              }}
            >
              {featuredProects?.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <ProjectsCard data={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex justify-end">
              <button className="project_prev_button mr-7">
                <BsFillArrowLeftCircleFill size="1.7rem" color="#5f6061" />
              </button>

              <button className="project_next_button">
                <BsFillArrowRightCircleFill size="1.7rem" color="#5f6061" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            {featuredProects?.map((item) => {
              return (
                <div key={item.name}>
                  <ProjectsCard data={item} />
                </div>
              );
            })}
          </div>

          <p className="text-slate-400 mb-4 mt-10 text-sm flex items-center">
            Others <IoMdArrowDropright />
          </p>

          <div className="lg:hidden">
            <Swiper
              spaceBetween={10}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".other_project_prev_button",
                nextEl: ".other_project_next_button",
              }}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3,
                },
              }}
            >
              {otherProjects?.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <ProjectsCard data={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex justify-end">
              <button className="other_project_prev_button mr-7">
                <BsFillArrowLeftCircleFill size="1.7rem" color="#5f6061" />
              </button>

              <button className="other_project_next_button">
                <BsFillArrowRightCircleFill size="1.7rem" color="#5f6061" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            {otherProjects?.map((item) => {
              return (
                <div key={item.name}>
                  <ProjectsCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-14 lg:hidden">
        <Technologies />
      </div>

      <div className="w-14 h-14 mt-20 lg:hidden mx-auto">
        <img src="/memoji.png" className="w-full h-full object-cover" />
      </div>

      <div className="text-center mt-3">
        <a
          href="mailto:sohnyauduma@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden text-[10px] text-slate-600"
        >
          sohnyauduma@gmail
        </a>
      </div>
    </div>
  );
}

const featuredProects = [
  {
    name: "SoftLife",
    description: "A lifestyle and financial app for young adults",
    tools: ["SVELTEKIT", "TYPESCRIPT", "TAILWINDCSS", "PWA"],
    live_link: "https://softlife.vip/",
    npm: false,
  },
  {
    name: "Mov3",
    description: "Radio station",
    tools: ["REACT", "TYPESCRIPT", "TAILWINDCSS", "PWA"],
    live_link: "https://mov3.live/",
    npm: false,
  },
  {
    name: "Triangle.",
    description: "Personalized career guide for everyone!",
    tools: ["NEXTJS", "TYPESCRIPT", "REACT QUERY", "CONTEXT API", "PWA"],
    live_link: "https://triangle.africa/",
    npm: false,
  },
  {
    name: "SEFI",
    description: "Social entertainment for innovators",
    tools: ["VITEJS", "TYPESCRIPT"],
    live_link: "https://sefi.wtf/",
    npm: false,
  },
  {
    name: "Sync!",
    description: "Project management app.",
    tools: ["NEXTJS", "TYPESCRIPT", "CHAKRA UI"],
    live_link: "https://teamsync.tools/",
    npm: false,
  },
  // {
  //   name: "IYKYKTV",
  //   description: "An entertainment platform",
  //   tools: ["NEXTJS", "TYPESCRIPT", "CHAKRA UI", "SWR", "PWA"],
  //   live_link: "https://iykyktv.live/",
  //   npm: false,
  // },
];

const otherProjects = [
  {
    name: "NextMove Agency",
    tools: ["NEXTJS", "TYPESCRIPT"],
    live_link: "https://nextmove-agency.netlify.app/",
    npm: false,
  },
  {
    name: "Anonry",
    description:
      "A web app for taking personal notes that can be shared anonymously with others.",
    tools: ["NEXTJS", "TYPESCRIPT", "SWR", "PWA"],
    github_link: "https://github.com/uduma-sonia/anonry",
    live_link: "https://anonry.netlify.app/signup",
    npm: false,
  },
  {
    name: "React-select-several",
    description:
      "Customizable select and input field for React that enables users to select and input multiple options.",
    tools: ["NEXTJS", "TYPESCRIPT"],
    live_link: "https://www.npmjs.com/package/react-select-several",
    npm: true,
  },
  // {
  //   name: "PayPal Clone",
  //   description: (
  //     <>
  //       A clone of{" "}
  //       <a href="https://www.paypal.com/ng/home" className="underline">
  //         PayPal
  //       </a>{" "}
  //       home, signup and login page.
  //     </>
  //   ),
  //   tools: ["NEXTJS", "TAILWIND CSS"],
  //   github_link: "https://github.com/uduma-sonia/paypal-clone",
  //   live_link: "https://paypal-clone.vercel.app/",
  //   npm: false,
  // },
  {
    name: "Pickup",
    description: "Landing page for a ride hailing platform.",
    tools: ["NEXTJS", "GSAP", "TAILWIND CSS"],
    github_link: "https://github.com/uduma-sonia/Pickup",
    live_link: "https://sonia-pickup.netlify.app/",
    npm: false,
  },
];
