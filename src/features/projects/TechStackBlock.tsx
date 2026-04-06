import type { ProjectTechStack } from "../../content/projects/types";

type TechStackBlockProps = {
  techStack?: ProjectTechStack;
};

type TechStackItem = {
  label: string;
  values: string[];
};

function buildTechStackItems(techStack?: ProjectTechStack): TechStackItem[] {
  const items: TechStackItem[] = [
    { label: "Languages", values: techStack?.languages ?? [] },
    { label: "Frameworks", values: techStack?.frameworks ?? [] },
    { label: "Libraries", values: techStack?.libraries ?? [] },
    { label: "Tools", values: techStack?.tools ?? [] },
    { label: "Databases", values: techStack?.databases ?? [] },
    { label: "Platforms", values: techStack?.platforms ?? [] },
    { label: "Infrastructure", values: techStack?.infrastructure ?? [] },
  ];

  return items.filter((item) => item.values.length > 0);
}

export function hasTechStackContent(techStack?: ProjectTechStack) {
  return buildTechStackItems(techStack).length > 0;
}

export function TechStackBlock({ techStack }: TechStackBlockProps) {
  const items = buildTechStackItems(techStack);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className='space-y-4'>
      {items.map((item) => (
        <p
          key={item.label}
          className='text-sm leading-7 text-text-muted sm:text-base'
        >
          <span className='font-medium text-text'>{item.label}:</span>{" "}
          {item.values.join(", ")}
        </p>
      ))}
    </div>
  );
}
