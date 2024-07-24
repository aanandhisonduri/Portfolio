import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const textRef = useRef(); // Reference for the new text
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        textRef.current, // Add animation for the new text
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h4
          ref={h11}
          className="text-lg text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-bold"
        >
          Hi,👋<br />My Name is<br />
        </h4>
        <h4
          ref={h12}
          className="text-lg bg-clip-text bg-gradient text-transparent md:text-xl xl:text-2xl xl:leading-tight font-bold"
        >
          {name}
        </h4>
        <h4
          ref={h13}
          className="text-lg text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-bold"
        >
          {tagline}
        </h4>
        <h1
          ref={textRef} // Attach the reference here
          className="text-sm md:text-base xl:text-lg mt-4"
        >
          I’m glad you’re here. Explore my projects and see how I tackle tech challenges with passion and expertise. From my work experience to the skills I've honed, everything is here to showcase the innovative solutions I’m excited about.
          <br /><br />
          If you’re interested in discussing tech, exploring opportunities, or just connecting, don’t hesitate to reach out.
        </h1>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          className="w-2/3 md:w-1/2 md:ml-auto"
          src={img}
          alt="Aanandhi"
        />
      </div>
    </main>
  );
}

export default Home;
