import { test, expect } from '@playwright/test';

test('interactive assessment card opens the matching tool', async ({ page }) => {
  await page.goto('/en/interactive');

  const gadCard = page
    .getByText('gad7', { exact: true })
    .locator('xpath=ancestor::div[contains(@class, "rounded-xl")][1]');

  await expect(gadCard).toBeVisible();
  await gadCard.getByRole('button', { name: /Launch Reflection Tool/i }).click();

  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading', { name: /GAD-7/i })).toBeVisible();
  await expect(dialog.getByText(/anxiety/i).first()).toBeVisible();
});
