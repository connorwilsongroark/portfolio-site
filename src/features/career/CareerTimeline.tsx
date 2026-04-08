import type { CareerTimelineEntry } from "../../content/career/types";
import { CareerTimelineItemRow } from "./CareerTimelineItem";
import { ExperienceTimelineCard } from "./ExperienceTimelineCard";
import { TimelinePresence } from "./TimelinePresence";

function formatTimelineDate(entry: CareerTimelineEntry) {
  const startedAt = entry.experience.dates.startedAt;
  const endedAt = entry.experience.dates.endedAt;
  const isCurrent = entry.experience.dates.isCurrent;

  if (startedAt && endedAt) {
    return `${startedAt} — ${endedAt}`;
  }

  if (startedAt && (isCurrent || !endedAt)) {
    return `${startedAt} — Present`;
  }

  if (entry.experience.dates.year) {
    return String(entry.experience.dates.year);
  }

  return "Date unavailable";
}

export function CareerTimeline({
  entries,
}: {
  entries: CareerTimelineEntry[];
}) {
  return (
    <div className='space-y-5 sm:space-y-8'>
      {entries.map((entry, index) => (
        <TimelinePresence key={entry.id}>
          <CareerTimelineItemRow
            dateLabel={formatTimelineDate(entry)}
            isLast={index === entries.length - 1}
          >
            {entry.kind === "experience" ? (
              <ExperienceTimelineCard
                experience={entry.experience}
                projects={entry.projects ?? []}
              />
            ) : null}
          </CareerTimelineItemRow>
        </TimelinePresence>
      ))}
    </div>
  );
}
