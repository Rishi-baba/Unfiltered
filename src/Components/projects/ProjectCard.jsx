import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    // Pass category as query param
    navigate(`/agence?filter=${category}`);
  };

  const getCategoryVideo = (category) => {
    const videoMap = {
      "Technology": `${import.meta.env.BASE_URL}videos/v1.mp4`,
      "Sports": `${import.meta.env.BASE_URL}videos/v2.mp4`,
      "Crime": `${import.meta.env.BASE_URL}videos/v3.mp4`,
      "Politics": `${import.meta.env.BASE_URL}videos/v4.mp4`,
      "International": `${import.meta.env.BASE_URL}videos/v5.mp4`,
      "Entertainment": `${import.meta.env.BASE_URL}videos/v1.mp4` // fallback
    };
    return videoMap[category] || `${import.meta.env.BASE_URL}videos/v1.mp4`;
  };

  return (
    <>
      <div 
        className="lg:w-1/2 group relative rounded-md overflow-hidden cursor-pointer"
        onClick={() => handleCardClick(props.text1)}
      >
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={getCategoryVideo(props.text1)} type="video/mp4" />
        </video>
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30">
          <h2 className="uppercase text-sm md:text-2xl font-[font1] border px-4 py-2 text-white border-white rounded-full">
            {props.text1}
          </h2>
        </div>
      </div>

      <div 
        className="lg:w-1/2 group relative rounded-md overflow-hidden cursor-pointer"
        onClick={() => handleCardClick(props.text2)}
      >
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={getCategoryVideo(props.text2)} type="video/mp4" />
        </video>
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30">
          <h2 className="uppercase text-sm md:text-2xl font-[font1] border px-4 py-2 text-white border-white rounded-full">
            {props.text2}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
