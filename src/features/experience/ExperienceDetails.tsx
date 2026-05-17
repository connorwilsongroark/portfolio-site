import type { Experience } from "../../content/experience/types";
import { ExperienceHero } from "./components/ExperienceHero";

type ExperienceDetailProps = {
  experience: Experience;
};

export function ExperienceDetails({ experience }: ExperienceDetailProps) {
  return (
    <div>
      <ExperienceHero experience={experience} />
    </div>
  );
}
