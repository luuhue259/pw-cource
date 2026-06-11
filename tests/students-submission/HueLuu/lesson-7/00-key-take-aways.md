# Selector Advanced (Lesson 7) 

## 1. Mối quan hệ giữa các node trong DOM

DOM được mô tả như một cây (tree). Các quan hệ giữa node hiện tại với các node khác:

| Quan hệ | Ý nghĩa | Mô tả |
|---|---|---|
| *self* | chính nó | Node hiện tại |
| *parent* | cha | Node phía trên trực tiếp của node hiện tại |
| *children* | con | Các node phía dưới trực tiếp của node hiện tại |
| *ancestor* | tổ tiên | Cha, ông, cụ... (cha của cha của cha...) |
| *descendant* | hậu duệ | Con, cháu, chắt... (mọi cấp bên dưới) |
| *sibling* | anh em | Các phần tử cùng cấp, cùng cha |
| *following* | theo sau | Các node phía bên phải node hiện tại trong document (KHÔNG lấy con của node hiện tại) |
| *preceding* | phía trước | Các node phía bên trái node hiện tại (trừ các node ancestor) |
| *following-sibling* | anh em phía sau | = following + sibling |
| *preceding-sibling* | anh em phía trước | = preceding + sibling |

---

## 2. XPath Axes Methods

XPath axes methods (phương thức trục XPath) là các phương pháp điều hướng và chọn node trong cây DOM dựa trên **mối quan hệ giữa các node**.


*Công dụng:*
- Tìm element dựa trên vị trí tương đối (parent, child, sibling, ancestor...).
- Linh hoạt hơn so với chỉ dùng đường dẫn tuyệt đối/tương đối thuần.

*Cú pháp chung:*

//tag/relationship::tagname[@attr='value']

### Các axes thường dùng

| Axis | Ý nghĩa | Ví dụ |
|---|---|---|
| child | Con trực tiếp | //form[@id='test-form']/child::button |
| descendant | Tất cả con cháu (mọi cấp) | //form[@id='test-form']/descendant::input |
| parent | Cha trực tiếp | //button[text()='Create Test Case']/parent::form |
| ancestor | Tổ tiên | //button[@class='btn-edit']/ancestor::table |
| following-sibling | Anh em ngay sau (cùng cấp) | //label[@for='testName']/following-sibling::input |
| preceding-sibling | Anh em đứng trước (cùng cấp) | //button[@class='btn-reset']/preceding-sibling::button |
| following | Tất cả node phía sau trong document | //h2[text()='Test Cases List']/following::button[@class='btn-run'] |
| preceding | Tất cả node phía trước trong document | //h2[text()='Test Execution Results']/preceding::td[@class='priority-high'] |
| ancestor-or-self | Tổ tiên hoặc chính nó | //table[@id='test-table']/ancestor-or-self::span[contains(@class,'status')] |
| descendant-or-self | Con cháu hoặc chính nó | //table[@id='test-table']/descendant-or-self::span[contains(@class,'status')] |

---

## 3. Wildcard *

Khớp tất cả các loại thẻ.

//div   -> khớp thẻ div
//*     -> khớp tất cả các loại thẻ

---

## 4. Truy cập thuộc tính & toán tử logic

### Thuộc tính @attribute

//tagname[@attribute='value']

### AND / OR

//element[@condition1 and @condition2]   -- tất cả điều kiện phải đúng
//element[@condition1 or @condition2]    -- chỉ cần một điều kiện đúng

---

## 5. Các hàm xử lý text

| Hàm | Công dụng | Cú pháp |
|---|---|---|
| text() | Lấy text node trực tiếp của element (khớp chính xác) | //element[text()='exact text'] |
| normalize-space() | Chuẩn hóa khoảng trắng (bỏ khoảng trắng thừa ở đầu, cuối, giữa) | normalize-space(string) |
| contains() | Kiểm tra chứa chuỗi con (không cần khớp chính xác) | //element[contains(@attribute,'substring')] hoặc //element[contains(text(),'substring')] |
