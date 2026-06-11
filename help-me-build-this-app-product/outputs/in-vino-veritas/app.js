const STORAGE_KEY = "inVinoVeritas.v1";

const QUESTIONS = [
  {
    id: "color",
    prompt: "First instinct tonight: what lane sounds best?",
    options: [
      { label: "Red", value: "red" },
      { label: "White", value: "white" },
      { label: "Sparkling", value: "sparkling" },
      { label: "Rose", value: "rose" },
      { label: "No strong pull", value: "any" },
    ],
  },
  {
    id: "body",
    prompt: "How big should it feel?",
    options: [
      { label: "Light and easy", value: "light" },
      { label: "Middleweight", value: "medium" },
      { label: "Bold", value: "bold" },
      { label: "Not sure", value: "any" },
    ],
  },
  {
    id: "taste",
    prompt: "Which sounds closest to your usual good glass?",
    options: [
      { label: "Crisp and dry", value: "crisp" },
      { label: "Smooth and balanced", value: "balanced" },
      { label: "Fruit-forward", value: "fruit" },
      { label: "Not sweet", value: "dry" },
    ],
  },
  {
    id: "grapes",
    prompt: "Any grapes or places you already trust?",
    type: "tags",
    suggestions: [
      "Pinot Noir",
      "Cabernet",
      "Sauvignon Blanc",
      "Chardonnay",
      "Riesling",
      "Rioja",
    ],
  },
  {
    id: "food",
    prompt: "What are you eating with it?",
    options: [
      { label: "Steak or lamb", value: "red-meat" },
      { label: "Seafood", value: "seafood" },
      { label: "Chicken or pork", value: "white-meat" },
      { label: "Pasta or pizza", value: "tomato" },
      { label: "Spicy food", value: "spicy" },
      { label: "Just sipping", value: "none" },
    ],
  },
  {
    id: "adventure",
    prompt: "How adventurous should I be?",
    options: [
      { label: "Stay familiar", value: "familiar" },
      { label: "A smart twist", value: "adjacent" },
      { label: "Surprise me", value: "surprise" },
    ],
  },
];

const SAMPLE_MENU = `SPARKLING
Prosecco, Bisol Jeio, Veneto NV 14 / 52
Champagne, Pierre Peters, Brut NV 110

WHITE
Sauvignon Blanc, Domaine Reverdy, Sancerre 2023 18 / 72
Chardonnay, Sandhi, Santa Barbara 2022 76
Albarino, Do Ferreiro, Rias Baixas 2023 64
Riesling Kabinett, Selbach-Oster, Mosel 2022 58
Pinot Grigio, Alois Lageder, Alto Adige 2023 15 / 54

ROSE
Commanderie de la Bargemone Rose, Provence 2023 56

RED
Pinot Noir, Cristom Mt Jefferson Cuvee, Willamette Valley 2022 82
Gamay, Jean-Paul Brun, Beaujolais 2022 59
Cabernet Sauvignon, Daou, Paso Robles 2021 88
Rioja Reserva, La Rioja Alta Vina Alberdi 2019 74
Malbec, Catena, Mendoza 2021 16 / 60
Syrah, Alain Graillot, Crozes-Hermitage 2021 96`;

const GRAPE_RULES = [
  {
    key: "cabernet sauvignon",
    aliases: ["cabernet sauvignon", "cabernet", "cab"],
    color: "red",
    body: "bold",
    taste: "balanced",
    common: true,
  },
  {
    key: "cabernet franc",
    aliases: ["cabernet franc", "cab franc", "chinon", "bourgueil"],
    color: "red",
    body: "medium",
    taste: "dry",
    common: false,
  },
  {
    key: "pinot noir",
    aliases: ["pinot noir", "red pinot", "pinot n", "burgundy", "bourgogne"],
    color: "red",
    body: "light",
    taste: "balanced",
    common: true,
  },
  {
    key: "grenache",
    aliases: ["grenache", "garnacha", "gsm blend", "rhone blend", "cotes du rhone"],
    color: "red",
    body: "light",
    taste: "fruit",
    common: false,
  },
  {
    key: "merlot",
    aliases: ["merlot", "right bank", "pomerol", "saint-emilion"],
    color: "red",
    body: "medium",
    taste: "fruit",
    common: true,
  },
  {
    key: "carmenere",
    aliases: ["carmenere", "carménère"],
    color: "red",
    body: "medium",
    taste: "balanced",
    common: false,
  },
  {
    key: "mencia",
    aliases: ["mencia", "mencía"],
    color: "red",
    body: "medium",
    taste: "dry",
    common: false,
  },
  {
    key: "barbera",
    aliases: ["barbera"],
    color: "red",
    body: "medium",
    taste: "fruit",
    common: false,
  },
  {
    key: "montepulciano",
    aliases: ["montepulciano"],
    color: "red",
    body: "medium",
    taste: "balanced",
    common: false,
  },
  {
    key: "syrah",
    aliases: ["syrah", "shiraz", "crozes-hermitage", "hermitage", "cote-rotie"],
    color: "red",
    body: "bold",
    taste: "balanced",
    common: false,
  },
  {
    key: "mourvedre",
    aliases: ["mourvedre", "mourvèdre", "monastrell"],
    color: "red",
    body: "bold",
    taste: "balanced",
    common: false,
  },
  {
    key: "petite sirah",
    aliases: ["petite sirah", "petit sirah", "durif"],
    color: "red",
    body: "bold",
    taste: "balanced",
    common: false,
  },
  {
    key: "tannat",
    aliases: ["tannat", "madiran"],
    color: "red",
    body: "bold",
    taste: "dry",
    common: false,
  },
  {
    key: "touriga nacional",
    aliases: ["touriga nacional", "touriga"],
    color: "red",
    body: "bold",
    taste: "balanced",
    common: false,
  },
  {
    key: "malbec",
    aliases: ["malbec", "mendoza"],
    color: "red",
    body: "bold",
    taste: "fruit",
    common: true,
  },
  {
    key: "gamay",
    aliases: ["gamay", "beaujolais", "morgon", "fleurie"],
    color: "red",
    body: "light",
    taste: "fruit",
    common: false,
  },
  {
    key: "sangiovese",
    aliases: ["sangiovese", "chianti", "brunello", "tuscany", "toscana"],
    color: "red",
    body: "medium",
    taste: "dry",
    common: false,
  },
  {
    key: "tempranillo",
    aliases: ["tempranillo", "rioja", "ribera"],
    color: "red",
    body: "medium",
    taste: "balanced",
    common: false,
  },
  {
    key: "zinfandel",
    aliases: ["zinfandel", "zin"],
    color: "red",
    body: "bold",
    taste: "fruit",
    common: true,
  },
  {
    key: "nebbiolo",
    aliases: ["nebbiolo", "barolo", "barbaresco", "langhe"],
    color: "red",
    body: "medium",
    taste: "dry",
    common: false,
  },
  {
    key: "chardonnay",
    aliases: ["chardonnay", "chablis", "meursault", "pouilly-fuisse"],
    color: "white",
    body: "medium",
    taste: "balanced",
    common: true,
  },
  {
    key: "moscato",
    aliases: ["moscato", "muscat"],
    color: "white",
    body: "light",
    taste: "fruit",
    common: true,
  },
  {
    key: "sauvignon blanc",
    aliases: ["sauvignon blanc", "sancerre", "pouilly-fume"],
    color: "white",
    body: "light",
    taste: "crisp",
    common: true,
  },
  {
    key: "pinot grigio",
    aliases: ["pinot grigio", "pinot gris"],
    color: "white",
    body: "light",
    taste: "crisp",
    common: true,
  },
  {
    key: "riesling",
    aliases: ["riesling", "mosel", "kabinett", "spatlese"],
    color: "white",
    body: "light",
    taste: "fruit",
    common: true,
  },
  {
    key: "chenin blanc",
    aliases: ["chenin blanc", "vouvray", "savennieres"],
    color: "white",
    body: "medium",
    taste: "crisp",
    common: false,
  },
  {
    key: "albarino",
    aliases: ["albarino", "alvarinho", "rias baixas"],
    color: "white",
    body: "light",
    taste: "crisp",
    common: false,
  },
  {
    key: "gruner veltliner",
    aliases: ["gruner", "veltliner"],
    color: "white",
    body: "light",
    taste: "crisp",
    common: false,
  },
  {
    key: "prosecco",
    aliases: ["prosecco"],
    color: "sparkling",
    body: "light",
    taste: "crisp",
    common: true,
  },
  {
    key: "champagne",
    aliases: ["champagne", "brut", "cava", "cremant"],
    color: "sparkling",
    body: "medium",
    taste: "crisp",
    common: true,
  },
  {
    key: "rose",
    aliases: ["rose", "rosé", "provence"],
    color: "rose",
    body: "light",
    taste: "crisp",
    common: true,
  },
];

