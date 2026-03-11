import type { Locale } from "./content/types";

export const DEFAULT_LOCALE: Locale = "en";

export interface UiCopy {
  galleryKicker: string;
  title: string;
  intro: string;
  currentLabel: string;
  afterLabel: string;
  reclaimLabel: string;
  minutesLabel: string;
  dataPanelLabel: string;
  nextExhibitLabel: string;
  exhibitNavigatorLabel: string;
  languageSwitchLabel: string;
  previousSceneLabel: string;
  nextSceneLabel: string;
  storyProgressLabel: string;
  jumpToSceneLabel: (index: number) => string;
}

export const uiCopyByLocale: Record<Locale, UiCopy> = {
  en: {
    galleryKicker: "interactive story gallery",
    title: "Take Back Your Time",
    intro: "Five interactive stories about where time goes.",
    currentLabel: "Now",
    afterLabel: "After",
    reclaimLabel: "Reclaim",
    minutesLabel: "minutes",
    dataPanelLabel: "Global context",
    nextExhibitLabel: "Next exhibit",
    exhibitNavigatorLabel: "Exhibit navigation",
    languageSwitchLabel: "中文",
    previousSceneLabel: "Previous scene",
    nextSceneLabel: "Next scene",
    storyProgressLabel: "Story progress",
    jumpToSceneLabel: (index) => `Jump to scene ${index}`,
  },
  zh: {
    galleryKicker: "interactive story gallery",
    title: "把时间拿回来",
    intro: "五个关于时间去向的互动故事。",
    currentLabel: "现在",
    afterLabel: "拿回后",
    reclaimLabel: "拿回",
    minutesLabel: "分钟",
    dataPanelLabel: "全球数据",
    nextExhibitLabel: "下一展",
    exhibitNavigatorLabel: "展馆切换",
    languageSwitchLabel: "EN",
    previousSceneLabel: "上一幕",
    nextSceneLabel: "下一幕",
    storyProgressLabel: "故事进度",
    jumpToSceneLabel: (index) => `跳转到第 ${index} 幕`,
  },
};

function getPathParts(pathname: string): { locale: Locale; rest: string[] } {
  const segments = pathname.split("/").filter(Boolean);
  const normalizedSegments =
    segments[segments.length - 1] === "index.html" ? segments.slice(0, -1) : segments;

  if (normalizedSegments[0] === "zh") {
    return {
      locale: "zh",
      rest: normalizedSegments.slice(1),
    };
  }

  return {
    locale: "en",
    rest: normalizedSegments,
  };
}

export function getLocaleFromPath(pathname: string): Locale {
  return getPathParts(pathname).locale;
}

export function getPathForLocale(pathname: string, locale: Locale): string {
  const { rest } = getPathParts(pathname);
  const tail = rest.join("/");

  if (locale === "zh") {
    return tail ? `/zh/${tail}` : "/zh/";
  }

  return tail ? `/${tail}` : "/";
}
