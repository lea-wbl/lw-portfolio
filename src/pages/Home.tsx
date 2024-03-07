import React, { useEffect } from "react";
import Brick from "../components/Brick";
//import Luv from "../components/Luv";

function Home() {
  const totalKnobs = () => {
    const h = window.innerWidth / 32;
    return h * 12;
  };

  const knobsNb = totalKnobs();

  const plate = () => {
    const knobs = [];
    for (let i = 0; i < knobsNb; i++) {
      if (i === 126) knobs.push(<div key={i} className="col-span-2 bg-orange-600 text-center bloop">React</div>);
      else if (i === 132) knobs.push(<div key={i} className="col-span-3 bg-orange-600 text-center bloop">Angular</div>);
      else knobs.push(<div key={i} className="knob bg-orange-300"></div>);  
    }
    return knobs;
  };

  return (
    <div>
      <header className="logo">Léa Weibel</header>
      {/* WELCOME block */}
      <div className="bg-orange-600 plate">{plate()}</div>

      {/* RESUME blocks */}
      <div className="flex px-12 py-8">
        <div className="flex-1 flex items-center">
          <h3 className="self-start title">Experience</h3>
          <div>
            <Brick title="FRONT-END DEVELOPER" subtitle="Wobee - Paris, FR" startDate="déc. 2023" endDate="mars 2024" side="left"/>
            <Brick title="FULLSTACK DEVELOPER" subtitle="UMI - Lyon, FR" startDate="mars 2022" endDate="nov. 2023" side="left"/>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <h3 className="self-start title">Formation</h3>
          <Brick title="Concepteur Développeur d'Applications" subtitle="Wild Code School" startDate="mars 2022" endDate="mars 2023" side="right"/>
          <Brick title="Développeur Web et Web Mobile" subtitle="Wild Code School" startDate="sept. 2021" endDate="fév. 2022" side="right"/>
        </div>
      </div>

      {/* SKILLS block */}
      <div className="bg-orange-200">Skills</div>
      <div className="bg-orange-200 plate">{plate()}</div>

      {/* REFERENCES block */}
      <div>References</div>
      <div>Contact me form</div>
    </div>
    // <div className="flex flex-col items-center justify-center h-screen w-full">
    //   <Luv />
    // </div>
  );
}

export default Home;
