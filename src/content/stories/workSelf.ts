import type { StoryDefinition } from "../types";

export const workSelfStory: StoryDefinition = {
  id: "work-self",
  title: "工作 vs 留给自己",
  summary: "不是不努力，而是一个人总说再改一点、再回一封，最后连原本属于自己的晚上也被工作吃掉了。",
  theme: "自我",
  status: "live",
  scenes: [
    {
      id: "home",
      kicker: "scene 01",
      title: "夜已经很深了，他还坐在工位上。",
      line: "窗外的灯亮了很久，桌上那点原本留给自己的时间，已经快看不见了。",
      kind: "home",
      actionLabel: "继续看下去",
    },
    {
      id: "choice",
      kicker: "scene 02",
      title: "他想，再改最后一点。",
      line: "只是再回一封消息，再补一页，再把今天拖长一点。",
      kind: "choice",
      actionLabel: "继续加一会儿",
      actionHint: "真正偷走生活的，常常不是大事，而是这种“很快就好”的自我说服。",
    },
    {
      id: "drift",
      kicker: "scene 03",
      title: "他没有离开公司。",
      line: "晚上没有发生什么，只是慢慢变成了待办、修改和下一封未读。",
      kind: "drift",
      actionLabel: "看见代价",
    },
    {
      id: "loss",
      kicker: "scene 04",
      title: "有些被错过的，不会提醒你。",
      line: "跑鞋还在包里，书也没翻开。又一个本来属于自己的晚上，已经过去了。",
      kind: "loss",
      actionLabel: "把一点时间拿回来",
    },
    {
      id: "reclaim",
      kicker: "scene 05",
      title: "不是不工作，而是别把自己全部交出去。",
      line: "哪怕只是下班后的 15 分钟，生活也会从这些被拿回来的小块里，重新长出来。",
      kind: "reclaim",
      researchIds: ["cnWorkHours2025", "cnTimeUse2024"],
      reclaimOptions: [
        {
          minutes: 15,
          line: "今晚，至少还能给自己留下一段不被消息继续追上的时间。",
          metrics: [
            { label: "一年多出", value: 91, unit: "小时" },
            { label: "下班后散步", value: 183, unit: "次" },
            { label: "完整阅读", value: 122, unit: "晚" },
          ],
        },
        {
          minutes: 30,
          line: "今晚，不用把整个夜晚都交给工作。你还能把呼吸、身体和注意力慢慢拿回来。",
          metrics: [
            { label: "一年多出", value: 182, unit: "小时" },
            { label: "下班后散步", value: 365, unit: "次" },
            { label: "完整阅读", value: 243, unit: "晚" },
          ],
        },
        {
          minutes: 45,
          line: "今晚，工作的边界终于停在了门里，而你自己，重新回到了门外的生活。",
          metrics: [
            { label: "一年多出", value: 274, unit: "小时" },
            { label: "下班后散步", value: 548, unit: "次" },
            { label: "完整阅读", value: 365, unit: "晚" },
          ],
        },
      ],
    },
  ],
};
