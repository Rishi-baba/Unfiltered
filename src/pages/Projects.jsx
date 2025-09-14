import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      text1: "Technology",
      image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      text2: "Sports",
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      text1: "Crime",
      image2: "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
      text2: "Politics",
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      text1: "International",
      image2: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      text2: "Entertainment",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: "100px",
      stagger: { amount: 1 },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 150%",
        end: "top -200%",
        scrub: true,
      },
    });
  });

  return (
    <div className="lg:p-4 p-2">
      <div className="pt-[25vh]">
        <h2 className="font-[font2] lg:text-[8vw] text-5xl uppercase">
          Categories
        </h2>
      </div>
      <div className="lol mt-10">
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full lg:h-[200px] h-[150px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
          >
            <ProjectCard
              image1={elem.image1}
              text1={elem.text1}
              image2={elem.image2}
              text2={elem.text2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
