const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("C:/Users/Christine Rice/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.60.0/node_modules/playwright");

async function clickText(page, text) {
  await page.getByText(text, { exact: true }).click();
}

(async () => {
  const appPath = path.resolve(__dirname, "../outputs/in-vino-veritas/index.html");
  const appUrl = pathToFileURL(appPath).href;
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
  const consoleErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto(appUrl);
  await page.waitForLoadState("domcontentloaded");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForLoadState("domcontentloaded");

  await clickText(page, "Red");
  await clickText(page, "Middleweight");
  await clickText(page, "Not sweet");
  await clickText(page, "Cabernet");
  await page.getByRole("button", { name: "Next" }).click();
  await clickText(page, "Steak or lamb");
  await clickText(page, "Stay familiar");
  await clickText(page, "Sample");
  await clickText(page, "Pick for me");

  await page.waitForSelector(".rec-card");
  const recCount = await page.locator(".rec-card").count();
  const summary = await page.locator("#recommendationSummary").innerText();
  const firstPick = await page.locator(".rec-card .rec-title").first().innerText();

  await page.screenshot({
    path: path.resolve(__dirname, "ivv-desktop.png"),
    fullPage: true,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: path.resolve(__dirname, "ivv-mobile.png"),
    fullPage: true,
  });

  await browser.close();

  if (recCount < 3) {
    throw new Error(`Expected at least 3 recommendations, found ${recCount}`);
  }
  if (!summary.includes("Order the")) {
    throw new Error("Recommendation summary did not include a clear top-choice directive");
  }
  if (/pinot/i.test(firstPick)) {
    throw new Error(`Regression: light Pinot ranked first for Cabernet + steak preference: ${firstPick}`);
  }
  if (consoleErrors.length) {
    throw new Error(`Browser console errors: ${consoleErrors.join(" | ")}`);
  }

  console.log(
    JSON.stringify({
      ok: true,
      recCount,
      firstPick,
      summary,
      screenshots: ["work/ivv-desktop.png", "work/ivv-mobile.png"],
    }),
  );
})();
