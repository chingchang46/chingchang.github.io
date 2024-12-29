function updateQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector(".quantity");
    const subtotalElement = button.closest(".purchasefile").querySelector(".subtotal");
    const priceElement = button.closest(".purchasefile").querySelector(".product-remark");

    // 獲取單價和目前數量
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    let quantity = parseInt(quantitySpan.textContent);

    // 更新數量
    quantity = Math.max(1, quantity + change); // 確保數量至少為 1
    quantitySpan.textContent = quantity;

    // 計算小計
    const subtotal = price * quantity;
    subtotalElement.textContent = `$${subtotal}`;
}

function showCart2(event) {
    event.preventDefault(); // 防止跳轉或提交表單
    document.getElementById("cart").style.display = "none";
    document.getElementById("cart2").style.display = "block";
}

function showInputInfo(event) {
    // 隱藏目前的購物車頁面
    document.getElementById('cart2').style.display = 'none';
    
    // 顯示填寫資料頁面
    document.getElementById('InputInfo').style.display = 'block';
}

function showEnd(event) {
    // 隱藏目前的購物車頁面
    document.getElementById('InputInfo').style.display = 'none';
    
    // 顯示填寫資料頁面
    document.getElementById('End').style.display = 'block';
}