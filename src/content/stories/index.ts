import type { Locale, StoryDefinition } from "../types";
import { futureSelfStoryByLocale } from "./futureSelf";
import { lateNightSleepStoryByLocale } from "./lateNightSleep";
import { phoneFamilyStoryByLocale } from "./phoneFamily";
import { shortVideoFocusStoryByLocale } from "./shortVideoFocus";
import { workSelfStoryByLocale } from "./workSelf";

const storiesByLocale: Record<Locale, StoryDefinition[]> = {
  zh: [
    phoneFamilyStoryByLocale.zh,
    workSelfStoryByLocale.zh,
    shortVideoFocusStoryByLocale.zh,
    lateNightSleepStoryByLocale.zh,
    futureSelfStoryByLocale.zh,
  ],
  en: [
    phoneFamilyStoryByLocale.en,
    workSelfStoryByLocale.en,
    shortVideoFocusStoryByLocale.en,
    lateNightSleepStoryByLocale.en,
    futureSelfStoryByLocale.en,
  ],
};

export function getStories(locale: Locale): StoryDefinition[] {
  return storiesByLocale[locale];
}

export function getStoryById(locale: Locale, id: string): StoryDefinition {
  const story = storiesByLocale[locale].find((entry) => entry.id === id);

  if (!story) {
    throw new Error(`Missing story definition for locale ${locale}: ${id}`);
  }

  return story;
}
