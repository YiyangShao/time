import type { Locale, StoryDefinition } from "../types";

export const lateNightSleepStoryByLocale: Record<Locale, StoryDefinition> = {
  zh: {
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
        researchIds: ["globalSleep2024", "screenSleepMeta2024"],
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
  },
  en: {
    id: "late-night-sleep",
    title: "Late-Night Scrolling vs Sleep",
    summary:
      "We say just a little longer, but what gets taken away is not only a few minutes tonight. It is tomorrow's clarity, patience, and energy.",
    theme: "Sleep",
    status: "live",
    scenes: [
      {
        id: "home",
        kicker: "scene 01",
        title: "It was already late, and her body was ready for sleep.",
        line: "The room had gone quiet. The light had softened. All that was left was to let the night do its work.",
        kind: "home",
        actionLabel: "Close your eyes",
      },
      {
        id: "choice",
        kicker: "scene 02",
        title: "She thought: just a little longer.",
        line: "Just a few more swipes. It felt like rest, but it kept pushing sleep a little farther away.",
        kind: "choice",
        actionLabel: "Just a little longer",
      },
      {
        id: "drift",
        kicker: "scene 03",
        title: "She was still in bed, but the night kept moving.",
        line: "Her body was tired. Her eyes were burning. But a cold light was still holding her mind above the surface.",
        kind: "drift",
        actionLabel: "See the cost",
      },
      {
        id: "loss",
        kicker: "scene 04",
        title: "What gets stolen is tomorrow.",
        line: "The next day does not suddenly break. It just feels as if the battery never fully charged.",
        kind: "loss",
        actionLabel: "Take a little sleep back",
      },
      {
        id: "reclaim",
        kicker: "scene 05",
        title: "Put down the phone, and sleep can return.",
        line: "It does not have to be perfect. It only has to let your body remember that the night was made to repair you.",
        kind: "reclaim",
        researchIds: ["globalSleep2024", "screenSleepMeta2024"],
        reclaimOptions: [
          {
            minutes: 15,
            line: "Tonight, at least real sleep does not have to be pushed even farther away. Your body gets a small chance to settle.",
            metrics: [
              { label: "extra sleep a year", value: 91, unit: "hours" },
              { label: "clearer mornings", value: 183, unit: "times" },
              { label: "earlier nights", value: 122, unit: "nights" },
            ],
          },
          {
            minutes: 30,
            line: "Tonight, what returns is not just half an hour. It is a version of tomorrow that feels less dull, less heavy, and more like yourself.",
            metrics: [
              { label: "extra sleep a year", value: 182, unit: "hours" },
              { label: "clearer mornings", value: 365, unit: "times" },
              { label: "earlier nights", value: 243, unit: "nights" },
            ],
          },
          {
            minutes: 45,
            line: "Tonight, what comes back is recovery itself. You are not only watching less. You are finally letting the body sleep more fully.",
            metrics: [
              { label: "extra sleep a year", value: 274, unit: "hours" },
              { label: "clearer mornings", value: 548, unit: "times" },
              { label: "earlier nights", value: 365, unit: "nights" },
            ],
          },
        ],
      },
    ],
  },
};
