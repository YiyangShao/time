import type { StoryDefinition } from "../types";

export const lateNightSleepStory: StoryDefinition = {
  id: "late-night-sleep",
  title: "熬夜刷屏 vs 睡眠",
  summary: "总说再看一会儿，最后被拖走的不是这一晚几分钟，而是第二天清醒活着的力气。",
  theme: "睡眠",
  status: "live",
  scenes: [
    {
      id: "home",
      kicker: "scene 01",
      title: "夜已经够晚了，身体其实准备睡了。",
      line: "房间安静下来，灯也留成了适合休息的亮度。只差把自己真正交给这一晚。",
      kind: "home",
      actionLabel: "闭上眼",
    },
    {
      id: "choice",
      kicker: "scene 02",
      title: "她想，再看一会儿。",
      line: "只是再刷几条。看起来像是放松，实际上却把睡意重新推远了一点。",
      kind: "choice",
      actionLabel: "再看一会儿",
      actionHint: "最容易被低估的，不是熬夜本身，而是这种让睡眠不断后退的小动作。",
    },
    {
      id: "drift",
      kicker: "scene 03",
      title: "人还躺在床上，夜却越来越深。",
      line: "身体已经很累了，眼睛发涩，脑子却还被一束冷光抓着，不肯真正沉下去。",
      kind: "drift",
      actionLabel: "看见代价",
    },
    {
      id: "loss",
      kicker: "scene 04",
      title: "被偷走的，是明天。",
      line: "第二天不是突然坏掉的。只是整个人像没有充上电，清醒、耐心和恢复力都被提前拿走了。",
      kind: "loss",
      actionLabel: "把一点睡眠拿回来",
    },
    {
      id: "reclaim",
      kicker: "scene 05",
      title: "放下手机，睡眠才会回来。",
      line: "不是立刻变得完美，而是让身体重新记起：夜晚本来就是用来修复你的。",
      kind: "reclaim",
      researchIds: ["cnSleepHealth2025", "screenSleepMeta2024"],
      reclaimOptions: [
        {
          minutes: 15,
          line: "今晚，至少没有再把真正的睡意拖到更晚。身体多了一小段安静下来的机会。",
          metrics: [
            { label: "一年多睡", value: 91, unit: "小时" },
            { label: "清醒早晨", value: 183, unit: "次" },
            { label: "提前入睡", value: 122, unit: "晚" },
          ],
        },
        {
          minutes: 30,
          line: "今晚，多出来的不只是半小时，而是第二天没那么沉、没那么钝、能更像自己的一点状态。",
          metrics: [
            { label: "一年多睡", value: 182, unit: "小时" },
            { label: "清醒早晨", value: 365, unit: "次" },
            { label: "提前入睡", value: 243, unit: "晚" },
          ],
        },
        {
          minutes: 45,
          line: "今晚，真正被拿回来的，是恢复力。你不是少看了什么，而是终于让身体完整睡了一些。",
          metrics: [
            { label: "一年多睡", value: 274, unit: "小时" },
            { label: "清醒早晨", value: 548, unit: "次" },
            { label: "提前入睡", value: 365, unit: "晚" },
          ],
        },
      ],
    },
  ],
};
