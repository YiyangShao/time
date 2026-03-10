const reclaimNarratives = {
  15: {
    line: "今晚，至少没有再把那句“吃饭吧”留在空气里。",
    dinners: 46,
    presence: 110,
  },
  30: {
    line: "今晚，多了一次来得及坐下来的晚饭。",
    dinners: 91,
    presence: 218,
  },
  45: {
    line: "今晚，不只是放下手机，而是真的回到了他们身边。",
    dinners: 137,
    presence: 329,
  },
};

function getRequiredElement(id) {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing required element: ${id}`);
  }

  return element;
}

function getRequiredButton(id) {
  const element = getRequiredElement(id);

  if (!(element instanceof HTMLButtonElement)) {
    throw new Error(`Expected button element: ${id}`);
  }

  return element;
}

function getRequiredInput(id) {
  const element = getRequiredElement(id);

  if (!(element instanceof HTMLInputElement)) {
    throw new Error(`Expected input element: ${id}`);
  }

  return element;
}

function assertNarrative(minutes) {
  const narrative = reclaimNarratives[minutes];

  if (!narrative) {
    throw new Error(`Missing reclaim narrative for minutes: ${minutes}`);
  }

  return narrative;
}

const ambientParticles = getRequiredElement("ambient-particles");
const choiceStage = getRequiredElement("choice-stage");
const phoneTrigger = getRequiredButton("phone-trigger");
const driftParticles = getRequiredElement("drift-particles");
const fallingParticles = getRequiredElement("falling-particles");
const reclaimRange = getRequiredInput("reclaim-range");
const reclaimMinutes = getRequiredElement("reclaim-minutes");
const reclaimResultLine = getRequiredElement("reclaim-result-line");
const yearHours = getRequiredElement("year-hours");
const familyDinners = getRequiredElement("family-dinners");
const focusBlocks = getRequiredElement("focus-blocks");
const worldTimeStream = getRequiredElement("world-time-stream");
const sceneDrift = getRequiredElement("scene-drift");
const sceneLoss = getRequiredElement("scene-loss");

const scrollButtons = Array.from(document.querySelectorAll("[data-scroll-target]"));

if (scrollButtons.length === 0) {
  throw new Error("Expected at least one scroll button.");
}

for (const trigger of scrollButtons) {
  if (!(trigger instanceof HTMLButtonElement)) {
    throw new Error("Encountered a non-button scroll trigger.");
  }

  attachScrollButton(trigger);
}

seedAmbientParticles();
seedDriftParticles();
seedFallingParticles();
seedWorldStream();
bindChoiceInteraction();
bindReclaimInteraction();
updateReclaimOutputs(Number(reclaimRange.value));

function bindChoiceInteraction() {
  phoneTrigger.addEventListener("click", () => {
    choiceStage.dataset.choice = "taken";

    window.setTimeout(() => {
      sceneDrift.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 420);

    window.setTimeout(() => {
      sceneLoss.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2400);
  });
}

function bindReclaimInteraction() {
  reclaimRange.addEventListener("input", () => {
    const minutes = Number(reclaimRange.value);

    if (Number.isNaN(minutes)) {
      throw new Error(`Slider value is not numeric: ${reclaimRange.value}`);
    }

    updateReclaimOutputs(minutes);
  });
}

function updateReclaimOutputs(minutes) {
  if (![15, 30, 45].includes(minutes)) {
    throw new Error(`Unexpected reclaim minutes: ${minutes}`);
  }

  const narrative = assertNarrative(minutes);
  const yearlyHours = Math.round((minutes * 365) / 60);
  const futureIntensity = minutes / 45;

  reclaimMinutes.textContent = String(minutes);
  reclaimResultLine.textContent = narrative.line;
  yearHours.textContent = String(yearlyHours);
  familyDinners.textContent = String(narrative.dinners);
  focusBlocks.textContent = String(narrative.presence);
  document.documentElement.style.setProperty("--future-intensity", futureIntensity.toFixed(2));
}

function seedAmbientParticles() {
  ambientParticles.textContent = "";

  for (let index = 0; index < 24; index += 1) {
    const dot = document.createElement("div");
    dot.className = "ambient-particle";
    dot.style.left = `${6 + Math.random() * 88}%`;
    dot.style.top = `${26 + Math.random() * 56}%`;
    dot.style.setProperty("--duration", `${4 + Math.random() * 4}s`);
    dot.style.setProperty("--delay", `${Math.random() * -5}s`);
    ambientParticles.append(dot);
  }
}

function seedDriftParticles() {
  driftParticles.textContent = "";

  for (let index = 0; index < 34; index += 1) {
    const dot = document.createElement("div");
    dot.className = "drift-particle";
    dot.style.setProperty("--start-x", `${8 + Math.random() * 36}%`);
    dot.style.setProperty("--start-y", `${12 + Math.random() * 60}%`);
    dot.style.setProperty("--duration", `${2.2 + Math.random() * 2.6}s`);
    dot.style.setProperty("--delay", `${Math.random() * -4}s`);
    driftParticles.append(dot);
  }
}

function seedFallingParticles() {
  fallingParticles.textContent = "";

  for (let index = 0; index < 18; index += 1) {
    const dot = document.createElement("div");
    dot.className = "falling-particle";
    dot.style.setProperty("--left", `${12 + Math.random() * 72}%`);
    dot.style.setProperty("--duration", `${4.2 + Math.random() * 3.2}s`);
    dot.style.setProperty("--delay", `${Math.random() * -5}s`);
    fallingParticles.append(dot);
  }
}

function seedWorldStream() {
  worldTimeStream.textContent = "";

  for (let index = 0; index < 22; index += 1) {
    const dot = document.createElement("div");
    dot.className = "world-stream";
    dot.style.setProperty("--left", `${12 + Math.random() * 72}%`);
    dot.style.setProperty("--top", `${26 + Math.random() * 56}%`);
    dot.style.setProperty("--duration", `${3.6 + Math.random() * 2.6}s`);
    dot.style.setProperty("--delay", `${Math.random() * -6}s`);
    worldTimeStream.append(dot);
  }
}

function attachScrollButton(button) {
  button.addEventListener("click", () => {
    const targetSelector = button.dataset.scrollTarget;

    if (!targetSelector) {
      throw new Error("Scroll trigger is missing target selector.");
    }

    const target = document.querySelector(targetSelector);

    if (!(target instanceof HTMLElement)) {
      throw new Error(`Scroll target not found: ${targetSelector}`);
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
