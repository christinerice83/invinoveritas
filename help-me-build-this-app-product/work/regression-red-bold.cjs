const fs = require("node:fs");
const vm = require("node:vm");

const code = fs.readFileSync("outputs/in-vino-veritas/app.js", "utf8");
const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: {
    querySelector: () => ({
      addEventListener: () => {},
      appendChild: () => {},
      removeAttribute: () => {},
      querySelectorAll: () => [],
      classList: { toggle: () => {}, add: () => {}, remove: () => {} },
      scrollTop: 0,
      scrollHeight: 0,
      value: "",
      checked: false,
      hidden: false,
      innerHTML: "",
      textContent: "",
    }),
    createElement: () => ({
      appendChild: () => {},
      addEventListener: () => {},
      querySelectorAll: () => [],
      classList: { toggle: () => {}, add: () => {}, remove: () => {} },
      style: {},
    }),
    head: { appendChild: () => {} },
  },
  window: {},
  URL: { createObjectURL: () => "", revokeObjectURL: () => {} },
  crypto: { randomUUID: () => "test" },
};

vm.createContext(sandbox);
vm.runInContext(`${code}\nthis.__test = { parseWineList, scoreWine, isCompatibleWithPrefs };`, sandbox);

const prefs = {
  color: "red",
  body: "bold",
  taste: "crisp",
  grapes: ["Tannat"],
  food: "red-meat",
  adventure: "familiar",
};
const menu = `
WHITE & SPARKLING WINE
CALABA PANATE BIN MOSCATO Sonoma County 51
RED WINE
Pinot Noir Sonoma County 64
Merlot Columbia Valley 68
Zinfandel California 72
Cabernet Sauvignon Paso Robles 88
`;

const wines = sandbox.__test.parseWineList(menu, "bottle");
const eligible = wines.filter((wine) => wine.price <= 112);
const scored = eligible
  .map((wine) => sandbox.__test.scoreWine(wine, prefs, 100, "bottle", true, { likedGrapes: {}, likedStyles: {}, avoid: {} }))
  .sort((a, b) => b.score - a.score);
const red = scored.filter((wine) => wine.color === "red");
if (!red.length) throw new Error("No red wines detected");
if (red[0].color !== "red" || /moscato/i.test(red[0].name)) {
  throw new Error(`Bad top pick: ${red[0].name}`);
}
console.log(JSON.stringify({ ok: true, top: red[0].name, parsed: wines.map((wine) => `${wine.name}:${wine.color}:${wine.body}`).join("|") }));