const RED_BOLDNESS = {
  schiava: 8,
  gamay: 14,
  "pinot noir": 20,
  grenache: 28,
  garnacha: 28,
  "valpolicella blend": 32,
  bobal: 36,
  carmenere: 39,
  carignan: 42,
  "cabernet franc": 45,
  mencia: 48,
  sangiovese: 51,
  negroamaro: 54,
  "rhone blend": 57,
  "gsm blend": 57,
  barbera: 60,
  merlot: 63,
  montepulciano: 66,
  zinfandel: 69,
  tempranillo: 72,
  nebbiolo: 75,
  "nero d'avola": 78,
  aglianico: 80,
  malbec: 83,
  "bordeaux blend": 86,
  "cabernet sauvignon": 89,
  syrah: 91,
  shiraz: 91,
  pinotage: 93,
  "petit verdot": 95,
  mourvedre: 96,
  "touriga nacional": 97,
  "petite sirah": 98,
  sagrantino: 99,
  tannat: 100,
};

const REGION_HINTS = [
  "napa",
  "sonoma",
  "willamette",
  "oregon",
  "santa barbara",
  "loire",
  "bordeaux",
  "burgundy",
  "rhone",
  "piedmont",
  "sicily",
  "rioja",
  "mosel",
  "alsace",
  "mendoza",
  "provence",
];

const state = {
  questionIndex: 0,
  answers: {},
  selectedFile: null,
  selectedFileUrl: null,
  recommendations: [],
  store: loadStore(),
};

const el = {
  chatLog: document.querySelector("#chatLog"),
  choiceArea: document.querySelector("#choiceArea"),
  backQuestion: document.querySelector("#backQuestion"),
  resetTaste: document.querySelector("#resetTaste"),
  budgetInput: document.querySelector("#budgetInput"),
  modeBottle: document.querySelector("#modeBottle"),
  modeGlass: document.querySelector("#modeGlass"),
  allowOverage: document.querySelector("#allowOverage"),
  refreshMenu: document.querySelector("#refreshMenu"),
  wineImage: document.querySelector("#wineImage"),
  runOcr: document.querySelector("#runOcr"),
  loadSample: document.querySelector("#loadSample"),
  imagePreviewWrap: document.querySelector("#imagePreviewWrap"),
  imagePreview: document.querySelector("#imagePreview"),
  menuText: document.querySelector("#menuText"),
  ocrStatus: document.querySelector("#ocrStatus"),
  recommendButton: document.querySelector("#recommendButton"),
  recommendations: document.querySelector("#recommendations"),
  recommendationSummary: document.querySelector("#recommendationSummary"),
  memoryChips: document.querySelector("#memoryChips"),
  historyList: document.querySelector("#historyList"),
  clearMemory: document.querySelector("#clearMemory"),
  sessionStatus: document.querySelector("#sessionStatus"),
  statusDot: document.querySelector("#statusDot"),
};

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultStore();
    const parsed = JSON.parse(raw);
    const defaults = defaultStore();
    return {
      ...defaults,
      ...parsed,
      memory: {
        ...defaults.memory,
        ...(parsed.memory || {}),
        likedGrapes: {
          ...defaults.memory.likedGrapes,
          ...(parsed.memory?.likedGrapes || {}),
        },
        likedStyles: {
          ...defaults.memory.likedStyles,
          ...(parsed.memory?.likedStyles || {}),
        },
        avoid: {
          ...defaults.memory.avoid,
          ...(parsed.memory?.avoid || {}),
        },
      },
      history: Array.isArray(parsed.history) ? parsed.history : defaults.history,
    };
  } catch {
    return defaultStore();
  }
}

