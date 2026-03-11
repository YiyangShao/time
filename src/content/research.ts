import type { Locale, ResearchReference } from "./types";

const researchReferencesByLocale: Record<Locale, Record<string, ResearchReference>> = {
  zh: {
    globalInternet2025: {
      id: "globalInternet2025",
      label: "全球网民日均上网时长",
      source: "DataReportal / Digital 2025 Global Overview Report",
      summary: "DataReportal 2025 显示，全球互联网用户平均每天上网 6 小时 38 分钟，相当于一年中有 100 多天处在线上。",
      methodology:
        "口径覆盖 16 至 64 岁网民在各类联网设备上的日均上网时长，适合呈现注意力被数字世界整体占据的强度。",
      year: "2025",
      url: "https://datareportal.com/reports/digital-2025-global-overview-report",
      displayValue: "6 小时 38 分 / 天",
      recommendedForUi: true,
    },
    globalSocial2025: {
      id: "globalSocial2025",
      label: "全球日均社交媒体使用时长",
      source: "DataReportal / Digital 2025",
      summary: "全球网民平均每天花约 2 小时 21 分钟在社交媒体上，社交媒体占据了全部上网时间的三分之一以上。",
      methodology:
        "口径基于多国 16 至 64 岁网民的社交媒体使用时长调查，适合呈现碎片化刷屏对日常陪伴与注意力的挤压。",
      year: "2025",
      url: "https://datareportal.com/reports/digital-2025-sub-section-state-of-social?rq=social+media+2025",
      displayValue: "2 小时 21 分 / 天",
      recommendedForUi: true,
    },
    oecdLongHours2024: {
      id: "oecdLongHours2024",
      label: "经合组织员工超长工时占比",
      source: "OECD Better Life Index / Work-Life Balance",
      summary: "OECD 指出，平均有 10% 的员工每周有偿工作时间达到或超过 50 小时。",
      methodology:
        "该口径覆盖 OECD 国家雇员的超长工时比例，适合用于呈现“工作挤占生活”的国际背景，但不等同于所有人每周都固定工作 50 小时。",
      year: "2024",
      url: "https://www.oecdbetterlifeindex.org/topics/work-life-balance/",
      displayValue: "10% 每周 50+ 小时",
      recommendedForUi: true,
    },
    oecdLeisure2024: {
      id: "oecdLeisure2024",
      label: "经合组织全职工作者个人照料与休闲时间",
      source: "OECD Better Life Index / Work-Life Balance",
      summary: "OECD 统计显示，全职工作者平均每天约有 15 小时用于个人照料和休闲。",
      methodology:
        "该指标将睡眠、吃饭、个人照料与休闲活动合并统计，适合用来提醒人们：真正可自由支配的时间其实比看上去更少。",
      year: "2024",
      url: "https://www.oecdbetterlifeindex.org/topics/work-life-balance/",
      displayValue: "15 小时 / 天",
      recommendedForUi: true,
    },
    globalAttentionStudy2024: {
      id: "globalAttentionStudy2024",
      label: "短视频使用与注意控制研究",
      source: "Frontiers in Human Neuroscience",
      summary:
        "一项 2024 年研究指出，手机短视频使用与注意功能、自我控制等指标存在负向关系，提示高频短刺激可能削弱注意控制。",
      methodology:
        "该研究提供的是相关性与神经科学层面的证据，不应被表述为单向确定因果，但足以构成“专注被削弱”的全球研究背景。",
      year: "2024",
      url: "https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2024.1383913/full",
      displayValue: "注意控制相关下降",
      recommendedForUi: true,
    },
    globalSleep2024: {
      id: "globalSleep2024",
      label: "17 个市场中达到 7 小时睡眠的人群比例",
      source: "YouGov Global Profiles 2024",
      summary: "YouGov 在 17 个国际市场的调查显示，只有略高于一半的受访者表示典型夜晚能睡到 7 小时或以上。",
      methodology:
        "该数据反映的是跨市场自报睡眠时长，适合用于呈现“充足睡眠并不轻易得到”的全球背景，不应与医学测量值机械比较。",
      year: "2024",
      url: "https://business.yougov.com/content/48914-how-long-do-most-people-sleep-globally-and-which-regions-feel-most-sleep-deprived-2024",
      displayValue: "仅略高于 50%",
      recommendedForUi: true,
    },
    screenSleepMeta2024: {
      id: "screenSleepMeta2024",
      label: "电子屏幕使用与睡眠质量",
      source: "Journal of Medical Internet Research",
      summary:
        "一项 2024 年系统综述与元分析指出，电子媒介使用与更差的睡眠质量、睡眠时长下降和入睡延后相关。",
      methodology:
        "该研究是综述与元分析层面的总体证据，适合作为“睡前刷屏会拖慢入睡、削弱睡眠质量”的研究背景，但不应夸大为单一因果。",
      year: "2024",
      url: "https://www.jmir.org/2024/1/e48356/",
      displayValue: "睡眠质量相关下降",
      recommendedForUi: true,
    },
    wefReskilling2025: {
      id: "wefReskilling2025",
      label: "全球劳动者未来再培训需求",
      source: "World Economic Forum / Future of Jobs Report 2025",
      summary: "世界经济论坛预计，到 2030 年将有 59% 的劳动者需要接受再培训。",
      methodology:
        "该口径来自全球就业与技能趋势报告，适合说明“未来需要被持续投入”，但不应把再培训需求机械等同于个人即时压力。",
      year: "2025",
      url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/",
      displayValue: "59% 需要再培训",
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
  },
  en: {
    globalInternet2025: {
      id: "globalInternet2025",
      label: "Average daily time online worldwide",
      source: "DataReportal / Digital 2025 Global Overview Report",
      summary:
        "DataReportal reports that the average internet user worldwide spends 6 hours and 38 minutes online each day, which adds up to more than 100 days a year.",
      methodology:
        "This measure covers internet users aged 16 to 64 across connected devices and works well as a broad picture of how strongly digital life occupies attention.",
      year: "2025",
      url: "https://datareportal.com/reports/digital-2025-global-overview-report",
      displayValue: "6h 38m / day",
      recommendedForUi: true,
    },
    globalSocial2025: {
      id: "globalSocial2025",
      label: "Average daily social media time worldwide",
      source: "DataReportal / Digital 2025",
      summary:
        "The average internet user now spends roughly 2 hours and 21 minutes a day on social media, accounting for more than one third of total time online.",
      methodology:
        "This multi-country survey covers social media use among internet users aged 16 to 64 and is a useful proxy for how fragmented scrolling competes with presence and focus.",
      year: "2025",
      url: "https://datareportal.com/reports/digital-2025-sub-section-state-of-social?rq=social+media+2025",
      displayValue: "2h 21m / day",
      recommendedForUi: true,
    },
    oecdLongHours2024: {
      id: "oecdLongHours2024",
      label: "Employees working very long hours in OECD countries",
      source: "OECD Better Life Index / Work-Life Balance",
      summary: "The OECD reports that 10% of employees across member countries work 50 or more hours a week in paid work.",
      methodology:
        "This indicator captures the share of employees working very long paid hours across OECD countries. It is useful for showing structural pressure from work, but should not be read as everyone's fixed schedule.",
      year: "2024",
      url: "https://www.oecdbetterlifeindex.org/topics/work-life-balance/",
      displayValue: "10% work 50+ hours/week",
      recommendedForUi: true,
    },
    oecdLeisure2024: {
      id: "oecdLeisure2024",
      label: "Personal care and leisure time for full-time workers",
      source: "OECD Better Life Index / Work-Life Balance",
      summary:
        "OECD work-life balance data shows that full-time workers devote about 15 hours a day, on average, to personal care and leisure combined.",
      methodology:
        "This number combines sleep, eating, personal care, and leisure. It is useful because it reveals how little of the day remains once work expands, even if it is not a pure measure of free time.",
      year: "2024",
      url: "https://www.oecdbetterlifeindex.org/topics/work-life-balance/",
      displayValue: "15 hours / day",
      recommendedForUi: true,
    },
    globalAttentionStudy2024: {
      id: "globalAttentionStudy2024",
      label: "Short-video use and attention control",
      source: "Frontiers in Human Neuroscience",
      summary:
        "A 2024 study found negative associations between short-video use on mobile phones and measures related to attention function and self-control.",
      methodology:
        "This is correlational neuroscience evidence rather than a single-direction causal claim, but it provides a solid research backdrop for the idea that rapid, repeated short-form stimulation can weaken focus.",
      year: "2024",
      url: "https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2024.1383913/full",
      displayValue: "attention control declines",
      recommendedForUi: true,
    },
    globalSleep2024: {
      id: "globalSleep2024",
      label: "Share of adults getting 7+ hours across 17 markets",
      source: "YouGov Global Profiles 2024",
      summary:
        "A YouGov survey across 17 international markets found that only a little over half of respondents say they sleep seven hours or more on a typical night.",
      methodology:
        "This is self-reported sleep from a multi-market survey. It is useful for showing that sufficient sleep is not easy to come by globally, though it should not be treated as a medical measurement.",
      year: "2024",
      url: "https://business.yougov.com/content/48914-how-long-do-most-people-sleep-globally-and-which-regions-feel-most-sleep-deprived-2024",
      displayValue: "just over 50%",
      recommendedForUi: true,
    },
    screenSleepMeta2024: {
      id: "screenSleepMeta2024",
      label: "Screen use and sleep quality",
      source: "Journal of Medical Internet Research",
      summary:
        "A 2024 systematic review and meta-analysis linked electronic media use with poorer sleep quality, shorter sleep duration, and later sleep onset.",
      methodology:
        "This is broad evidence from a review and meta-analysis. It supports the claim that bedtime screen use is associated with worse sleep, but it should not be framed as a single-cause explanation.",
      year: "2024",
      url: "https://www.jmir.org/2024/1/e48356/",
      displayValue: "sleep quality worsens",
      recommendedForUi: true,
    },
    wefReskilling2025: {
      id: "wefReskilling2025",
      label: "Workers expected to need retraining by 2030",
      source: "World Economic Forum / Future of Jobs Report 2025",
      summary:
        "The World Economic Forum estimates that 59% of workers worldwide will need retraining by 2030 as technology and labor markets keep shifting.",
      methodology:
        "This is a global labor-market projection, so it works best as a signal that the future requires continued investment rather than as a direct measure of one person's nightly pressure.",
      year: "2025",
      url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/",
      displayValue: "59% need retraining",
      recommendedForUi: true,
    },
    futureSelfContinuity2024: {
      id: "futureSelfContinuity2024",
      label: "Future self-continuity and intertemporal choice",
      source: "Frontiers in Psychology",
      summary:
        "A 2024 study found that people with stronger continuity between their present and future selves are less likely to overvalue immediate options in intertemporal decisions.",
      methodology:
        "This research is best used as psychological context for why short-term comfort can repeatedly outrun long-term goals. It describes mechanisms and associations, not a single determinant.",
      year: "2024",
      url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1437065/full",
      displayValue: "less bias toward the immediate",
      recommendedForUi: true,
    },
  },
};

export function getResearchReferences(locale: Locale, ids: string[]): ResearchReference[] {
  return ids.map((id) => {
    const reference = researchReferencesByLocale[locale][id];

    if (!reference) {
      throw new Error(`Missing research reference for locale ${locale}: ${id}`);
    }

    return reference;
  });
}
