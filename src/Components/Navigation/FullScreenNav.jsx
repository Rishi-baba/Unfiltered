import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../context/NavContext";
import Logo from "../common/Logo";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="">
            <div className="lg:w-40 w-30">
              <Logo onClick={() => setNavOpen(false)} />
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-20 h-10 w-10 lg:w-10 relative cursor-pointer"
          >
            <div className="lg:h-24 h-20 lg:w-0.5 w-0.5 -rotate-45 origin-top absolute bg-[#FF0000]"></div>
            <div className="lg:h-24 h-20 lg:w-0.5 w-0.5 right-0 rotate-45 origin-top absolute bg-[#FF0000]"></div>
          </div>
        </div>
        <div className=" py-0">
          <Link
            to="/agence"
            className="block py-0"
            onClick={() => setNavOpen(false)}
          >
            <div className="link origin-top relative border-t border-white cursor-pointer">
              <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                News
              </h1>

              <div className="moveLink absolute text-black flex top-0 bg-[#FF0000] border-0">
                <div className="moveX flex items-center">
                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/mv.mp4`} type="video/mp4" />
                  </video>

                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/rv.mp4`} type="video/mp4" />
                  </video>
                </div>

                <div className="moveX flex items-center">
                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/mv.mp4`} type="video/mp4" />
                  </video>

                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/rv.mp4`} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="/projects"
            className="block py-0"
            onClick={() => setNavOpen(false)}
          >
            <div className="link origin-top relative border-t border-white cursor-pointer">
              <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                Categories
              </h1>

              <div className="moveLink absolute text-black flex top-0 bg-[#FF0000] border-0">
                <div className="moveX flex items-center">
                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    Sports
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/mv.mp4`} type="video/mp4" />
                  </video>

                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    TECHNOLOGY
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/rv.mp4`} type="video/mp4" />
                  </video>
                </div>

                <div className="moveX flex items-center">
                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    POLITICS
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/mv.mp4`} type="video/mp4" />
                  </video>

                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    ENTERTAINMENT
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/rv.mp4`} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/aboutus"
            onClick={() => setNavOpen(false)}
            className="block"
          >
            <div className="link origin-top relative border-t-1 border-b-1 border-white cursor-pointer">
              <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
                About-us
              </h1>
              <div className="moveLink absolute text-black flex top-0 bg-[#FF0000] border-0">
                <div className="moveX flex items-center">
                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/mv.mp4`} type="video/mp4" />
                  </video>

                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/rv.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="moveX flex items-center">
                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/mv.mp4`} type="video/mp4" />
                  </video>
                  <h4 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                    TIMES OF INDIA
                  </h4>
                  <video
                    className="lg:h-30 h-12 rounded-full shrink-0 lg:w-92 w-30 object-cover"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/rv.mp4`} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
