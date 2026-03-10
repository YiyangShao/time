import type { ResearchReference } from "./types";

export const researchReferences: Record<string, ResearchReference> = {
  cnReading2024: {
    id: "cnReading2024",
    label: "中国成年国民日均接触手机时长",
    source: "中国新闻出版研究院 / 第二十二次全国国民阅读调查",
    summary: "2024 年中国成年国民日均接触手机时长约 108.76 分钟。",
    methodology:
      "口径是“日均接触手机时长”，更接近整体接触与阅读终端使用，不等于完整屏幕点亮时长。",
    year: "2024",
    url: "https://news.qq.com/rain/a/20250424A0587O00",
    displayValue: "108.76 分钟 / 天",
    recommendedForUi: true,
  },
  questMobile2025: {
    id: "questMobile2025",
    label: "中国移动互联网月人均使用时长",
    source: "QuestMobile 2025 中国移动互联网秋季大报告",
    summary: "2025 年月人均使用时长约 178.2 小时，折算后约 5.9 小时 / 天。",
    methodology:
      "口径是“移动互联网使用时长”，覆盖 App 与移动互联网整体使用，不应与阅读调查的“接触手机时长”直接等同。",
    year: "2025",
    url: "https://www.questmobile.com.cn/research/report/1985984354598359042",
    displayValue: "178.2 小时 / 月",
    recommendedForUi: true,
  },
  globalDigital2025: {
    id: "globalDigital2025",
    label: "全球移动使用背景",
    source: "DataReportal Digital 2025 Global Overview Report",
    summary:
      "Digital 2025 可作为全球移动互联网使用趋势的对照来源，用于给中国数据提供国际背景。",
    methodology:
      "此条在当前版本只作为参考背景，不直接转成强结论数字展示，避免口径混淆。",
    year: "2025",
    url: "https://datareportal.com/reports/digital-2025-global-overview-report",
    recommendedForUi: false,
  },
};

export function getResearchReferences(ids: string[]): ResearchReference[] {
  return ids.map((id) => {
    const reference = researchReferences[id];

    if (!reference) {
      throw new Error(`Missing research reference: ${id}`);
    }

    return reference;
  });
}
