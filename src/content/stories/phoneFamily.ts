import type { Locale, StoryDefinition } from "../types";

export const phoneFamilyStoryByLocale: Record<Locale, StoryDefinition> = {
  zh: {
    id: "phone-family",
    title: "刷手机 vs 陪伴家人",
    summary: "一个人回到家，只是低头看了一会儿手机，却错过了孩子举起来的一张画和一顿还热着的晚饭。",
    theme: "陪伴",
    status: "live",
    scenes: [
      {
        id: "home",
        kicker: "scene 01",
        title: "今晚，他其实已经回到了家。",
        line: "饭还热着，孩子刚把画举起来。",
        kind: "home",
        actionLabel: "走进去",
      },
      {
        id: "choice",
        kicker: "scene 02",
        title: "他想，只看一会儿。",
        line: "屏幕亮了一下，他对自己说，就三分钟。",
        kind: "choice",
        actionLabel: "点亮手机",
      },
      {
        id: "drift",
        kicker: "scene 03",
        title: "他没有离开家。",
        line: "客厅还亮着，他的注意力已经被一束冷光带走。",
        kind: "drift",
        actionLabel: "看见结果",
      },
      {
        id: "loss",
        kicker: "scene 04",
        title: "有些错过，没有声音。",
        line: "等他抬头的时候，画已经放下，桌上的热气也散了。",
        kind: "loss",
        actionLabel: "把一点时间拿回来",
      },
      {
        id: "reclaim",
        kicker: "scene 05",
        title: "生活不会一下子改变。",
        line: "但它会从你重新看向他们的那一刻，慢慢回来。",
        kind: "reclaim",
        researchIds: ["globalInternet2025", "globalSocial2025"],
        reclaimOptions: [
          {
            minutes: 15,
            line: "今晚，至少没有再把那句“吃饭吧”留在空气里。",
            metrics: [
              { label: "一年多出", value: 91, unit: "小时" },
              { label: "来得及的晚饭", value: 46, unit: "次" },
              { label: "安静陪伴", value: 110, unit: "段" },
            ],
          },
          {
            minutes: 30,
            line: "今晚，多了一次来得及坐下来的晚饭，也多了一次把那张画看完的时间。",
            metrics: [
              { label: "一年多出", value: 182, unit: "小时" },
              { label: "来得及的晚饭", value: 91, unit: "次" },
              { label: "安静陪伴", value: 218, unit: "段" },
            ],
          },
          {
            minutes: 45,
            line: "今晚，不只是放下手机，而是真的回到了他们身边。",
            metrics: [
              { label: "一年多出", value: 274, unit: "小时" },
              { label: "来得及的晚饭", value: 137, unit: "次" },
              { label: "安静陪伴", value: 329, unit: "段" },
            ],
          },
        ],
      },
    ],
  },
  en: {
    id: "phone-family",
    title: "Phone vs Family",
    summary:
      "He came home, looked down at his phone for a moment, and missed the drawing his child was holding up and a dinner that was still warm.",
    theme: "Presence",
    status: "live",
    scenes: [
      {
        id: "home",
        kicker: "scene 01",
        title: "He was already home tonight.",
        line: "Dinner was still warm. The drawing was already lifted toward him.",
        kind: "home",
        actionLabel: "Step in",
      },
      {
        id: "choice",
        kicker: "scene 02",
        title: "He thought: just a minute.",
        line: "The screen lit up, and he told himself it would only be a few seconds.",
        kind: "choice",
        actionLabel: "Wake the phone",
      },
      {
        id: "drift",
        kicker: "scene 03",
        title: "He never left the room.",
        line: "The living room was still bright, but his attention had already gone somewhere colder.",
        kind: "drift",
        actionLabel: "See what changed",
      },
      {
        id: "loss",
        kicker: "scene 04",
        title: "Some losses make no sound.",
        line: "By the time he looked up, the drawing was down and the heat above the table was gone.",
        kind: "loss",
        actionLabel: "Take a little time back",
      },
      {
        id: "reclaim",
        kicker: "scene 05",
        title: "Life does not change all at once.",
        line: "It starts to return the moment you look back at the people in front of you.",
        kind: "reclaim",
        researchIds: ["globalInternet2025", "globalSocial2025"],
        reclaimOptions: [
          {
            minutes: 15,
            line: "Tonight, at least that quiet 'dinner's ready' did not have to disappear into the air.",
            metrics: [
              { label: "extra time a year", value: 91, unit: "hours" },
              { label: "dinners you catch", value: 46, unit: "times" },
              { label: "moments fully there", value: 110, unit: "moments" },
            ],
          },
          {
            minutes: 30,
            line: "Tonight, there is enough time to sit down in time for dinner and really look at the drawing in their hands.",
            metrics: [
              { label: "extra time a year", value: 182, unit: "hours" },
              { label: "dinners you catch", value: 91, unit: "times" },
              { label: "moments fully there", value: 218, unit: "moments" },
            ],
          },
          {
            minutes: 45,
            line: "Tonight is not just about putting the phone down. It is about truly returning to the people beside you.",
            metrics: [
              { label: "extra time a year", value: 274, unit: "hours" },
              { label: "dinners you catch", value: 137, unit: "times" },
              { label: "moments fully there", value: 329, unit: "moments" },
            ],
          },
        ],
      },
    ],
  },
};
