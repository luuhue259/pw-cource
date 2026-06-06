import { test } from '@playwright/test';

test('Bài 1', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click vao bai 1', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();

    });

    await test.step('input username: Hue Luu', async () => {
        await page.locator("//input[@id='username']").fill("Hue Luu");
    });

    await test.step('input email:luuhue@gmail.com', async () => {
        await page.locator("//input[@id='email']").fill("luuhue@gmail.com");
    });

    await test.step('check gender: Female', async () => {
        await page.locator("//input[@id='female']").check();
    });

    await test.step('check 2 Hobbies: Reading, travelling', async () => {
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();

    });

    await test.step('Select 2 Interests: Music, Art', async () => {
        await page.locator("//select[@id='interests']").selectOption(["music", "art"]);
    });

    await test.step('Select country: Canada ', async () => {
        await page.locator("//select[@id='country']").selectOption(["Canada"]);
    });


    await test.step('input dateofbirth: 09/25/1998', async () => {
        await page.locator("//input[@id='dob']").fill("1998-09-25");
    });

    await test.step('upload profile', async () => {
        await page.locator("//input[@id='profile']").setInputFiles("C:/Users/hueluu/OneDrive - Fortna Inc/Pictures/Screenshots/Screenshot 2026-04-20 220244.png");
    });


    await test.step('input Biography', async () => {
        await page.locator("//textarea[@id='bio']").fill("Jane Smith is a software engineer with over 10 years of experience in web application development. She specializes in cloud technologies and distributed systems. Jane has led engineering teams at several technology companies and is passionate about mentoring junior developers. She holds a Bachelor's degree in Computer Science from the University of California, Berkeley.");
    });



});