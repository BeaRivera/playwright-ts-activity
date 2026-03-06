import { test, expect } from '@playwright/test';

test('Playwright Activity - Bea - Localhost', async ({ page }) => {
  await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveURL(/localhost:4200/);
  await expect(page.locator('app-root')).toBeVisible();

 await page.getByPlaceholder('Jane Doe').fill('Bea Rivera');

  await page
    .locator('nb-card', { hasText: 'Inline form' })
    .locator('button.appearance-filled:has-text("Submit")')
    .click();

  const usingGridCard = page.locator('nb-card', { hasText: 'Using the Grid' });
  await usingGridCard.getByRole('textbox', { name: 'Email' }).fill('bea.rivera@email.com');
  await usingGridCard.getByRole('textbox', { name: 'Password' }).fill('BeaPassword123');

  const basicFormCard = page.locator('nb-card', { hasText: 'Basic form' });
  await basicFormCard.locator('nb-checkbox').click();

  await page
    .locator('nb-card', { hasText: 'Block form' })
    .getByPlaceholder('First Name')
    .fill('Bea');

  await page
    .locator('nb-card', { hasText: 'Form without labels' })
    .getByText('Send')
    .click();

  await usingGridCard.getByRole('radio', { name: 'Option 2' }).click({ force: true });

  await page
    .locator('nb-card', { hasText: 'Horizontal form' })
    .getByRole('button', { name: 'Sign in' })
    .click();

  const emailField = basicFormCard.getByRole('textbox', { name: 'Email address' });
  const passwordField = basicFormCard.getByRole('textbox', { name: 'Password' });
  const submitBtn = basicFormCard.getByRole('button', { name: 'Submit' });

  await emailField.fill('bea.test1@email.com');
  await passwordField.fill('BeaTest123');
  await submitBtn.click();

  await emailField.fill('bea.test2@email.com');
  await passwordField.fill('BeaTest456');
  await submitBtn.click();

  await emailField.fill('bea.test3@email.com');
  await passwordField.fill('BeaTest789');
  await submitBtn.click();
});