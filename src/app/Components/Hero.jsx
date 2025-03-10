import Image from "next/image";
import React from "react";
import ankita_img from "../../../public/assets/images/png/ankita.jpg";
import {
  DownloadIcon,
  GithubIcon,
  HeroSecElp,
  LinkdinIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./Icon";
import { HeroSecArr } from "./Helper";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-118px)] flex flex-col">
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  flex-grow flex flex-col justify-center">
        <div className="flex flex-wrap items-center flex-col-reverse lg:flex-row w-full">
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2 text-center sm:text-start ">
            <div>
              <p className="font-normal text-base md:text-xl text-white">
                Front End Web Developer
              </p>
              <h1 className="font-semibold text-4xl md:text-6xl xl:text-7xl xl:text-[80px] text-white md:!leading-[60px] xl:!leading-[90px] mt-1">
                Hello I am <span className="text-[#15FFEA]">Ankita Sehrawat</span>
              </h1>
              <p className="font-normal text-base md:text-lg text-white/80 pt-4 pb-10 md:py-[30px]">
                Front-End Developer with a proven track record of enhancing website
                scalability and performance. Skilled in HTML, CSS, JavaScript, and React.js,
                with a focus on creating user-friendly interfaces. Successfully collaborated with
                a team to boost user engagement and implemented dynamic web solutions.
                Recognized for resolving bugs and optimizing performance across multiple web
                pages. Eager to apply expertise and drive innovation in web development,
                while contributing effectively to collaborative projects.
              </p>
            </div>
            <div className="flex max-[420px]:flex-col gap-5 lg:gap-[29px] justify-center sm:justify-start  ">
              <a href="/assets/cv/Ankita_Sehrawat_Frontend_Developer_Resume.pdf" download='Ankita_Sehrawat_Frontend_Developer_Resume.pdf' className=" border border-[#15FFEA] p-[10px] min-[850px]:p-[10px_20px] flex items-center justify-center gap-1 min-[850px]:gap-[10px] rounded-[50px] max-sm:w-[200px] max-[460px]:m-auto duration-300 hover:duration-300 hover:bg-[#15FFEA]  group ">
                <p className="text-center uppercase text-[#15FFEA] text-sm min-[850px]:text-base group-hover:text-black ">
                  Download cv
                </p>
                <DownloadIcon />
              </a>
              <div className="flex max-sm:justify-center gap-5">
                <a target="_blank" href="https://github.com/Ankita-Sehrawat/">
                  <span className="border border-[#15FFEA] rounded-[50px]  flex justify-center items-center w-10 h-10 duration-500 hover:-translate-y-3 hover:bg-[#15FFEA] socialHover ">
                    <GithubIcon />
                  </span>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ankita-sehrawat-profile/">
                  <span className="border border-[#15FFEA] rounded-[50px]  flex justify-center items-center w-10 h-10 duration-500 hover:-translate-y-3 hover:bg-[#15FFEA] socialHover ">
                    <LinkdinIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">

            <div className="absolute left-0 lg:-top-12 xl:-top-10 md:-top-16 sm:-top-5 hidden sm:block ">
              <HeroSecElp />
            </div>

            <div className=" after:absolute max-[400px]:w-[280px] max-[400px]:h-[280px] w-[360px] h-[360px] lg:w-[488px] lg:h-[488px] relative after:w-full after:h-full after:animate-spin duration-[2s] after:duration-[2s]  rounded-[700px] after:rounded-[700px] after:border-[4px] after:border-dotted after:border-[#15FFEA] shadow-[-5px_5px_40px_0px_#15FFEA66]  after:top-0 after:left-0 overflow-hidden">
              <Image
                className=" w-full h-[490px] object-cover max-sm:object-center object-top m-auto "
                src={ankita_img}
                alt="img"
              // priority={false}
              />
            </div>
          </div>
        </div>


        {/* ### anylytics ### */}
        <div className="w-full lg:w-[90%] mx-auto flex flex-col min-[400px]:flex-row flex-wrap gap-5 md:gap-16  xl:gap-[100px] items-center justify-center sm:justify-between md:justify-center mt-[70px] mb-8 ">
          {HeroSecArr.map((item, i) => {
            return (
              <div
                key={i}
                className="  min-[440px]:w-5/12 sm:w-3/12 flex  gap-[15px] items-center "
              >
                <h1 className=" ff_roadRage text-5xl lg:text-[64px] font-normal text-[#FFFFFFCC] ">
                  {item.numVal}
                </h1>
                <p className="  text-sm lg:text-lg font-normal text-[#FFFFFFCC] ">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
