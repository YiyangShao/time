import type { Locale, StoryDefinition } from "../types";

export const shortVideoFocusStoryByLocale: Record<Locale, StoryDefinition> = {
  zh: {
    id: "short-video-focus",
    title: "短视频 vs 专注力",
    summary: "真正被切碎的，往往不是时间，而是一个人好不容易才安静下来的注意力。",
    theme: "专注",
    status: "live",
    scenes: [
      {
        id: "home",
        kicker: "scene 01",
        title: "今晚，她本来想把心静下来。",
        line: "灯已经打开，书也摊开了。专注还在，只是还很脆弱。",
        kind: "home",
        actionLabel: "坐下来",
      },
      {
        id: "choice",
        kicker: "scene 02",
        title: "她想，只刷一小会儿。",
        line: "一段很短的视频，看起来不像打断，更像是先放松一下。",
        kind: "choice",
        actionLabel: "刷一下",
      },
      {
        id: "drift",
        kicker: "scene 03",
        title: "她还坐在桌前。",
        line: "书页没有动，笔也没继续写，但脑子已经被一段段更快的刺激切成了碎片。",
        kind: "drift",
        actionLabel: "看见影响",
      },
      {
        id: "loss",
        kicker: "scene 04",
        title: "被拿走的，不只是这几分钟。",
        line: "更难回来的，是重新沉进去的能力。整晚都在，真正进入状态的那一刻却没有来。",
        kind: "loss",
        actionLabel: "把一点专注拿回来",
      },
      {
        id: "reclaim",
        kicker: "scene 05",
        title: "专注不会立刻回来，但会慢慢回来。",
        line: "从放下那块不断刷新你的屏幕开始，大脑才有机会重新回到一条完整的线里。",
        kind: "reclaim",
        researchIds: ["globalSocial2025", "globalAttentionStudy2024"],
        reclaimOptions: [
          {
            minutes: 15,
            line: "今晚，至少可以让自己重新读完几页，不再一直被下一条推送往前拖。",
            metrics: [
              { label: "一年多出", value: 91, unit: "小时" },
              { label: "完整阅读", value: 122, unit: "晚" },
              { label: "专注书写", value: 183, unit: "段" },
            ],
          },
          {
            minutes: 30,
            line: "今晚，可以重新进入一段不被打断的专注。不是更忙，而是终于能把一个念头走完。",
            metrics: [
              { label: "一年多出", value: 182, unit: "小时" },
              { label: "完整阅读", value: 243, unit: "晚" },
              { label: "专注书写", value: 365, unit: "段" },
            ],
          },
          {
            minutes: 45,
            line: "今晚，拿回来的不只是时间，而是重新把注意力交还给自己的能力。",
            metrics: [
              { label: "一年多出", value: 274, unit: "小时" },
              { label: "完整阅读", value: 365, unit: "晚" },
              { label: "专注书写", value: 548, unit: "段" },
            ],
          },
        ],
      },
    ],
  },
  en: {
    id: "short-video-focus",
    title: "Short Videos vs Focus",
    summary:
      "What gets cut into pieces is often not time itself, but the fragile attention a person was finally about to settle into.",
    theme: "Focus",
    status: "live",
    scenes: [
      {
        id: "home",
        kicker: "scene 01",
        title: "Tonight, she meant to settle down.",
        line: "The lamp was on. The book was open. Focus was still there, but it was fragile.",
        kind: "home",
        actionLabel: "Sit down",
      },
      {
        id: "choice",
        kicker: "scene 02",
        title: "She thought: just one clip.",
        line: "A short video did not feel like an interruption. It felt more like a quick way to loosen up first.",
        kind: "choice",
        actionLabel: "Scroll once",
      },
      {
        id: "drift",
        kicker: "scene 03",
        title: "She was still at the desk.",
        line: "The page had not moved. The pen had not moved. But her mind had already been cut into faster and faster fragments.",
        kind: "drift",
        actionLabel: "See the effect",
      },
      {
        id: "loss",
        kicker: "scene 04",
        title: "It takes more than minutes.",
        line: "What is harder to get back is the ability to sink in again. The whole night was there, but the moment of deep focus never arrived.",
        kind: "loss",
        actionLabel: "Take a little focus back",
      },
      {
        id: "reclaim",
        kicker: "scene 05",
        title: "Focus does not return all at once.",
        line: "It starts when you put down the screen that keeps refreshing your attention and let your thoughts become one line again.",
        kind: "reclaim",
        researchIds: ["globalSocial2025", "globalAttentionStudy2024"],
        reclaimOptions: [
          {
            minutes: 15,
            line: "Tonight, at least a few pages can be finished before the next recommendation pulls you away again.",
            metrics: [
              { label: "extra time a year", value: 91, unit: "hours" },
              { label: "full reading nights", value: 122, unit: "nights" },
              { label: "deep writing blocks", value: 183, unit: "blocks" },
            ],
          },
          {
            minutes: 30,
            line: "Tonight, you can enter a stretch of concentration that is not being interrupted. It is not about being busier. It is about getting one thought all the way through.",
            metrics: [
              { label: "extra time a year", value: 182, unit: "hours" },
              { label: "full reading nights", value: 243, unit: "nights" },
              { label: "deep writing blocks", value: 365, unit: "blocks" },
            ],
          },
          {
            minutes: 45,
            line: "Tonight, what returns is not only time, but the ability to place your attention back in your own hands.",
            metrics: [
              { label: "extra time a year", value: 274, unit: "hours" },
              { label: "full reading nights", value: 365, unit: "nights" },
              { label: "deep writing blocks", value: 548, unit: "blocks" },
            ],
          },
        ],
      },
    ],
  },
};
