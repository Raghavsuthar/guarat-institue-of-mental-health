import { test, expect } from '@playwright/test';

const tools = [
  { id: 'phq9', heading: /PHQ-9/i },
  { id: 'gad7', heading: /GAD-7/i },
  { id: 'mood-reflection', heading: /Mood Pattern Reflection/i },
  { id: 'alcohol-reflection', heading: /Alcohol Use Reflection/i },
  { id: 'asrs', heading: /ASRS/i },
  { id: 'isi', heading: /Sleep Difficulty Reflection/i },
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

    const questions = dialog.getByTestId('screener-question');
    await expect(questions.first()).toBeVisible();
    const questionCount = await questions.count();
    for (let questionIndex = 0; questionIndex < questionCount; questionIndex += 1) {
      await questions.nth(questionIndex).getByTestId('screener-answer').first().click();
    }
    await expect(dialog.getByText(new RegExp(`${questionCount} of ${questionCount} answered`))).toBeVisible();
    await dialog.getByRole('button', { name: /View Educational Reflection/i }).click();
    if (['phq9', 'gad7', 'asrs', 'dast10', 'scoff'].includes(tools[index].id)) {
      await expect(dialog.getByText(/Educational Reflection Score|Positive Responses/i)).toBeVisible();
    } else {
      await expect(dialog.getByText('Your reflections')).toBeVisible();
      await expect(dialog.getByText(/No validated clinical score or severity category is calculated/i)).toBeVisible();
    }

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


test('self-harm endorsement shows support before questionnaire completion', async ({ page }) => {
  await page.goto('/en/interactive');
  await page.getByRole('button', { name: /Launch Reflection Tool/i }).first().click();

  const dialog = page.getByRole('dialog');
  const selfHarmQuestion = dialog.getByTestId('screener-question').nth(8);
  await selfHarmQuestion.getByTestId('screener-answer').nth(1).click();

  const safetyAlert = dialog.getByRole('alert');
  await expect(safetyAlert).toContainText(/You do not need to wait for the questionnaire result/i);
  await expect(safetyAlert.getByRole('link', { name: /Call 112/i })).toHaveAttribute('href', 'tel:112');
  await expect(safetyAlert.getByRole('link', { name: /Call 14416/i })).toHaveAttribute('href', 'tel:14416');
});


test('self-reflection cards and scale answers respond to real mobile taps', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    screen: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  try {
    await page.goto('/en/interactive');

    const launchButton = page.getByRole('button', { name: /Launch Reflection Tool/i }).first();
    await launchButton.tap();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    const firstAnswer = dialog.getByTestId('screener-answer').first();
    await firstAnswer.tap();
    await expect(firstAnswer).toHaveAttribute('aria-pressed', 'true');
    await expect(dialog.getByText(/1 of \\d+ answered/i)).toBeVisible();
  } finally {
    await context.close();
  }
});