function defaultStore() {
  return {
    prefs: null,
    budget: 80,
    mode: "bottle",
    allowOverage: false,
    memory: { likedGrapes: {}, likedStyles: {}, avoid: {} },
    history: [],
  };
}

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
}

function hydrateFromStore() {
  if (state.store.prefs) {
    state.answers = { ...state.store.prefs };
    const missingQuestion = QUESTIONS.findIndex((question) => state.answers[question.id] === undefined);
    state.questionIndex = missingQuestion === -1 ? QUESTIONS.length : missingQuestion;
  }
  el.budgetInput.value = state.store.budget || 80;
  el.allowOverage.checked = Boolean(state.store.allowOverage);
  if (state.store.mode === "glass") {
    el.modeGlass.checked = true;
  } else {
    el.modeBottle.checked = true;
  }
}

function renderAll() {
  renderChat();
  renderMemory();
  updateSessionStatus();
  renderIcons();
}

function renderChat() {
  el.chatLog.innerHTML = "";

  QUESTIONS.forEach((question, index) => {
    if (index < state.questionIndex) {
      addMessage(question.prompt, "assistant");
      addMessage(answerLabel(question), "user");
    }
  });

  if (state.questionIndex < QUESTIONS.length) {
    addMessage(QUESTIONS[state.questionIndex].prompt, "assistant");
  } else {
    addMessage("Good. I have enough to be picky without turning dinner into homework.", "assistant");
  }

  renderChoiceArea();
  el.backQuestion.disabled = state.questionIndex === 0;
  el.chatLog.scrollTop = el.chatLog.scrollHeight;
}

function addMessage(text, role) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.textContent = text;
  el.chatLog.appendChild(message);
}

function answerLabel(question) {
  const value = state.answers[question.id];
  if (question.type === "tags") {
    return Array.isArray(value) && value.length ? value.join(", ") : "Open slate";
  }
  return question.options.find((option) => option.value === value)?.label || "Not sure";
}

function renderChoiceArea() {
  el.choiceArea.innerHTML = "";

  if (state.questionIndex >= QUESTIONS.length) {
    const done = document.createElement("div");
    done.className = "empty-state";
    done.textContent = tasteSnapshot();
    el.choiceArea.appendChild(done);
    return;
  }

  const question = QUESTIONS[state.questionIndex];
  if (question.type === "tags") {
    renderTagQuestion(question);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "choice-grid";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice-chip";
    button.type = "button";
    button.textContent = option.label;
    button.addEventListener("click", () => answerQuestion(question.id, option.value));
    grid.appendChild(button);
  });

  el.choiceArea.appendChild(grid);
}

function renderTagQuestion(question) {
  const wrap = document.createElement("div");
  wrap.className = "freeform-box";

  const selected = new Set(state.answers[question.id] || []);
  const grid = document.createElement("div");
  grid.className = "choice-grid";

  question.suggestions.forEach((tag) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `choice-chip ${selected.has(tag) ? "selected" : ""}`;
    chip.textContent = tag;
    chip.addEventListener("click", () => {
      selected.has(tag) ? selected.delete(tag) : selected.add(tag);
      state.answers[question.id] = [...selected];
      renderChat();
    });
    grid.appendChild(chip);
  });

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Add one, or leave blank";
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addCustomTag(input.value);
      input.value = "";
    }
  });

  const actions = document.createElement("div");
  actions.className = "quick-row";

  const add = document.createElement("button");
  add.type = "button";
  add.className = "ghost-button";
  add.innerHTML = '<i data-lucide="plus" aria-hidden="true"></i>Add';
  add.addEventListener("click", () => {
    addCustomTag(input.value);
    input.value = "";
  });

  const next = document.createElement("button");
  next.type = "button";
  next.className = "primary-button";
  next.innerHTML = '<i data-lucide="arrow-right" aria-hidden="true"></i>Next';
  next.addEventListener("click", () => {
    if (!state.answers[question.id]) state.answers[question.id] = [];
    state.questionIndex += 1;
    persistPrefs();
    renderAll();
  });

  actions.append(add, next);
  wrap.append(grid, input, actions);
  el.choiceArea.appendChild(wrap);
}

function addCustomTag(raw) {
  const tag = normalizeDisplay(raw);
  if (!tag) return;
  const current = new Set(state.answers.grapes || []);
  current.add(tag);
  state.answers.grapes = [...current];
  renderChat();
}

function answerQuestion(id, value) {
  state.answers[id] = value;
  state.questionIndex = Math.min(state.questionIndex + 1, QUESTIONS.length);
  persistPrefs();
  renderAll();
}

function persistPrefs() {
  if (state.questionIndex >= QUESTIONS.length) {
    state.store.prefs = { ...state.answers };
    saveStore();
  }
}

function tasteSnapshot() {
  const pieces = [];
  const color = state.answers.color;
  const body = state.answers.body;
  const taste = state.answers.taste;
  const adventure = state.answers.adventure;

  if (color && color !== "any") pieces.push(color);
  if (body && body !== "any") pieces.push(`${body} body`);
  if (taste) pieces.push(taste);
  if (Array.isArray(state.answers.grapes) && state.answers.grapes.length) {
    pieces.push(`trusts ${state.answers.grapes.join(", ")}`);
  }
  if (state.answers.food && state.answers.food !== "none") {
    pieces.push(foodLabel(state.answers.food));
  }
  if (adventure) pieces.push(adventure === "adjacent" ? "open to a twist" : adventure);

  return pieces.length ? `Tonight: ${pieces.join(" · ")}` : "Tonight: flexible";
}

function normalizeDisplay(value) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function parseWineList(raw, mode) {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const wines = [];
  let section = "unknown";

  lines.forEach((line) => {
    const header = detectSection(line);
    if (header && !extractPriceTokens(line).length) {
      section = header;
      return;
    }

    const prices = extractPriceTokens(line);
    if (!prices.length || looksLikeNonWineLine(line)) return;

    const price = mode === "glass" ? prices[0].value : prices[prices.length - 1].value;
    const name = cleanWineName(line, prices);
    if (!name || name.length < 4) return;

    const inferred = inferWine(name, section);
    wines.push({
      id: `${name}-${price}-${wines.length}`,
      name,
      price,
      section,
      ...inferred,
      raw: line,
    });
  });

  return dedupeWines(wines);
}

