import type { StoryDefinition } from "../types";

export const futureSelfStory: StoryDefinition = {
  id: "future-self",
  title: "即时轻松 vs 长期想成为的人",
  summary: "看起来只是一次次“今天先轻松一下”，累积起来却是在把想成为的那个自己不断往后推。",
  theme: "成长",
  status: "live",
  scenes: [
    {
      id: "home",
      kicker: "scene 01",
      title: "今晚，她本来想靠近未来一点。",
      line: "工具已经摆好，灵感也在。那个更想成为的自己，今晚其实离她很近。",
      kind: "home",
      actionLabel: "开始一下",
    },
    {
      id: "choice",
      kicker: "scene 02",
      title: "她想，今天先轻松一点。",
      line: "只是先躺一下，先刷一会儿，先让自己从疲惫里退出来。",
      kind: "choice",
      actionLabel: "先放空一会儿",
      actionHint: "真正让人成长停住的，常常不是一次放弃，而是这种一晚一晚很合理的后退。",
    },
    {
      id: "drift",
      kicker: "scene 03",
      title: "她没有离开房间。",
      line: "只是那个原本想练习、想靠近、想认真投入的自己，慢慢被推远了。",
      kind: "drift",
      actionLabel: "看见差距",
    },
    {
      id: "loss",
      kicker: "scene 04",
      title: "有些停滞，不会立刻让人痛。",
      line: "你不会在这一晚突然失败，只会在很多个这样的晚上后，发现自己还停在原地。",
      kind: "loss",
      actionLabel: "把一点未来拿回来",
    },
    {
      id: "reclaim",
      kicker: "scene 05",
      title: "未来不是忽然到来的。",
      line: "它来自你一次次把今晚还给真正重要的事情。哪怕只拿回 15 分钟，也是在往前走。",
      kind: "reclaim",
      researchIds: ["youthLearning2025", "futureSelfContinuity2024"],
      reclaimOptions: [
        {
          minutes: 15,
          line: "今晚，至少不再只是停在想象里。你给那个更想成为的自己，留出了一小段真正发生的时间。",
          metrics: [
            { label: "一年多出", value: 91, unit: "小时" },
            { label: "技能练习", value: 183, unit: "次" },
            { label: "作品草稿", value: 122, unit: "份" },
          ],
        },
        {
          minutes: 30,
          line: "今晚，未来不再只是计划表上的一行字，而是开始变成能被积累、能被看见的动作。",
          metrics: [
            { label: "一年多出", value: 182, unit: "小时" },
            { label: "技能练习", value: 365, unit: "次" },
            { label: "作品草稿", value: 243, unit: "份" },
          ],
        },
        {
          minutes: 45,
          line: "今晚，你没有选择最轻松的路，而是重新站回了那个长期想成为的人这边。",
          metrics: [
            { label: "一年多出", value: 274, unit: "小时" },
            { label: "技能练习", value: 548, unit: "次" },
            { label: "作品草稿", value: 365, unit: "份" },
          ],
        },
      ],
    },
  ],
};
