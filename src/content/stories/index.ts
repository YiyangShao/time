import type { StoryDefinition } from "../types";
import { phoneFamilyStory } from "./phoneFamily";

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
  createPlaceholderStory(
    "work-self",
    "工作 vs 留给自己",
    "不是不努力，而是忙碌慢慢吞掉了本来属于自己的时间。",
    "自我",
  ),
  createPlaceholderStory(
    "short-video-focus",
    "短视频 vs 专注力",
    "真正被切碎的，往往不是时间，而是一个人完整思考的能力。",
    "专注",
  ),
  createPlaceholderStory(
    "late-night-sleep",
    "熬夜刷屏 vs 睡眠",
    "总说再看一会儿，最后被偷走的是第二天清醒地活着的力气。",
    "睡眠",
  ),
  createPlaceholderStory(
    "future-self",
    "即时轻松 vs 长期想成为的人",
    "看起来只是一次次轻松放空，累积起来却是对未来的不断推迟。",
    "成长",
  ),
];

export function getStoryById(id: string): StoryDefinition {
  const story = stories.find((entry) => entry.id === id);

  if (!story) {
    throw new Error(`Missing story definition: ${id}`);
  }

  return story;
}
