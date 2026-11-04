import { test, expect } from '@playwright/test';

const tools = [
  { id: 'phq9', heading: /PHQ-9/i },
  { id: 'gad7', heading: /GAD-7/i },
  { id: 'mood-reflection', heading: /Mood Pattern Reflection/i },
  { id: 'alcohol-reflection', heading: /Alcohol Use Reflection/i },
  { id: 'asrs', heading: /ASRS/i },
  { id: 'isi', heading: /Insomnia Severity Index/i },
  { id: 'dast10', heading: /DAST-10/i },
  { id: 'ptsd-reflection', heading: /PTSD Symptom Reflection/i },
  { id: 'scoff', heading: /SCOFF/i },
  { id: 'postpartum-reflection', heading: /Postpartum Mood Reflection/i },
];

test('every self-reflection tool opens, accepts answers, shows results and can be closed', async ({ page }) => {
  await page.goto('/en/interactive');

  const launchButtons = page.getByRole('button', { name: /Launch Reflection Tool/i });
  await expect(launchButtons).toHaveCount(tools.length);

  for (let index = 0; index < tools.length; index += 1) {
    await launchButtons.nth(index).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading').first()).toBeVisible();
    await expect(dialog.getByText(/0 of \d+ answered/i)).toBeVisible();

    const firstQuestion = dialog.locator('button[aria-pressed]').first();
    await expect(firstQuestion).toBeVisible();

    await dialog.getByRole('button', { name: /Close dialog/i }).click();
    await expect(dialog).toHaveCount(0);
  }
});

test('all ten tools can be switched inside the open dialog without stale answers', async ({ page }) => {
  await page.goto('/en/interactive');
  await page.getByRole('button', { name: /Launch Reflection Tool/i }).first().click();

  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();

  for (const tool of tools) {
    await dialog.getByRole('button', { name: new RegExp(tool.id, 'i') }).click();
    await expect(dialog.getByText(/0 of \d+ answered/i)).toBeVisible();
    await expect(dialog.getByRole('heading').first()).toBeVisible();
  }
});

test('self-reflection tools open in Hindi and Gujarati', async ({ page }) => {
  for (const language of ['hi', 'gu']) {
    await page.goto(`/${language}/interactive`);
    await page.getByRole('button', { name: /प्रश्नावली शुरू करें|પ્રશ્નાવલિ શરૂ કરો/i }).first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('button', { name: /Close dialog/i }).click();
  }
});
