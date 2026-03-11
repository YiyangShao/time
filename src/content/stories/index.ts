import { futureSelfStory } from "./futureSelf";
import type { StoryDefinition } from "../types";
import { lateNightSleepStory } from "./lateNightSleep";
import { phoneFamilyStory } from "./phoneFamily";
import { shortVideoFocusStory } from "./shortVideoFocus";
import { workSelfStory } from "./workSelf";

function createPlaceholderStory(
  id: string,
  title: string,
  summary: string,
  theme: string,
): StoryDefinition {
  return {
    id,
    title,
    summary,
    theme,
    status: "comingSoon",
    scenes: [
      {
        id: `${id}-placeholder`,
        kicker: "curation",
        title: "这个故事正在策展中。",
        line: summary,
        kind: "placeholder",
      },
    ],
  };
}

export const stories: StoryDefinition[] = [
  phoneFamilyStory,
  workSelfStory,
  shortVideoFocusStory,
  lateNightSleepStory,
  futureSelfStory,
];

export function getStoryById(id: string): StoryDefinition {
  const story = stories.find((entry) => entry.id === id);

  if (!story) {
    throw new Error(`Missing story definition: ${id}`);
  }

  return story;
}
