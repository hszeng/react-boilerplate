import { test, expect } from '@playwright/test';

test.describe('Task Management Application', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('/');
    // Wait for the application to load
    await page.waitForSelector('h1:has-text("Task Manager")', {
      timeout: 10000,
    });
  });

  test('should display task manager interface', async ({ page }) => {
    // Check if the main interface elements are present
    await expect(
      page.getByRole('heading', { name: 'Task Manager' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Add New Task' })
    ).toBeVisible();
  });

  test('should open task creation modal', async ({ page }) => {
    // Click the Add New Task button
    await page.getByRole('button', { name: 'Add New Task' }).click();

    // Verify the modal is open by checking for form elements
    await expect(page.getByLabel('Title')).toBeVisible();
    await expect(page.getByLabel('Description')).toBeVisible();
  });

  test('should have filter controls', async ({ page }) => {
    // Check if filter controls are present
    await expect(page.getByText('Filter By')).toBeVisible();
    await expect(page.getByText('Sort By')).toBeVisible();
  });

  test('should display existing tasks', async ({ page }) => {
    // Check if there are existing tasks displayed
    // This test will pass if there are any task cards on the page
    const taskCards = page.locator('h3');
    await expect(taskCards.first()).toBeVisible();
  });
});
