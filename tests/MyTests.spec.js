import { test, expect } from "@playwright/test";

test.only("get started link", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  // Click the get started link.
  await page.getByRole("link", { name: "Все новости о финансах" }).click();
  await expect(page).toHaveURL("https://money.onliner.by/");
}); //ok

test("has title", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Onlíner/);
}); //ok

test("find by CSS", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  // find logo on the page by CSS
  await page.locator(".b-top-logo").click();
  await page.locator(".g-bottom").click();
}); // ok

test("find by xpath", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  // find logo on the page by XPath
  await page
    .locator("//*[@id='onliner-catalog-purchases']/header/h2/a")
    .click();
}); //ok

test("find by placholder", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  await page.getByPlaceholder("Поиск в Каталоге. Например,").fill("Масло");
}); //ok

test("filter by locator1", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  await page
    .locator("ul.b-main-navigation>li")
    .filter({
      has: page.locator(
        ".b-main-navigation__advert.b-main-navigation__advert_another"
      ),
    })
    .click();
});

test("filter by locator2", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  await page
    .locator("ul.b-main-navigation>li")
    .filter({
      has: page.locator(
        ".b-main-navigation__advert.b-main-navigation__advert_primary"
      ),
    })
    .click();
}); //вариант2

test("filter by text", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  await page
    .locator(".footer-3-button")
    .filter({ hasText: /Все новости о финансах/ })
    .click();
});

test("n-element from list", async ({ page }) => {
  await page.goto("https://www.onliner.by/");
  await page.locator(".b-main-navigation").locator("nth = 0").click();
  await expect(page).toHaveURL("https://r.onliner.by/pk/");
});

// test("find list", async ({ page }) => {
//   await page.goto("https://www.onliner.by/");
//   await page.locator(".b-main-navigation");
// });
