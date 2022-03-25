import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <h2 className="h2">
        На этом видео вы можете узнать, какого питомца лучше взять себе.
      </h2>
      <div>
        <iframe
          width="650"
          height="315"
          src="https://www.youtube.com/embed/9taj4TuR3VA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Section;
