import { test } from '@playwright/test';

test('Playwright Coding Activity - Multi-Form Interaction', async ({ page }) => {

  await page.goto('YOUR_FORM_URL_HERE');


  await page.locator('input[placeholder="Jane Doe"]').fill('Bea Rivera');

 
  await page.locator('.btn:has-text("SUBMIT")').click();


  const gridForm = page.locator('.card', { hasText: 'Using the Grid' });
  await gridForm.getByRole('textbox', { name: 'Email' }).fill('bea@test.com');
  await gridForm.getByRole('textbox', { name: 'Password' }).fill('Password123');

  
  const basicForm = page.locator('.card', { hasText: 'Basic form' });
  await basicForm.getByLabel('Check me out').check();

 
  const blockForm = page.locator('.card', { hasText: 'Block form' });
  await blockForm.getByPlaceholder('First Name').fill('Bea');

 
  const noLabelForm = page.locator('.card', { hasText: 'Form without labels' });
  await noLabelForm.getByText('SEND').click();


  await gridForm.getByLabel('Option 2').check();

  const horizontalForm = page.locator('.card', { hasText: 'Horizontal form' });
  await horizontalForm.getByRole('button', { name: 'SIGN IN' }).click();


  const basicCard = page.locator('.card', { hasText: 'Basic form' });

  await basicCard.getByLabel('Email address').fill('basic@test.com');
  await basicCard.getByLabel('Password').fill('Basic123');
  await basicCard.getByRole('button', { name: 'SUBMIT' }).click();


  const emailInput = basicCard.getByLabel('Email address');
  const passwordInput = basicCard.getByLabel('Password');
  const submitButton = basicCard.getByRole('button', { name: 'SUBMIT' });

  // First submission
  await emailInput.fill('user1@test.com');
  await passwordInput.fill('Pass1');
  await submitButton.click();

  // Second submission
  await emailInput.fill('user2@test.com');
  await passwordInput.fill('Pass2');
  await submitButton.click();
});