function detectSection(line) {
  const text = normalizeText(line);
  if (/^(sparkling|champagne|bubbles|fizz)\b/.test(text)) return "sparkling";
  if (/^(white|whites|white wine|vin blanc)\b/.test(text)) return "white";
  if (/^(red|reds|red wine|vin rouge)\b/.test(text)) return "red";
  if (/^(rose|rosé|roses|rosés)\b/.test(text)) return "rose";
  return null;
}

function extractPriceTokens(line) {
  const tokens = [];
  const pricePattern = /\$?\b\d{1,4}(?:\.\d{2})?\b/g;
  let match;

  while ((match = pricePattern.exec(line)) !== null) {
    const text = match[0];
    const value = Number.parseFloat(text.replace("$", ""));
    const isLikelyYear = value >= 1900 && value <= 2035 && !text.startsWith("$");
    const isPlausiblePrice = value >= 5 && value <= 2000;

    if (!isLikelyYear && isPlausiblePrice) {
      tokens.push({ text, value, index: match.index });
    }
  }

  return tokens;
}

function cleanWineName(line, prices) {
  let result = line;
  [...prices]
    .sort((a, b) => b.index - a.index)
    .forEach((price) => {
      result = `${result.slice(0, price.index)} ${result.slice(price.index + price.text.length)}`;
    });

  return result
    .replace(/\s+\/\s+|\s+\|\s+/g, " ")
    .replace(/[$•]+/g, " ")
    .replace(/\b(glass|bottle|btg|btl)\b/gi, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/^[,.\-\s]+|[,.\-\s]+$/g, "")
    .trim();
}

function looksLikeNonWineLine(line) {
  const text = normalizeText(line);
  return /(beer|cocktail|spirits|whiskey|vodka|gin|tequila|dessert|corkage|happy hour)/.test(text);
}

