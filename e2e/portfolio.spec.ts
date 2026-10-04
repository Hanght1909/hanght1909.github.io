import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
for (const width of [1440, 768, 390, 320]) {
  test('responsive portfolio at ' + width, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 960 });
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-color-mode', 'light');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    await page.getByRole('tab', { name: 'C&B & phúc lợi', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Hỗ trợ C&B & phúc lợi' })).toBeVisible();
    const a11y = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(a11y.violations).toEqual([]);
    if (width < 760) {
      await page.getByRole('button', { name: 'Mục lục', exact: true }).click();
      await expect(page.getByRole('navigation', { name: 'Điều hướng di động' })).toBeVisible();
      await page
        .getByRole('navigation', { name: 'Điều hướng di động' })
        .getByRole('link', { name: 'Chuyên môn' })
        .click();
    }
    expect(errors).toEqual([]);
    if (process.env.SCREENSHOT_DIR) {
      await page.getByRole('tab', { name: 'Nhân sự', exact: true }).click();
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await page.screenshot({
        path: process.env.SCREENSHOT_DIR + '/portfolio-' + width + '.png',
        fullPage: true,
      });
    }
  });
}
test('keyboard skip link and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Đến nội dung chính' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
});
