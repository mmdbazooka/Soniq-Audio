import { test, expect } from "@playwright/test";
test("visual EQ presets and honest material studies update", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Bass", exact: true }).click();
  await expect(page.locator(".eq-description")).toContainText(
    "FEEL THE FOUNDATION.",
  );
  await expect(
    page.getByRole("img", { name: /Bass equalizer profile/ }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Vocal", exact: true }).click();
  await expect(page.locator(".eq-description")).toContainText(
    "CLOSER TO THE STORY.",
  );
  await page.getByRole("button", { name: "Frost", exact: true }).click();
  await expect(
    page.getByRole("img", { name: "Frost material finish study" }),
  ).toBeVisible();
  await expect(page.locator(".material-copy")).toContainText(
    "Cool satin silver",
  );
  await expect(page.locator(".material-product img")).toHaveAttribute(
    "alt",
    "Original H1 graphite and copper headphone concept photograph",
  );
  await page
    .getByRole("button", { name: "FEEL THE DEPTH", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "SOFTEN THE WAVE", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});
test("launch updates validate without sending any data", async ({ page }) => {
  await page.goto("/");
  const sent: string[] = [];
  page.on("request", (r) => {
    if (r.method() === "POST") sent.push(r.url());
  });
  const form = page.locator(".soniq-finale .signup-form");
  await form.getByLabel("Email address").fill("alex@example.com");
  await form.getByRole("button", { name: "Get launch updates" }).click();
  await expect(page.getByRole("status")).toContainText(
    "were not sent or saved",
  );
  expect(sent).toEqual([]);
});
