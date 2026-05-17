import type { Experience } from "../../../content/experience/types";

type ExperienceHeroProps = {
  experience: Experience;
};
export function ExperienceHero({ experience }: ExperienceHeroProps) {
  return (
    <section>
      <div>
        <p>{experience.company}</p>
        <h1>{experience.title}</h1>
        <p>{experience.tagline}</p>
      </div>
      <div>{/* Dates, employment type, workplace type, status */}</div>
    </section>
  );
}
