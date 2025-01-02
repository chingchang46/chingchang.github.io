document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sidebar button');
    const items = Array.from(document.querySelectorAll('.item'));
    const imageGallery = document.querySelector('.image-gallery');
    const sortOptions = document.getElementById('sort-options'); // 下拉選單

    // 保存初始順序
    const initialOrder = [...items];

    let isNewestFirst = true; // 日期排序狀態：新至舊
    let isPriceHighToLow = true; // 價格排序狀態：高至低

    // 側邊欄按鈕點擊事件
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            switch (button.id) {
                case 'all':
                    resetToInitialOrder();
                    break;
                case 'festival-limited':
                    showFestivalLimitedItems();
                    break;
                case 'best-seller':
                    showBestSellerItems();
                    break;
                case 'Classic Flavors':
                    showClassicFlavors();
                    break;
                case 'Fruit Flavors':
                    showFruitFlavors();
                    break;
                case 'Dessert Flavors':
                    showDessertFlavors();
                    break;
                case 'Candy Flavors':
                    showCandyFlavors();
                    break;
                case 'Drinks Flavors':
                    showDrinksFlavors();
                    break;
                case 'Chocolate Flavors':
                    showChocolateFlavors();
                    break;
                case 'Special Flavors':
                    showSpecialFlavors();
                    break;
                default:
                    console.warn('未知按鈕');
            }
        });
    });

    // 下拉選單排序事件
    sortOptions.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue !== '') {
            switch (selectedValue) {
                case 'newest':
                    sortByNewest();
                    break;
                case 'oldest':
                    sortByOldest();
                    break;
                case 'price-high':
                    sortByPriceHigh();
                    break;
                case 'price-low':
                    sortByPriceLow();
                    break;
                default:
                    console.warn('未知的排序選項');
            }
        }
    });

    // 恢復初始順序並顯示所有商品
    function resetToInitialOrder() {
        if (imageGallery) imageGallery.innerHTML = '';
        initialOrder.forEach(item => {
            item.style.display = 'block';
            imageGallery.appendChild(item);
        });
    }

    // 顯示節日限定商品
    function showFestivalLimitedItems() {
        filterItemsByAttribute('data-festival-limited', 'true');
    }

    // 顯示最熱銷商品
    function showBestSellerItems() {
        filterItemsByAttribute('data-best-seller', 'true');
    }

    // 顯示特定類型商品 (通用篩選函數)
    function filterItemsByAttribute(attribute, value) {
        items.forEach(item => {
            item.style.display = item.getAttribute(attribute) === value ? 'block' : 'none';
        });
    }

    // 日期排序：新至舊
    function sortByNewest() {
        items.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        });
        updateGallery();
    }

    // 日期排序：舊至新
    function sortByOldest() {
        items.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateA - dateB;
        });
        updateGallery();
    }

    // 價格排序：高至低
    function sortByPriceHigh() {
        items.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.price').innerText.replace('NT$', ''));
            const priceB = parseInt(b.querySelector('.price').innerText.replace('NT$', ''));
            return priceB - priceA;
        });
        updateGallery();
    }

    // 價格排序：低至高
    function sortByPriceLow() {
        items.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.price').innerText.replace('NT$', ''));
            const priceB = parseInt(b.querySelector('.price').innerText.replace('NT$', ''));
            return priceA - priceB;
        });
        updateGallery();
    }

    // 顯示經典款商品
    function showClassicFlavors() {
        filterItemsByAttribute('flavors-classic', 'true');
    }

    // 顯示水果款商品
    function showFruitFlavors() {
        filterItemsByAttribute('flavors-fruit', 'true');
    }

    // 顯示點心款商品
    function showDessertFlavors() {
        filterItemsByAttribute('flavors-dessert', 'true');
    }

    // 顯示糖果款商品
    function showCandyFlavors() {
        filterItemsByAttribute('flavors-candy', 'true');
    }

    // 顯示飲料款商品
    function showDrinksFlavors() {
        filterItemsByAttribute('flavors-drinks', 'true');
    }

    // 顯示巧克力款商品
    function showChocolateFlavors() {
        filterItemsByAttribute('flavors-chocolate', 'true');
    }

    // 顯示特別款商品
    function showSpecialFlavors() {
        filterItemsByAttribute('flavors-special', 'true');
    }

    // 更新畫廊顯示
    function updateGallery() {
        if (imageGallery) {
            imageGallery.innerHTML = '';
            items.forEach(item => imageGallery.appendChild(item));
        }
    }
});
//點擊跳轉單一商品頁
function goToProductPage(productPage){
    window.location.href = productPage; 
}
