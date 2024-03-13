import { skills } from "../data/skills";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SkillsSection = () => {
  const { width, height } = useWindowDimensions();

  const createBaseplate = () => {
    const rem = width < 640 ? 14 : 16;
    const knobsPerRow = Math.floor(width / (2 * rem));
    const knobsPerColumn = Math.floor((height - 6 * rem) / (2 * rem));
    const totalKnobs = knobsPerRow * knobsPerColumn;
    const centering = width / height / 4;
    const paddingY = width < 450 ? 2 : Math.ceil(knobsPerColumn * centering);
    const paddingX = width < 575 ? 2 : width >= 575 && width < 1000 ? 4 : 3;
    const knobs: any = [];

    // create all the knobs for the whole area
    for (let i = 0; i < totalKnobs; i++) {
      knobs.push(<div key={i} className="knob bg-orange-300"></div>);
    }

    // define on which row to insert first tile
    let rowStart = paddingY;

    // apply the following code to each group of skills
    skills.forEach((skill) => {
      const span = Math.ceil(skill.title.length / 1.5);
      let colStart =
        width < 1000
          ? paddingX
          : Math.ceil(knobsPerRow / skills.length) * (skill.col - 1) + paddingX;

      if (skill.col > 1) {
        if (width < 450) rowStart += 3;
        else if (width < 1000) rowStart += 4;
        else rowStart = paddingY;
      }

      // create the skill group title tile and add it to the collection of knobs
      knobs.push(
        <div
          key={skill.title}
          className={`col-span-${span} tile title`}
          style={{ gridColumnStart: colStart, gridRowStart: rowStart }}
        >
          {skill.title}
        </div>
      );

      // define the gap between the title tile and the content tiles
      rowStart += 2;
      // delete the equivalent of knobs taken up by the new tile
      knobs.splice(0, span);

      // define the width available (in knobs slots) for a skills group
      let availableSlots =
        width < 1000
          ? knobsPerRow - paddingX * 2 + 2
          : Math.floor(knobsPerRow / skills.length) - paddingX;

      // apply the following code to each skill tile
      skill.content.map((s) => {
        // the span for a skill is 2.5 letters per slot
        const span = Math.ceil(s.length / 2.5);

        // delete the slots used for the new tile from the available slots to check if a line break is needed
        availableSlots = availableSlots - span;

        // update the data for next tile
        if (availableSlots < 0) {
          if (width < 1000) {
            availableSlots = knobsPerRow - paddingX - span;
            colStart = paddingX;
          } else {
            availableSlots =
              Math.floor(knobsPerRow / skills.length) - paddingX - span;
            colStart =
              Math.ceil(knobsPerRow / skills.length) * (skill.col - 1) + 3;
          }
          if (width < 450) rowStart += 1;
          else rowStart += 2;
        }

        // create the skill tile and add it to the collection of knobs
        knobs.push(
          <div
            key={s}
            className={`col-span-${span} tile`}
            style={{
              gridColumnStart: colStart,
              gridRowStart: rowStart,
            }}
          >
            {s}
          </div>
        );

        // delete the equivalent of knobs taken up by the new tile
        knobs.splice(0, span);

        colStart = colStart + span;
      });
    });

    return knobs;
  };

  return (
    <section id="skills" className="baseplate">
      {createBaseplate()}
    </section>
  );
};

export default SkillsSection;
