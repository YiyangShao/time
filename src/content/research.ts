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
  cnInternetUse2024: {
    id: "cnInternetUse2024",
    label: "居民每日互联网使用平均时间",
    source: "国家统计局 / 第三次全国时间利用调查公报",
    summary: "国家统计局调查显示，我国居民每日使用互联网平均时间达到 5 小时 37 分钟。",
    methodology:
      "口径是居民每日互联网使用平均时间，覆盖更广泛的上网活动，适合用来呈现数字注意力被占据的总体强度。",
    year: "2024",
    url: "https://www.stats.gov.cn/zwfwck/sjfb/202410/t20241031_1957215.html",
    displayValue: "5 小时 37 分 / 天",
    recommendedForUi: true,
  },
  cnWorkHours2025: {
    id: "cnWorkHours2025",
    label: "全国企业就业人员周平均工作时间",
    source: "国家统计局",
    summary: "2025 年全国企业就业人员周平均工作时间为 48.6 小时。",
    methodology:
      "口径是企业就业人员周平均工作时间，用于呈现“工作挤占生活”的现实背景，不直接等同于每个人的固定工时。",
    year: "2025",
    url: "https://www.stats.gov.cn/zt_18555/zthd/lhfw/2025/2025_qgsjlydc/202501/t20250127_1958535.html",
    displayValue: "48.6 小时 / 周",
    recommendedForUi: true,
  },
  cnTimeUse2024: {
    id: "cnTimeUse2024",
    label: "居民日均个人自由支配活动时间",
    source: "国家统计局 / 第三次全国时间利用调查公报",
    summary: "第三次全国时间利用调查显示，居民日均个人自由支配活动时间为 3 小时 24 分钟。",
    methodology:
      "该调查覆盖全国 31 个省区市及新疆生产建设兵团，可用来对照“真正能留给自己”的时间有多有限。",
    year: "2024",
    url: "https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957216.html",
    displayValue: "3 小时 24 分 / 天",
    recommendedForUi: true,
  },
  cnShortVideo2025: {
    id: "cnShortVideo2025",
    label: "短视频应用人均单日使用时长",
    source: "中国网络视听发展研究报告（2025）",
    summary: "截至 2024 年 12 月，短视频应用人均单日使用时长达 156 分钟，居所有互联网应用首位。",
    methodology:
      "口径是短视频应用人均单日使用时长，用来呈现短刺激内容对日常注意力分配的强占用，但不直接等同于注意力损伤本身。",
    year: "2025",
    url: "https://www.cnfin.com/kx/detail/20250326/4206653_1.html",
    displayValue: "156 分钟 / 天",
    recommendedForUi: true,
  },
  focusAttentionStudy2024: {
    id: "focusAttentionStudy2024",
    label: "短视频使用与注意功能研究",
    source: "Frontiers in Human Neuroscience",
    summary:
      "一项 2024 年研究指出，手机短视频使用与注意功能、自我控制等指标存在负向关系，提示高频短刺激可能与注意控制变差相关。",
    methodology:
      "该研究提供的是相关性与神经科学层面的证据，不应直接表述为单向确定因果，但足以作为“专注被削弱”的现实背景。",
    year: "2024",
    url: "https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2024.1383913/full",
    displayValue: "注意控制相关下降",
    recommendedForUi: true,
  },
  cnSleepHealth2025: {
    id: "cnSleepHealth2025",
    label: "中国成年人平均睡眠时长",
    source: "中国睡眠健康研究白皮书（2025）",
    summary: "2025 年报告显示，中国成年人平均睡眠时长约为 6.85 小时，仍低于很多人理想中的充足睡眠水平。",
    methodology:
      "该数据适合用于说明“整体睡眠不足”是广泛存在的现实背景，但不同报告口径之间可能存在细微差异，不应机械对比。",
    year: "2025",
    url: "https://finance.sina.com.cn/tech/roll/2025-11-30/doc-infzeqsw7502258.shtml?froms=ggmp",
    displayValue: "6.85 小时 / 天",
    recommendedForUi: true,
  },
  screenSleepMeta2024: {
    id: "screenSleepMeta2024",
    label: "电子屏幕使用与睡眠质量",
    source: "Journal of Medical Internet Research",
    summary:
      "一项 2024 年系统综述与元分析指出，电子媒介使用与更差的睡眠质量、睡眠时长和入睡时间延后相关。",
    methodology:
      "该研究提供的是综述与相关性层面的总体证据，可作为“睡前刷屏会拖慢入睡、削弱睡眠质量”的研究背景，但不应夸大为单一因果。",
    year: "2024",
    url: "https://www.jmir.org/2024/1/e48356/",
    displayValue: "睡眠质量相关下降",
    recommendedForUi: true,
  },
  youthLearning2025: {
    id: "youthLearning2025",
    label: "青年持续学习意愿",
    source: "中国青年报 / 中国青年网调查",
    summary: "2025 年调查显示，93.5% 的受访者在工作后仍会继续学习，79.8% 的受访者为新一年制定了学习计划。",
    methodology:
      "该数据适合用于说明“很多人都想继续成长”，但真正困难的不是认同成长，而是把时间稳定留给它。",
    year: "2025",
    url: "https://news.youth.cn/jsxw/202501/t20250103_15750513.htm",
    displayValue: "93.5% 继续学习",
    recommendedForUi: true,
  },
  futureSelfContinuity2024: {
    id: "futureSelfContinuity2024",
    label: "未来自我连续性与跨期选择",
    source: "Frontiers in Psychology",
    summary:
      "一项 2024 年研究指出，与未来自我连接感更强的人，更不容易偏向即时选项，在跨期决策中更愿意为长期收益做选择。",
    methodology:
      "该研究更适合作为“为什么人会反复输给眼前轻松”的心理学背景，强调的是相关机制，不应夸大为单一决定因素。",
    year: "2024",
    url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1437065/full",
    displayValue: "更少偏向即时选项",
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
