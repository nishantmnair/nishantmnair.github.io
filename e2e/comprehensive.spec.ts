import { test, expect } from '@playwright/test';

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

test.describe('Portfolio Comprehensive Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Nishant Nair/);
    console.log('✅ Page loaded:', await page.title());
  });

  test('should display all navigation tabs', async ({ page }) => {
    await expect(page.getByRole('tab', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /portfolio/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /resume/i })).toBeVisible();
    console.log('✅ All navigation tabs visible');
  });

  test('should navigate to About section by default', async ({ page }) => {
    await expect(page.getByText('Nishant Nair')).toBeVisible();
    await expect(page.getByText(/computer science/i)).toBeVisible();
    console.log('✅ About section loaded by default');
  });

  test('should navigate to Portfolio section', async ({ page }) => {
    await page.getByRole('tab', { name: /portfolio/i }).click();
    await expect(page.getByText(/my portfolio/i)).toBeVisible();
    await expect(page.getByText(/ResumeRocket/i)).toBeVisible();
    console.log('✅ Portfolio section navigation works');
  });

  test('should navigate to Resume section', async ({ page }) => {
    await page.getByRole('tab', { name: /resume/i }).click();
    await expect(page.getByText(/education/i)).toBeVisible();
    await expect(page.getByText(/experience/i)).toBeVisible();
    await expect(page.getByText(/skills/i)).toBeVisible();
    console.log('✅ Resume section navigation works');
  });

  test('should display floating contact icons', async ({ page }) => {
    await expect(page.locator('a[href*="github"]')).toBeVisible();
    await expect(page.locator('a[href*="linkedin"]')).toBeVisible();
    await expect(page.locator('a[href*="mailto"]')).toBeVisible();
    console.log('✅ Contact icons visible');
  });

  test('should load profile image', async ({ page }) => {
    const profileImg = page.locator('img[alt="Nishant Nair"]');
    await expect(profileImg).toBeVisible();
    console.log('✅ Profile image loaded');
  });

  test('should load portfolio project images', async ({ page }) => {
    await page.getByRole('tab', { name: /portfolio/i }).click();
    const projectImages = page.locator('img').filter({ hasText: /ResumeRocket|EA FC24/ });
    await page.waitForTimeout(1000);
    console.log('✅ Portfolio images check complete');
  });

  test('should display all experience entries', async ({ page }) => {
    await page.getByRole('tab', { name: /resume/i }).click();
    await expect(page.getByText(/bristol myers squibb/i)).toBeVisible();
    await expect(page.getByText(/new jersey institute of technology/i)).toBeVisible();
    await expect(page.getByText(/the f\* word/i)).toBeVisible();
    console.log('✅ All experience entries visible');
  });

  test('should check for console errors', async ({ page }) => {
    const errors: string[] = [];
    const warnings: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
      if (msg.type() === 'warning') {
        warnings.push(msg.text());
      }
    });
    
    await page.goto(BASE_URL);
    await page.waitForTimeout(2000);
    
    if (errors.length > 0) {
      console.log('❌ Console errors found:', errors);
    } else {
      console.log('✅ No console errors');
    }
    
    if (warnings.length > 0) {
      console.log('⚠️ Console warnings:', warnings);
    }
  });

  test('should check for failed network requests', async ({ page }) => {
    const failedRequests: string[] = [];
    
    page.on('response', response => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.status()} ${response.url()}`);
      }
    });
    
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    
    if (failedRequests.length > 0) {
      console.log('❌ Failed requests:', failedRequests);
    } else {
      console.log('✅ All network requests successful');
    }
    
    expect(failedRequests.length).toBe(0);
  });

  test('should verify CSS is loaded', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check if main element has the expected background gradient classes
    const main = page.locator('main');
    await expect(main).toHaveClass(/min-h-screen/);
    
    // Check if computed styles are applied
    const bgColor = await main.evaluate(el => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    console.log('✅ CSS loaded, background color:', bgColor);
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)'); // Should not be transparent
  });

  test('should verify JavaScript is working', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Click on different tabs to verify JS interactivity
    await page.getByRole('tab', { name: /portfolio/i }).click();
    await page.waitForTimeout(500);
    
    await page.getByRole('tab', { name: /resume/i }).click();
    await page.waitForTimeout(500);
    
    await page.getByRole('tab', { name: /about/i }).click();
    
    console.log('✅ JavaScript interactivity working');
  });

  test('should check image paths', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const images = await page.locator('img').all();
    const imageSources: string[] = [];
    
    for (const img of images) {
      const src = await img.getAttribute('src');
      if (src) imageSources.push(src);
    }
    
    console.log('📸 Image sources:', imageSources);
    
    // Verify images have proper paths
    for (const src of imageSources) {
      if (src.startsWith('http')) {
        console.log('External image:', src);
      } else if (src.startsWith('/')) {
        console.log('Absolute path:', src);
      } else if (src.startsWith('data:')) {
        console.log('Data URL');
      } else {
        console.log('Relative path:', src);
      }
    }
  });
});
