import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const languageCases = [
  { path: '/en/privacy', heading: 'Privacy notice', link: 'Terms of use' },
  { path: '/hi/privacy', heading: 'गोपनीयता सूचना', link: 'उपयोग की शर्तें' },
  { path: '/gu/privacy', heading: 'ગોપનીયતા સૂચના', link: 'ઉપયોગની શરતો' },
];

for (const item of languageCases) {
  test(`localized privacy route renders in ${item.path.split('/')[1]}`, async ({ page }) => {
    await page.goto(item.path);
    await expect(page.getByRole('heading', { level: 1, name: item.heading })).toBeVisible();
    await expect(page.getByRole('link', { name: item.link }).first()).toBeVisible();
    await expect(page.locator('main')).toContainText(/draft|मसौदा|મુસદ્દો/i);
    await expect(page.locator('footer').getByRole('link', { name: /privacy|गोपनीयता|ગોપનીયતા/i })).toHaveAttribute('href', item.path);
  });
}

test('terms route renders and links back to privacy', async ({ page }) => {
  await page.goto('/en/terms');
  await expect(page.getByRole('heading', { level: 1, name: 'Terms of use' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Privacy notice' }).first()).toHaveAttribute('href', '/en/privacy');
  await expect(page.locator('main')).toContainText('Do not delay care');
});

test('privacy page has no serious or critical axe violations', async ({ page }) => {
  await page.goto('/en/privacy');
  await expect(page.getByRole('heading', { level: 1, name: 'Privacy notice' })).toBeVisible();

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const highImpact = results.violations.filter((violation) =>
    violation.impact === 'critical' || violation.impact === 'serious'
  );
  expect(
    highImpact.map(({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      targets: nodes.map(({ target }) => target),
    })),
    'High-impact axe findings must be fixed before merge'
  ).toEqual([]);
});

test('legal page stays within common mobile and desktop widths', async ({ page }) => {
  for (const width of [360, 390, 768, 1280, 1536]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/en/privacy');
    await expect(page.getByRole('heading', { level: 1, name: 'Privacy notice' })).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    expect(dimensions.document, `horizontal overflow at ${width}px: ${JSON.stringify(dimensions)}`).toBeLessThanOrEqual(dimensions.viewport + 1);
  }
});
