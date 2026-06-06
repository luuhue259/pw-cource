import { test } from '@playwright/test';

test('Bài 1', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click vao bai 4', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();

    });

    await test.step('Add note 1', async () => {

        await page.locator("//input[@id='note-title']").fill('click');
        await page.locator("//textarea[@id='note-content']").fill('Hàm click dùng để thực hiện click vào các phần tử trên trang web');
        await page.click("//button[@id='add-note']");

    });

    await test.step('Add note 2', async () => {

        await page.locator("//input[@id='note-title']").fill('fill');
        await page.locator("//textarea[@id='note-content']").fill('Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên');
        await page.click("//button[@id='add-note']");

    });

    await test.step('Add note 3', async () => {

        await page.locator("//input[@id='note-title']").fill('type');
        await page.locator("//textarea[@id='note-content']").fill('Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng');
        await page.click("//button[@id='add-note']");

    });


    await test.step('Add note 4', async () => {

        await page.locator("//input[@id='note-title']").fill('hover');
        await page.locator("//textarea[@id='note-content']").fill('Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover');
        await page.click("//button[@id='add-note']");

    });


    await test.step('Add note 5', async () => {

        await page.locator("//input[@id='note-title']").fill('check');
        await page.locator("//textarea[@id='note-content']").fill('Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked');
        await page.click("//button[@id='add-note']");

    });


    await test.step('Add note 6', async () => {

        await page.locator("//input[@id='note-title']").fill('uncheck');
        await page.locator("//textarea[@id='note-content']").fill('Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked');
        await page.click("//button[@id='add-note']");

    });

    await test.step('Add note 7', async () => {

        await page.locator("//input[@id='note-title']").fill('selectOption');
        await page.locator("//textarea[@id='note-content']").fill('Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown');
        await page.click("//button[@id='add-note']");

    });

    await test.step('Add note 8 ', async () => {

        await page.locator("//input[@id='note-title']").fill('press');
        await page.locator("//textarea[@id='note-content']").fill('Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác');
        await page.click("//button[@id='add-note']");

    });


    await test.step('Add note 9', async () => {

        await page.locator("//input[@id='note-title']").fill('dblclick');
        await page.locator("//textarea[@id='note-content']").fill('Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web');
        await page.click("//button[@id='add-note']");

    });


    await test.step('Add note 10', async () => {

        await page.locator("//input[@id='note-title']").fill('dragAndDrop');
        await page.locator("//textarea[@id='note-content']").fill('Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web');
        await page.click("//button[@id='add-note']");

    });


    await test.step('Search key word: một hoặc nhiều', async () => {

        await page.locator("//input[@id='search']").fill('một hoặc nhiều');


    });






});