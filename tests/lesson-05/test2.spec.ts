import { test } from '@playwright/test';

test('Bài 1', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click vao bai 1', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();

    });


    await test.step('Selec product 1', async () => {
        for (let i = 0; i < 2; i++) {

            await page.locator("//button[@class ='add-to-cart' and @data-product-id='1']").click();
        }
    });

    await test.step('Selec product 2', async () => {
        for (let i = 0; i < 3; i++) {

            await page.locator("//button[@class ='add-to-cart' and @data-product-id='2']").click();
        }

    });

    await test.step('Selec product 3', async () => {
        await page.locator("//button[@class ='add-to-cart' and @data-product-id='3']").click();

    });


});