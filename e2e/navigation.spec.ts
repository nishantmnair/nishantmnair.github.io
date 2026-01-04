import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {
  test('should navigate between tabs', async ({ page }) => {
    await page.goto('/');

    // Check initial About tab is visible
    await expect(page.getByRole('heading', { name: 'Nishant Nair' })).toBeVisible();

    // Click on Portfolio tab
    await page.getByRole('tab', { name: 'Portfolio' }).click();
    await expect(page.getByRole('heading', { name: 'My Portfolio' })).toBeVisible();

    // Click on Resume tab
    await page.getByRole('tab', { name: 'Resume' }).click();
    await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
    await expect(page.getByText('Education')).toBeVisible();

    // Click on Contact tab
    await page.getByRole('tab', { name: 'Contact' }).click();
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Contact tab
    await page.getByRole('tab', { name: 'Contact' }).click();

    // Verify contact info is displayed
    await expect(page.getByText('nnair4002@gmail.com')).toBeVisible();
    await expect(page.getByText('+1 (609) 721-8070')).toBeVisible();
    await expect(page.getByText('Princeton, NJ')).toBeVisible();
  });

  test('should open and close contact dialog', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Contact tab
    await page.getByRole('tab', { name: 'Contact' }).click();

    // Click the message button
    await page.getByRole('button', { name: 'Send Me a Message' }).click();

    // Verify dialog is open
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Contact Me')).toBeVisible();

    // Close the dialog (by pressing Escape)
    await page.keyboard.press('Escape');
    
    // Verify dialog is closed
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });
});
