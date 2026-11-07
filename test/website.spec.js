const { test, expect } = require('@playwright/test');

// 1. Перевірка переходу до іншої сторінки
test('Перехід до категорії товарів', async ({ page }) => {
  await page.goto('https://prom.ua/ua/');

  await page.getByRole('link', {
    name: 'Товари для дому',
    exact: true
  }).first().click();

  await expect(page).not.toHaveURL('https://prom.ua/ua/');
});

// 2. Перевірка заповнення поля пошуку
test('Заповнення пошукового поля', async ({ page }) => {
  await page.goto('https://prom.ua/ua/');

  const search = page.locator(
    'input[placeholder="Я шукаю..."]'
  ).first();

  await search.fill('Навушники');

  await expect(search).toHaveValue('Навушники');
});

// 3. Перевірка наявності кнопки пошуку
test('Перевірка кнопки пошуку', async ({ page }) => {
  await page.goto('https://prom.ua/ua/');

  await expect(
    page.getByRole('button', { name: 'Знайти' }).first()
  ).toBeVisible();
});