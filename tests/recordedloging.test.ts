import { test, expect } from '@playwright/test';

test('recordedlogin', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a')
  await page.getByRole('link', { name: 'Login' }).click();
});