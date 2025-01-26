import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const HighLights = () => {
  useGSAP(() => {
    gsap.to("#tittle" , {
      opacity: 1,
      y: 0,
      delay:1,
      duration:1,
      scrollTrigger: {
        trigger: "#tittle",
        toggleActions: "restart none none none",
      },
    })
    gsap.to(".link" , {
      opacity:1,
      y:0,
      duration:1,
      delay:1.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".link",
        toggleActions: "restart none none none",
      },
    })
    
  },[])
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="tittle" className="section-heading">Get The HighLights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch The Film
              <img src={watchImg} alt="img" className="ml-2"/>
            </p>
            <p className="link">
              Watch The Event
              <img src={rightImg} alt="right" className="ml-2"/>
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default HighLights;
