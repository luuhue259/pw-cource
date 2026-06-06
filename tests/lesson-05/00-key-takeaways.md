# Lesson 05: DOM terminology Playwright basic
## DOM (Documen object modle)
- Cấu trúc của DOM : 1 website, Máy tính sẽ “nhìn” ở dưới dạng “cây có cấu trúc” Mở cây này bằng cách bấm phím F12 (hoặc chuột phải vào vùng trống, chọn “Inspect”); sau đó chọn tab “Element”
- Các loại thẻ HTML thường gặp: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
- Các thẻ tiêu chuẩn
1. Thẻ cấu trúc khung trang: <html>, <head>, <body>
2. Thẻ Bố Cục & Ngữ nghĩa: <div>, <header>, <footer>, <nav>, <section>
3. Thẻ Nội Dung: <h1> đến <h6>, <<paragraph>, <ul>, <li>, <ol>
4. Thẻ Tương tác media: <a>, <img>
5. Thẻ form (quan trọng với testing): <form>, <input>, <button>, <select>, <textarea>

## SELECTOR 

### Tổng quan 3 loại selector

| Loại | Ưu điểm | Nhược điểm | Ví dụ |
|---|---|---|---|
| *XPath* | Dùng được hầu hết trường hợp (99.99%), đa dạng, tìm được phần tử khó | Hơi dài | //button[normalize-space()='Add to cart'] |
| *CSS selector* | Ngắn gọn, performance cao, hợp với trường hợp dễ tìm | Không linh hoạt bằng XPath | .add-to-cart |
| *Playwright selector* | Cú pháp ngắn gọn, không phụ thuộc cấu trúc DOM, hướng tới "người dùng nhìn thấy gì" | Chỉ dùng riêng cho Playwright | page.getByText("Add to cart") |

### Khi nào dùng gì?

- Thứ tự ưu tiên: *Playwright selector > CSS selector > XPath*
- Vẫn cần học cả 3 để "cân" được mọi dự án — có dự án "thích" CSS, có dự án "thích" XPath, phải tuân theo.

---

### XPath chi tiết

*XPath = XML Path*, có 2 loại:

#### 1. XPath tuyệt đối
- Bắt đầu bằng **một dấu /**, đi dọc theo cây DOM từ root.
- VD: /html/body/div/input
- Đặc điểm: phải viết đầy đủ đường dẫn từ root, *dễ lỗi khi HTML thay đổi*, ít linh hoạt.

#### 2. XPath tương đối
- Bắt đầu bằng **hai dấu //**, tìm element ở bất kỳ đâu trong DOM.
- Cú pháp: //tenthe[@thuoctinh="giatri"] — VD: //input[@id='user']
- Đặc điểm: linh hoạt, ít bị ảnh hưởng khi HTML thay đổi → *nên dùng trong thực tế*.

#### Mẹo
- Dùng tương đối (//) cho *99%* trường hợp; tránh tuyệt đối (/) trừ khi chắc chắn cấu trúc không đổi.
- Luôn kết hợp với thuộc tính @id, @class, @name để XPath chính xác hơn.

---

### Playwright - Cú pháp cơ bản

Automation = **tương tác + verify**


#### Cấu trúc test & step

import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
    await test.step('Tên step', async () => {
        // Code here
    });
});

- test: đơn vị cơ bản khai báo một test.
- step: đơn vị nhỏ hơn, khai báo từng bước. *Nên map 1-1 với test case* để dễ maintain.

#### Các thao tác tương tác cơ bản

| Nhóm | Thao tác | Cú pháp |
|---|---|---|
| *Navigate* | Mở trang | await page.goto('https://...') |
| *Locate* | Chọn phần tử | page.locator("//input[@id='email']") |
| *Click* | Click thường | await page.locator("//button").click() |
| | Double click | await page.locator("//button").dblclick() |
| | Click chuột phải | page.locator("//button").click({ button: 'right' }) |
| | Click kèm phím | page.locator("").click({ modifiers: ['Shift'] }) |
| *Input* | Fill (như paste) | page.locator("//input").fill('Playwright Viet Nam') |
| | Gõ từng chữ | page.locator("//input").pressSequentially('...', { delay: 100 }) |
| *Radio/Checkbox* | Kiểm tra trạng thái | page.locator("//input").isChecked() |
| | Check / uncheck | .check() / .setChecked(false) |
| *Select* | Chọn option | page.locator('//select[@id="country"]').selectOption({ label: 'USA' }) |
| *Upload file* | Tải file lên | (dùng setInputFiles) |
