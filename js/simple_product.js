document.addEventListener('DOMContentLoaded', () => {
    // 處理加號和減號按鈕的點擊事件
    document.querySelectorAll('.quantity').forEach(quantityDiv => {
        const minusButton = quantityDiv.querySelector('.minus');
        const plusButton = quantityDiv.querySelector('.plus');
        const quantitySpan = quantityDiv.querySelector('.current-quantity');

        minusButton.addEventListener('click', () => {
            let currentValue = parseInt(quantitySpan.textContent);
            if (currentValue > 1) {
                quantitySpan.textContent = currentValue - 1;
            }
        });

        plusButton.addEventListener('click', () => {
            let currentValue = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = currentValue + 1;
        });
    });
});

// 切換追蹤清單
function toggleWishlist(button) {
    const icon = button.querySelector('.wishlist-icon');
    if (icon.textContent === '♡') {
        icon.innerHTML = '<i class="fa fa-heart wishlist-icon tracked"></i>';
        button.innerHTML = '<i class="fa fa-heart wishlist-icon tracked"></i> 已追蹤';
    } else {
        icon.innerHTML = '♡';
        button.innerHTML = '<span class="wishlist-icon">♡</span> 加入追蹤清單';
    }
}
// 初始化
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.description-reviews-toggle button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按鈕的 active 類
            buttons.forEach(btn => btn.classList.remove('active'));
            // 為當前點擊的按鈕添加 active 類
            this.classList.add('active');
        });
    });
});

// 顯示商品描述
function showDescription() {
    document.getElementById('product-description').style.display = 'block';
    document.getElementById('product-reviews').style.display = 'none';
}

// 顯示商品評價
function showReviews() {
    document.getElementById('product-description').style.display = 'none';
    document.getElementById('product-reviews').style.display = 'block';
}