function dedupeWines(wines) {
  const seen = new Set();
  return wines.filter((wine) => {
    const key = `${normalizeText(wine.name)}-${wine.price}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function inferWine(name, section) {
  const text = normalizeText(name);
  const styleColor = inferStyleColor(text);
  const rule = GRAPE_RULES.find((candidate) =>
    candidate.aliases.some((alias) => text.includes(normalizeText(alias))),
  );

  const sectionColor = section !== "unknown" ? section : null;
  const color = styleColor || rule?.color || sectionColor || inferColorFromWords(text);
  const region = REGION_HINTS.find((hint) => text.includes(hint)) || "";
  const redBoldness = color === "red" ? inferRedBoldness(rule, text) : null;

  return {
    color,
    grape: rule?.key || "",
    body: redBoldness ? bodyFromBoldness(redBoldness) : rule?.body || inferBodyFallback(color),
    redBoldness,
    taste: rule?.taste || inferTasteFallback(color),
    common: rule?.common ?? false,
    region,
  };
}

function inferStyleColor(text) {
  if (/\b(rose|rosé)\b|provence/.test(text)) return "rose";
  if (/\b(pet nat|pet-nat|petillant|champagne|prosecco|cava|cremant|brut)\b/.test(text)) {
    return "sparkling";
  }
  return "";
}

function inferRedBoldness(rule, text) {
  if (rule?.key && RED_BOLDNESS[rule.key]) return RED_BOLDNESS[rule.key];

  const match = Object.keys(RED_BOLDNESS)
    .sort((a, b) => b.length - a.length)
    .find((grape) => text.includes(normalizeText(grape)));

  return match ? RED_BOLDNESS[match] : 58;
}

function bodyFromBoldness(value) {
  if (value <= 34) return "light";
  if (value <= 76) return "medium";
  return "bold";
}

function inferColorFromWords(text) {
  if (/rose|rosé|provence/.test(text)) return "rose";
  if (/champagne|prosecco|cava|cremant|brut/.test(text)) return "sparkling";
  if (/pinot grigio|pinot gris|moscato|muscat|sauvignon|chardonnay|riesling|albarino|chenin|gruner|muscadet/.test(text)) {
    return "white";
  }
  if (
    /cabernet|pinot noir|\bpinot\b|merlot|syrah|shiraz|malbec|rioja|gamay|sangiovese|nebbiolo|zinfandel|\bzin\b|tannat|petite sirah|petit sirah|mourvedre|touriga|tempranillo|grenache|garnacha|barbera|montepulciano/.test(
      text,
    )
  ) {
    return "red";
  }
  return "unknown";
}

function inferBodyFallback(color) {
  if (color === "red") return "medium";
  if (color === "sparkling" || color === "rose") return "light";
  return "light";
}

function inferTasteFallback(color) {
  if (color === "red") return "balanced";
  return "crisp";
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildRecommendations() {
  const mode = getMode();
  const budget = Number.parseFloat(el.budgetInput.value) || 0;
  const allowOverage = el.allowOverage.checked;
  const wines = parseWineList(el.menuText.value, mode);
  const maxAllowed = allowOverage ? budget * 1.12 : budget;
  const eligible = wines.filter((wine) => wine.price <= maxAllowed);

  state.store.budget = budget;
  state.store.mode = mode;
  state.store.allowOverage = allowOverage;
  state.store.prefs = { ...state.answers };
  saveStore();

  if (!wines.length) {
    renderNoRecommendations("I could not find wine names with prices in that text.", []);
    return;
  }

  if (!eligible.length) {
    const cheapest = [...wines].sort((a, b) => a.price - b.price).slice(0, 3);
    renderNoRecommendations(
      `I found ${wines.length} wines, but none under the ${formatMoney(budget)} ${mode} cap.`,
      cheapest,
    );
    return;
  }

  const scored = eligible
    .map((wine) => scoreWine(wine, state.answers, budget, mode, allowOverage, state.store.memory))
    .sort((a, b) => b.score - a.score);
  const compatible = scored.filter((wine) => isCompatibleWithPrefs(wine, state.answers));
  const colorMatched = scored.filter(
    (wine) => !state.answers.color || state.answers.color === "any" || wine.color === state.answers.color,
  );
  const strictColorChoice = state.answers.color && state.answers.color !== "any";
  if (strictColorChoice && !colorMatched.length) {
    const closest = scored.slice(0, 3);
    renderNoRecommendations(
      `I found ${eligible.length} wines within budget, but none were confidently detected as ${state.answers.color}. Correct the scan text around the red-wine section and try again.`,
      closest,
    );
    return;
  }
  const rankingPool =
    compatible.length >= 3
      ? compatible
      : strictColorChoice && colorMatched.length
        ? colorMatched
        : compatible.length
          ? compatible
          : scored;
  const ranked = rankingPool
    .slice(0, 4);

  state.recommendations = ranked;
  renderRecommendations(ranked, wines.length, eligible.length, budget, mode);
}

function isCompatibleWithPrefs(wine, prefs) {
  const colorOk = !prefs.color || prefs.color === "any" || wine.color === prefs.color;
  const bodyOk = !prefs.body || prefs.body === "any" || scoreBodyFit(wine, prefs.body).points >= 0;
  const foodOk = !prefs.food || prefs.food === "none" || scoreFoodPairing(wine, prefs.food).points >= 0;
  return colorOk && bodyOk && foodOk;
}

function scoreWine(wine, prefs, budget, mode, allowOverage, memory) {
  let score = 0;
  const reasons = [];
  const valueRatio = budget ? wine.price / budget : 1;

  if (wine.price <= budget) {
    score += 18;
    if (valueRatio >= 0.45 && valueRatio <= 0.82) {
      score += 16;
      reasons.push("strong value");
    } else if (valueRatio < 0.45) {
      score += 7;
      reasons.push("cheap without being reckless");
    } else {
      score += 8;
      reasons.push("near the top of budget");
    }
  } else if (allowOverage) {
    score += 5;
    reasons.push("small overage");
  }

  if (prefs.color && prefs.color !== "any") {
    if (wine.color === prefs.color) {
      score += 42;
      reasons.push(`${wine.color} match`);
    } else {
      score -= 42;
      reasons.push("color mismatch");
    }
  } else if (wine.color !== "unknown") {
    score += 8;
  }

  if (prefs.body && prefs.body !== "any") {
    const bodyScore = scoreBodyFit(wine, prefs.body);
    score += bodyScore.points;
    if (bodyScore.reason) reasons.push(bodyScore.reason);
  }

  if (prefs.taste) {
    if (wine.taste === prefs.taste || (prefs.taste === "dry" && wine.taste === "crisp")) {
      score += 24;
      reasons.push(`${plainTaste(wine.taste)} style`);
    } else if (prefs.taste === "crisp" && wine.color === "red" && (wine.taste === "dry" || wine.taste === "balanced")) {
      score += 10;
      reasons.push("fresh red style");
    } else if (prefs.taste === "balanced" || wine.taste === "balanced") {
      score += 4;
      reasons.push("taste stretch");
    } else {
      score -= 14;
      reasons.push("taste mismatch");
    }
  }

  const foodScore = scoreFoodPairing(wine, prefs.food);
  score += foodScore.points;
  if (foodScore.reason) reasons.push(foodScore.reason);

  const userTags = (prefs.grapes || []).map(normalizeText).filter(Boolean);
  if (userTags.length) {
    const tagHit = userTags.some((tag) => normalizeText(wine.name).includes(tag) || wine.grape.includes(tag));
    if (tagHit) {
      score += 40;
      reasons.push("trusted grape");
    } else if (wine.color === "red" && Number.isFinite(wine.redBoldness)) {
      const targetBoldness = preferredRedBoldness(userTags);
      if (targetBoldness) {
        const distance = Math.abs(wine.redBoldness - targetBoldness);
        if (distance <= 12) {
          score += 26;
          reasons.push("chart-near favorite");
        } else if (distance <= 24) {
          score += 12;
          reasons.push("chart-adjacent favorite");
        } else if (distance >= 42) {
          score -= 16;
          reasons.push("far from trusted grape");
        }
      }
    } else if (prefs.adventure === "familiar") {
      score -= 8;
    }
  }

  if (prefs.adventure === "familiar") {
    score += wine.common ? 8 : -10;
  } else if (prefs.adventure === "adjacent") {
    score += wine.common ? 5 : 12;
    if (!wine.common) reasons.push("smart twist");
  } else if (prefs.adventure === "surprise") {
    score += wine.common ? 1 : 16;
    if (!wine.common) reasons.push("interesting pick");
  }

  const likedGrapeBoost = memory?.likedGrapes?.[wine.grape] || 0;
  const likedStyleBoost = memory?.likedStyles?.[wine.taste] || 0;
  score += Math.min(likedGrapeBoost * 5, 15);
  score += Math.min(likedStyleBoost * 3, 9);

  if (/reserve|grand cru|premier cru|single vineyard|library/.test(normalizeText(wine.name)) && valueRatio > 0.9) {
    score -= 8;
    reasons.push("premium label");
  }

  return {
    ...wine,
    score,
    valueRatio,
    reasons,
    breakdown: buildScoreBreakdown(wine, prefs, budget),
    explanation: "",
  };
}

function buildScoreBreakdown(wine, prefs, budget) {
  const colorFit = !prefs.color || prefs.color === "any" ? 20 : wine.color === prefs.color ? 30 : 0;
  const bodyFit =
    !prefs.body || prefs.body === "any"
      ? 20
      : clamp(Math.round(((scoreBodyFit(wine, prefs.body).points + 30) / 62) * 30), 0, 30);
  const tasteFit =
    !prefs.taste
      ? 15
      : wine.taste === prefs.taste || (prefs.taste === "dry" && wine.taste === "crisp")
        ? 20
        : prefs.taste === "crisp" && wine.color === "red" && (wine.taste === "dry" || wine.taste === "balanced")
          ? 14
        : prefs.taste === "balanced" || wine.taste === "balanced"
          ? 12
          : 4;
  const trustedTags = (prefs.grapes || []).map(normalizeText).filter(Boolean);
  const tagFit =
    trustedTags.length &&
    trustedTags.some((tag) => normalizeText(wine.name).includes(tag) || wine.grape.includes(tag))
      ? 20
      : trustedTags.length
        ? 8
        : 15;

  const pairingScore = scoreFoodPairing(wine, prefs.food).points;
  const food = !prefs.food || prefs.food === "none" ? 72 : clamp(Math.round(72 + pairingScore), 20, 100);
  const value = budget
    ? clamp(Math.round(105 - Math.abs(wine.price / budget - 0.72) * 95), 35, wine.price <= budget ? 100 : 70)
    : 70;
  const confidence = clamp((wine.grape ? 42 : 20) + (wine.region ? 18 : 8) + (wine.price ? 22 : 0), 30, 92);

  return {
    taste: clamp(colorFit + bodyFit + tasteFit + tagFit, 0, 100),
    food,
    value,
    confidence,
  };
}

function preferredRedBoldness(userTags) {
  const matches = userTags
    .map((tag) => {
      const exact = RED_BOLDNESS[tag];
      if (exact) return exact;
      const grape = Object.keys(RED_BOLDNESS)
        .sort((a, b) => b.length - a.length)
        .find((candidate) => tag.includes(candidate) || candidate.includes(tag));
      return grape ? RED_BOLDNESS[grape] : null;
    })
    .filter((value) => Number.isFinite(value));

  if (!matches.length) return null;
  return matches.reduce((sum, value) => sum + value, 0) / matches.length;
}

function scoreFoodPairing(wine, food) {
  if (!food || food === "none") return { points: 0, reason: "" };

  const color = wine.color;
  const body = wine.body;
  const taste = wine.taste;
  let points = 0;
  let reason = "";

  if (food === "red-meat") {
    if (color === "red" && (body === "medium" || body === "bold")) {
      points = 28;
      reason = "dinner match";
    } else if (color === "red") {
      points = -12;
      reason = "too light for the food";
    } else {
      points = -28;
    }
  }

  if (food === "seafood") {
    if ((color === "white" || color === "sparkling" || color === "rose") && body !== "bold") {
      points = 24;
      reason = "seafood match";
    } else if (color === "red" && body === "light") {
      points = 6;
      reason = "light enough for seafood";
    } else {
      points = -20;
    }
  }

  if (food === "white-meat") {
    if (body === "medium" || color === "white" || color === "rose") {
      points = 12;
      reason = "flexible with the food";
    }
  }

  if (food === "tomato") {
    if (color === "red" && (body === "light" || body === "medium")) {
      points = 15;
      reason = "tomato-sauce friendly";
    } else if (color === "rose" || color === "sparkling") {
      points = 8;
      reason = "bright enough for the food";
    } else if (body === "bold") {
      points = -5;
    }
  }

  if (food === "spicy") {
    if (taste === "fruit" || color === "sparkling" || color === "rose") {
      points = 22;
      reason = "spice-friendly";
    } else if (body === "bold") {
      points = -18;
    }
  }

  return { points, reason };
}

function scoreBodyFit(wine, preferredBody) {
  if (wine.color === "red" && Number.isFinite(wine.redBoldness)) {
    const targets = {
      light: 20,
      medium: 58,
      bold: 90,
    };
    const distance = Math.abs(wine.redBoldness - targets[preferredBody]);

    if (distance <= 13) return { points: 32, reason: `${preferredBody} feel` };
    if (distance <= 24) return { points: 10, reason: "body stretch" };
    if (distance <= 36) return { points: -12, reason: "body mismatch" };
    return { points: -30, reason: "body mismatch" };
  }

  if (wine.body === preferredBody) return { points: 28, reason: `${wine.body} feel` };
  if (isAdjacentBody(preferredBody, wine.body)) return { points: 4, reason: "body stretch" };
  return { points: -24, reason: "body mismatch" };
}

function isAdjacentBody(preferred, actual) {
  const order = ["light", "medium", "bold"];
  return Math.abs(order.indexOf(preferred) - order.indexOf(actual)) === 1;
}

function renderRecommendations(ranked, detectedCount, eligibleCount, budget, mode) {
  const top = ranked[0];
  const withCopy = ranked.map((wine, index) => ({
    ...wine,
    explanation: buildExplanation(wine, index, budget, mode),
  }));
  state.recommendations = withCopy;

  el.recommendationSummary.innerHTML = `
    <p><strong>Order the ${escapeHtml(top.name)}.</strong> It is the cleanest fit from ${detectedCount} detected wines; ${eligibleCount} were within the ${formatMoney(budget)} ${mode} target, and ${Math.max(detectedCount - withCopy.length, 0)} were skipped as weaker fits.</p>
    <div class="proof-strip">
      <span>${scoreLabel(top.breakdown.taste)} taste fit</span>
      <span>${scoreLabel(top.breakdown.value)} value</span>
      <span>${scoreLabel(top.breakdown.confidence)} read confidence</span>
    </div>
  `;
  el.recommendations.innerHTML = "";

  withCopy.forEach((wine, index) => {
    el.recommendations.appendChild(renderRecommendationCard(wine, index));
  });

  updateSessionStatus("Recommendations ready", true);
  renderIcons();
}

function renderNoRecommendations(message, alternatives) {
  el.recommendationSummary.innerHTML = `<p><strong>No clean pick yet.</strong> ${escapeHtml(message)}</p>`;
  el.recommendations.innerHTML = "";

  alternatives.forEach((wine) => {
    const card = document.createElement("article");
    card.className = "rec-card";
    card.innerHTML = `
      <div class="rec-head">
        <div>
          <span class="rank-label">Closest visible option</span>
          <h3 class="rec-title">${escapeHtml(wine.name)}</h3>
          <p class="rec-meta">${wine.colorLabel || labelColor(wine.color)} · ${bodyMeta(wine)}</p>
        </div>
        <div class="price-pill">${formatMoney(wine.price)}</div>
      </div>
      <p class="rec-reason">This is visible on the menu, but it does not meet the current budget rule. Raise the cap or allow a slight overage if this is still in play.</p>
    `;
    el.recommendations.appendChild(card);
  });

  updateSessionStatus("Needs menu or budget fix", false);
  renderIcons();
}

function renderRecommendationCard(wine, index) {
  const card = document.createElement("article");
  card.className = `rec-card ${index === 0 ? "top" : ""}`;
  card.innerHTML = `
    <div class="rec-head">
      <div>
        <span class="rank-label">${rankLabel(index, wine)}</span>
        <h3 class="rec-title">${escapeHtml(wine.name)}</h3>
        <p class="rec-meta">${labelColor(wine.color)} · ${bodyMeta(wine)} · ${plainTaste(wine.taste)}</p>
      </div>
      <div class="price-pill">${formatMoney(wine.price)}</div>
    </div>
    <p class="rec-reason">${escapeHtml(wine.explanation)}</p>
    <div class="score-grid" aria-label="Recommendation score breakdown">
      ${renderScoreMeter("Taste", wine.breakdown.taste)}
      ${renderScoreMeter("Food", wine.breakdown.food)}
      ${renderScoreMeter("Value", wine.breakdown.value)}
      ${renderScoreMeter("Read", wine.breakdown.confidence)}
    </div>
    <div class="rec-actions">
      <button class="feedback-button" type="button" data-feedback="ordered" data-id="${wine.id}">Ordered</button>
      <button class="feedback-button" type="button" data-feedback="liked" data-id="${wine.id}">Liked it</button>
      <button class="feedback-button" type="button" data-feedback="too dry" data-id="${wine.id}">Too dry</button>
      <button class="feedback-button" type="button" data-feedback="too heavy" data-id="${wine.id}">Too heavy</button>
      <button class="feedback-button" type="button" data-feedback="too pricey" data-id="${wine.id}">Too pricey</button>
    </div>
  `;

  card.querySelectorAll("[data-feedback]").forEach((button) => {
    button.addEventListener("click", () => recordFeedback(wine, button.dataset.feedback));
  });

  return card;
}

function renderScoreMeter(label, value) {
  const safeValue = clamp(Math.round(value), 0, 100);
  return `
    <div class="score-meter">
      <div class="score-meter-top">
        <span>${label}</span>
        <strong>${safeValue}</strong>
      </div>
      <div class="score-track"><span style="width: ${safeValue}%"></span></div>
    </div>
  `;
}

function rankLabel(index, wine) {
  if (index === 0) return "Best fit";
  if (wine.reasons.includes("strong value")) return "Best value";
  if (wine.reasons.includes("smart twist") || wine.reasons.includes("interesting pick")) return "Wildcard";
  return "Backup";
}

function buildExplanation(wine, index, budget, mode) {
  const pricePhrase =
    wine.price <= budget
      ? `${formatMoney(wine.price)}, safely inside your ${formatMoney(budget)} ${mode} cap`
      : `${formatMoney(wine.price)}, just over your ${formatMoney(budget)} ${mode} cap`;

  const opening =
    index === 0
      ? `This is the one I would order: it best matches your stated taste and lands at ${pricePhrase}.`
      : `This earns a spot because it gives you a ${plainTaste(wine.taste)} ${labelColor(wine.color).toLowerCase()} option at ${pricePhrase}.`;

  const valueLine = wine.valueRatio <= 0.82
    ? "It looks like a better-value move than chasing the most expensive familiar name."
    : "It is not the cheapest choice, but the fit is strong enough to justify the spend.";

  const pairingLine = wine.reasons.some((reason) =>
    ["dinner match", "seafood match", "tomato-sauce friendly", "spice-friendly"].includes(reason),
  )
    ? "It also makes sense with the food, which is doing real work in this pick."
    : "";
  const chartLine = wine.reasons.some((reason) =>
    ["trusted grape", "chart-near favorite", "chart-adjacent favorite"].includes(reason),
  )
    ? "On the red-wine boldness chart, it is close to the grape style you said you trust."
    : "";

  const adventureLine = wine.common
    ? "It should feel familiar without being boring."
    : "It is the smart little reach on this list without getting weird.";

  return `${opening} ${chartLine || pairingLine || (wine.reasons.includes("strong value") ? valueLine : adventureLine)}`;
}

function recordFeedback(wine, feedback) {
  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    wine: wine.name,
    price: wine.price,
    grape: wine.grape,
    color: wine.color,
    body: wine.body,
    taste: wine.taste,
    feedback,
    date: new Date().toISOString(),
  };

  state.store.history = [entry, ...state.store.history].slice(0, 12);
  updateMemoryFromFeedback(wine, feedback);
  saveStore();
  renderMemory();
  updateSessionStatus(`${capitalize(feedback)} saved`, true);
}

function updateMemoryFromFeedback(wine, feedback) {
  const positive = feedback === "ordered" || feedback === "liked";
  const memory = state.store.memory;

  if (positive) {
    if (wine.grape) memory.likedGrapes[wine.grape] = (memory.likedGrapes[wine.grape] || 0) + 1;
    memory.likedStyles[wine.taste] = (memory.likedStyles[wine.taste] || 0) + 1;
    return;
  }

  memory.avoid[feedback] = (memory.avoid[feedback] || 0) + 1;
}

function renderMemory() {
  const chips = [];
  const prefs = state.store.prefs;

  if (prefs?.color && prefs.color !== "any") chips.push(`Usually ${prefs.color}`);
  if (prefs?.body && prefs.body !== "any") chips.push(`${capitalize(prefs.body)} body`);
  if (prefs?.taste) chips.push(plainTaste(prefs.taste));

  Object.entries(state.store.memory.likedGrapes || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .forEach(([grape, count]) => {
      if (grape) chips.push(`${capitalizeWords(grape)} +${count}`);
    });

  el.memoryChips.innerHTML = chips.length
    ? chips.map((chip) => `<span class="memory-chip">${escapeHtml(chip)}</span>`).join("")
    : '<span class="empty-state">No saved signals yet.</span>';

  if (!state.store.history.length) {
    el.historyList.innerHTML = '<div class="empty-state">Selections will show up here.</div>';
    return;
  }

  el.historyList.innerHTML = state.store.history
    .slice(0, 5)
    .map(
      (item) => `
        <div class="history-item">
          <strong>${escapeHtml(item.wine)}</strong><br />
          ${formatMoney(item.price)} · ${escapeHtml(item.feedback)}
        </div>
      `,
    )
    .join("");
}

async function runOcr() {
  if (!state.selectedFile) {
    setOcrStatus("Select a photo first.", true);
    return;
  }

  el.runOcr.disabled = true;
  setOcrStatus("Reading the photo...");

  try {
    await loadTesseract();
    const result = await window.Tesseract.recognize(state.selectedFile, "eng", {
      logger: (message) => {
        if (message.status === "recognizing text") {
          setOcrStatus(`Reading text ${Math.round(message.progress * 100)}%`);
        }
      },
    });
    const text = result?.data?.text?.trim();
    if (!text) {
      setOcrStatus("The photo did not produce readable text.", true);
      return;
    }
    el.menuText.value = text;
    setOcrStatus("Text detected. Quick corrections are fair game.");
  } catch (error) {
    setOcrStatus("OCR could not run here. Paste the menu text instead.", true);
  } finally {
    el.runOcr.disabled = false;
  }
}

function loadTesseract() {
  if (window.Tesseract) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function setOcrStatus(message, isError = false) {
  el.ocrStatus.textContent = message;
  el.ocrStatus.classList.toggle("error", isError);
}

function handleImageSelection(event) {
  const [file] = event.target.files;
  if (!file) return;

  state.selectedFile = file;
  if (state.selectedFileUrl) URL.revokeObjectURL(state.selectedFileUrl);
  state.selectedFileUrl = URL.createObjectURL(file);
  el.imagePreview.src = state.selectedFileUrl;
  el.imagePreviewWrap.hidden = false;
  setOcrStatus("Photo ready");
}

function refreshMenuScan() {
  if (state.selectedFileUrl) {
    URL.revokeObjectURL(state.selectedFileUrl);
  }

  state.selectedFile = null;
  state.selectedFileUrl = null;
  state.recommendations = [];
  el.wineImage.value = "";
  el.imagePreview.removeAttribute("src");
  el.imagePreviewWrap.hidden = true;
  el.menuText.value = "";
  el.recommendations.innerHTML = "";
  el.recommendationSummary.innerHTML = "<p>Finish taste and add a menu to get a confident short list.</p>";
  setOcrStatus("Menu scan refreshed");
  updateSessionStatus();
}

function getMode() {
  return document.querySelector('input[name="servingMode"]:checked')?.value || "bottle";
}

function updateSessionStatus(text, ready = false) {
  const completeTaste = state.questionIndex >= QUESTIONS.length;
  const hasMenu = el.menuText.value.trim().length > 0;

  if (text) {
    el.sessionStatus.textContent = text;
    el.statusDot.classList.toggle("ready", ready);
    return;
  }

  if (completeTaste && hasMenu) {
    el.sessionStatus.textContent = "Ready to recommend";
    el.statusDot.classList.add("ready");
  } else if (completeTaste) {
    el.sessionStatus.textContent = "Taste saved";
    el.statusDot.classList.add("ready");
  } else {
    el.sessionStatus.textContent = "Taste check in progress";
    el.statusDot.classList.remove("ready");
  }
}

function formatMoney(value) {
  return `$${Math.round(value)}`;
}

function scoreLabel(value) {
  if (value >= 82) return "High";
  if (value >= 62) return "Good";
  return "Low";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function labelColor(color) {
  if (color === "rose") return "Rose";
  if (color === "sparkling") return "Sparkling";
  if (color === "red") return "Red";
  if (color === "white") return "White";
  return "Wine";
}

function foodLabel(food) {
  const labels = {
    "red-meat": "with steak or lamb",
    seafood: "with seafood",
    "white-meat": "with chicken or pork",
    tomato: "with pasta or pizza",
    spicy: "with spicy food",
    none: "just sipping",
  };
  return labels[food] || "with food";
}

function plainBody(body) {
  if (body === "bold") return "bold";
  if (body === "medium") return "medium-bodied";
  if (body === "light") return "light";
  return "flexible";
}

function bodyMeta(wine) {
  if (wine.color === "red" && Number.isFinite(wine.redBoldness)) {
    return `${plainBody(wine.body)} red`;
  }
  return plainBody(wine.body);
}

function plainTaste(taste) {
  if (taste === "crisp") return "crisp and dry";
  if (taste === "fruit") return "fruit-forward";
  if (taste === "dry") return "dry";
  return "balanced";
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
}

function capitalizeWords(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function bindEvents() {
  el.backQuestion.addEventListener("click", () => {
    state.questionIndex = Math.max(0, state.questionIndex - 1);
    renderAll();
  });

  el.resetTaste.addEventListener("click", () => {
    state.answers = {};
    state.questionIndex = 0;
    state.store.prefs = null;
    saveStore();
    renderAll();
  });

  el.budgetInput.addEventListener("input", () => {
    state.store.budget = Number.parseFloat(el.budgetInput.value) || 0;
    saveStore();
    updateSessionStatus();
  });

  [el.modeBottle, el.modeGlass, el.allowOverage].forEach((control) => {
    control.addEventListener("change", () => {
      state.store.mode = getMode();
      state.store.allowOverage = el.allowOverage.checked;
      saveStore();
    });
  });

  el.menuText.addEventListener("input", () => updateSessionStatus());
  el.wineImage.addEventListener("change", handleImageSelection);
  el.refreshMenu.addEventListener("click", refreshMenuScan);
  el.runOcr.addEventListener("click", runOcr);
  el.loadSample.addEventListener("click", () => {
    el.menuText.value = SAMPLE_MENU;
    setOcrStatus("Sample menu loaded");
    updateSessionStatus();
  });
  el.recommendButton.addEventListener("click", buildRecommendations);
  el.clearMemory.addEventListener("click", () => {
    state.store = defaultStore();
    state.answers = {};
    state.questionIndex = 0;
    hydrateFromStore();
    saveStore();
    renderAll();
    el.recommendations.innerHTML = "";
    el.recommendationSummary.innerHTML = "<p>Finish taste and add a menu to get a confident short list.</p>";
  });
}

hydrateFromStore();
bindEvents();
renderAll();
