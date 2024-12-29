// 在頁面加載時隱藏所有星星評分區域及「味道」標題
window.addEventListener('DOMContentLoaded', () => {
    const starRatings = document.querySelectorAll('.star'); // 找到所有的星星區域
    const tasteTitles = document.querySelectorAll('h2'); // 找到所有 <h2> 標題
    const priceTitles = document.querySelectorAll('h2'); // 找到所有 <h2> 標題
    const lookTitles = document.querySelectorAll('h2'); // 找到所有 <h2> 標題
    const adviceTitles = document.querySelectorAll('h2'); // 找到所有 <h2> 標題
    starRatings.forEach(rating => {
        rating.style.display = 'none'; // 隱藏所有星星區域
    });

    tasteTitles.forEach(title => {
        // 隱藏 "味道" 標題，通過檢查標題內容是否為 "味道"
        if (title.textContent.includes('味道')) {
            title.style.display = 'none'; // 隱藏味道的標題
        }
    });

    lookTitles.forEach(title => {
        // 隱藏 "外型" 標題，通過檢查標題內容是否為 "外型"
        if (title.textContent.includes('外型')) {
            title.style.display = 'none'; // 隱藏外型的標題
        }
    });

    priceTitles.forEach(title => {
        // 隱藏 "價格" 標題，通過檢查標題內容是否為 "價格"
        if (title.textContent.includes('價格')) {
            title.style.display = 'none'; // 隱藏價格的標題
        }
    });

    adviceTitles.forEach(title => {
        // 隱藏 "評論" 標題，通過檢查標題內容是否為 "評論"
        if (title.textContent.includes('評論')) {
            title.style.display = 'none'; // 隱藏評論的標題
        }
    });
});


// First modal - 獲取第一個彈跳視窗和相關按鈕
const change = document.getElementById('change');
const openChange = document.getElementById('open-change');
const closeChange = document.getElementById('close-change');

// Open the first modal
openChange.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    change.style.display = 'block'; // Show the first modal
});

// 點擊 "會員編輯" 顯示彈跳視窗
openChange.addEventListener('click', function (event) {
    event.preventDefault(); // 防止默認的跳轉行為
    changeModal.style.display = 'block'; // 顯示視窗
});

// 點擊關閉按鈕時隱藏彈跳視窗
closeChange.addEventListener('click', function () {
    changeModal.style.display = 'none';
});

// 點擊視窗外部時隱藏視窗
window.addEventListener('click', function (event) {
    if (event.target === changeModal) {
        changeModal.style.display = 'none';
    }
});

// Close the first modal
closeChange.addEventListener('click', function() {
    change.style.display = 'none'; // Hide the first modal
});

// Close the first modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === change) {
        change.style.display = 'none'; // Hide the first modal if clicked outside
    }
});

// Second modal - #modal
const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

// Open the second modal
openModal.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    modal.style.display = 'block'; // Show the second modal
});

// Close the second modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the second modal
});

// Close the second modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide the second modal if clicked outside
    }
});


// 選擇按鈕
const returnButton = document.querySelector('.return');
const finishButton = document.querySelector('.finish');

// 選擇所有步驟的圖標和文字
const steps = document.querySelectorAll('.step i');
const stepTexts = document.querySelectorAll('.step p');

// 選擇按鈕容器
const buttonContainer = document.querySelector('.finish-container');

// 點擊 "退/換貨" 按鈕事件
returnButton.addEventListener('click', () => {
    // 改變前四個步驟的顏色
    for (let i = 0; i < 4; i++) {
        steps[i].style.color = '#835d41';
        stepTexts[i].style.color = '#835d41';
    }

    // 新增一行提示文字
    const messageContainer = document.createElement('div');
    messageContainer.textContent = '退換貨已成功申請，請留意客服文件';
    messageContainer.style.color = '#835d41'; // 設置文字顏色
    messageContainer.style.marginBottom = '20px'; // 加點上下間距
    messageContainer.style.fontWeight = 'bold'; // 讓文字更醒目

    // 將提示文字加入到按鈕所在容器的上方
    returnButton.parentElement.insertBefore(messageContainer, returnButton.parentElement.firstChild);

});



// 點擊 "完成訂單" 按鈕事件
finishButton.addEventListener('click', () => {
    // 改變所有步驟的顏色，但排除最後的 "評價" 步驟
    for (let i = 0; i < steps.length; i++) {
        // 如果是 "評價" 步驟（假設它是最後一個）
        if (stepTexts[i].textContent.trim() === "評價") {
            steps[i].style.color = '#ad6700'; // 保持 "評價" 的原始顏色
            stepTexts[i].style.color = '#ad6700';
        } else {
            steps[i].style.color = '#835d41'; // 其他步驟設置為指定顏色
            stepTexts[i].style.color = '#835d41';
        }
    }

    // 隱藏 "退/換貨" 和 "完成訂單" 按鈕，並顯示 "評論" 按鈕
    buttonContainer.innerHTML = ''; // 清空按鈕容器

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment');
    commentButton.textContent = '評論';
    
    // 在按鈕容器中插入 "評論" 按鈕
    buttonContainer.appendChild(commentButton);

    // 點擊評論按鈕時的事件處理
    commentButton.addEventListener('click', () => {

        // 改變按鈕文字為 '已評論'
        commentButton.textContent = '已評論';
        
        // 禁用按鈕，使其無法再點擊
        commentButton.disabled = true;

        // 改變全部步驟的顏色
        for (let i = 0; i < 6; i++) {
            steps[i].style.color = '#835d41';
            stepTexts[i].style.color = '#835d41';
        }

        // 顯示星星評分區域
        const starRatings = document.querySelectorAll('.star');
        starRatings.forEach(rating => {
            rating.style.display = 'block'; // 顯示所有星星區域
        });

        // 顯示「味道」標題
        const tasteTitles = document.querySelectorAll('h2');
        tasteTitles.forEach(title => {
            if (title.textContent.includes('味道')) {
                title.style.display = 'flex'; // 顯示「味道」標題
            }
        });

        // 顯示「外型」標題
        const lookTitles = document.querySelectorAll('h2');
        lookTitles.forEach(title => {
            if (title.textContent.includes('外型')) {
                title.style.display = 'flex'; // 顯示「外型」標題
            }
        });

        // 顯示「價格」標題
        const priceTitles = document.querySelectorAll('h2');
        priceTitles.forEach(title => {
            if (title.textContent.includes('價格')) {
                title.style.display = 'flex'; // 顯示「價格」標題
            }
        });

        // 顯示「評論」標題
        const adviceTitles = document.querySelectorAll('h2');
        priceTitles.forEach(title => {
            if (title.textContent.includes('評論')) {
                title.style.display = 'flex'; // 顯示「評論」標題
            }
        });
        


        // 隱藏產品名稱和備註
        const productNames = document.querySelectorAll('.product-name');
        const productRemarks = document.querySelectorAll('.product-remark');

        productNames.forEach(productName => {
            productName.style.display = 'none'; // 隱藏所有的 product-name
        });

        productRemarks.forEach(productRemark => {
            productRemark.style.display = 'none'; // 隱藏所有的 product-remark
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // 找到所有評分區域（例如 "外型", "價格", "味道"）
    const starRatings = document.querySelectorAll(".star");

    // 對每個評分區域設定事件
    starRatings.forEach((starRating) => {
        // 找到該區域內的所有星星
        const starIcons = starRating.querySelectorAll(".star-icon");

        // 給每個星星添加點擊事件
        starIcons.forEach((starIcon) => {
            starIcon.addEventListener("click", function () {
                // 取得點擊星星的索引值
                const clickedIndex = parseInt(this.getAttribute("data-index"), 10);

                // 更新當前區域的所有星星狀態
                starIcons.forEach((icon, index) => {
                    // 點擊的索引及之前的星星設置為實心
                    if (index + 1 <= clickedIndex) {
                        icon.setAttribute("icon", "material-symbols:star");
                    } else {
                        // 點擊索引之後的設置為空心
                        icon.setAttribute("icon", "material-symbols:star-outline");
                    }
                });

                // 在這裡可以將 clickedIndex 發送到後端更新資料
                console.log("Selected Rating in current row: " + clickedIndex);
            });
        });
    });
});

// 選取按鈕和區塊元素
const useButton = document.getElementById('useButton');
const purchaseFile = document.getElementById('purchaseFile');
const purchaseFile2 = document.getElementById('purchaseFile2');
const tracking = document.getElementById('tracking');
const coupons = document.getElementById('coupons');
const coupons2 = document.getElementById('coupons2');


// 添加點擊事件
useButton.addEventListener('click', () => {
    // 改變按鈕文字為 "已使用"
    useButton.textContent = "已使用";
    // 禁用按鈕
    useButton.disabled = true;
    // 改變按鈕樣式為灰色背景，白色文字
    useButton.style.backgroundColor = "#ccc";
    useButton.style.color = "#fff";
    useButton.style.borderColor = "#aaa";
    // 改變按鈕滑鼠指標
    useButton.style.cursor = "not-allowed";

});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("edit-member-form");
    const saveButton = document.getElementById("saveButton");
    const resultDiv = document.getElementById("result");

    // Membership 1 資料顯示區塊
    const memberName = document.getElementById("memberName");
    const memberEmail = document.getElementById("memberEmail");
    const memberPhone = document.getElementById("memberPhone");
    const memberBirthday = document.getElementById("memberBirthday");

    saveButton.addEventListener("click", function () {
        // 獲取表單中的輸入值
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const birthday = document.getElementById("birthday").value.trim();

        // 表單簡單驗證
        if (!name || !email || !phone || !birthday) {
            resultDiv.innerHTML = `<p style="color: red;">請完整填寫所有欄位！</p>`;
            return;
        }

        // 更新結果區
        resultDiv.innerHTML = `
            <p>修改成功！以下是新的資料：</p>
            <ul>
                <li><strong>姓名:</strong> ${name}</li>
                <li><strong>郵電:</strong> ${email}</li>
                <li><strong>電話:</strong> ${phone}</li>
                <li><strong>生日:</strong> ${birthday}</li>
            </ul>
        `;

        // 同步更新 Membership 資料區塊
        memberName.innerHTML = `<strong>姓名:</strong> ${name}`;
        memberEmail.innerHTML = `<strong>郵電:</strong> ${email}`;
        memberPhone.innerHTML = `<strong>電話:</strong> ${phone}`;
        memberBirthday.innerHTML = `<strong>生日:</strong> ${birthday}`;

        // 顯示保存成功提示
        setTimeout(() => {
            resultDiv.innerHTML = `<p style="color: green;">資料已成功儲存！</p>`;
        }, 3000);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const openCardLink = document.getElementById("open-card");
    const cardModal = document.getElementById("card");
    const closeButton = document.querySelector(".close-button");
    const confirmButton = document.getElementById("confirmButton");
    const resultDiv = document.getElementById("result");

    // 点击“新增信用卡”链接时显示弹跳窗口
    openCardLink.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止默认链接行为
        cardModal.style.display = "block";
    });

    // 点击关闭按钮时隐藏弹跳窗口
    closeButton.addEventListener("click", function () {
        cardModal.style.display = "none";
    });

    // 点击弹跳窗口外部时隐藏弹跳窗口
    window.addEventListener("click", function (event) {
        if (event.target === cardModal) {
            cardModal.style.display = "none";
        }
    });

    // 点击确认按钮后的操作
    confirmButton.addEventListener("click", function () {
        const cardNumber = document.getElementById("card-number").value;
        const cardholderName = document.getElementById("cardholder-name").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const securityCode = document.getElementById("security-code").value;

        // 检查是否所有字段都已填写
        if (!cardNumber || !cardholderName || !expiryDate || !securityCode) {
            resultDiv.innerHTML = `<p style="color: red;">請填寫完整信息！</p>`;
            return;
        }

        // 显示输入信息（模拟保存过程）
        resultDiv.innerHTML = `
            <p>信用卡已成功新增！以下是信用卡信息：</p>
            <ul>
                <li><strong>卡號:</strong> ${cardNumber}</li>
                <li><strong>持卡人姓名:</strong> ${cardholderName}</li>
                <li><strong>有效期:</strong> ${expiryDate}</li>
                <li><strong>安全碼:</strong> ${securityCode}</li>
            </ul>
        `;

        // 清空输入框
        document.getElementById("card-number").value = "";
        document.getElementById("cardholder-name").value = "";
        document.getElementById("expiry-date").value = "";
        document.getElementById("security-code").value = "";

        // 延迟 2 秒后自动关闭弹跳窗口
        setTimeout(() => {
            cardModal.style.display = "none";
            resultDiv.innerHTML = ""; // 清空结果内容
        }, 2000);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // 获取打开和关闭按钮
    const openCard = document.getElementById("open-card");
    const openModal = document.getElementById("open-modal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-button");

    // 显示弹跳窗口函数
    const showModal = (modalId) => {
        document.getElementById(modalId).style.display = "block";
    };

    // 隐藏弹跳窗口函数
    const hideModal = (modal) => {
        modal.style.display = "none";
    };

    // 打开对应弹跳窗口
    openCard.addEventListener("click", (e) => {
        e.preventDefault();
        showModal("card");
    });

    openModal.addEventListener("click", (e) => {
        e.preventDefault();
        showModal("modal");
    });

    // 为所有关闭按钮添加点击事件
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            hideModal(modal);
        });
    });

    // 点击窗口外部时关闭窗口
    window.addEventListener("click", (e) => {
        modals.forEach((modal) => {
            if (e.target === modal) {
                hideModal(modal);
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    // 找到所有 tab 按鈕和內容區域
    const tabButtons = document.querySelectorAll(".tab");
    const infoContainer = document.querySelector(".info");
    const creditContainer = document.querySelector(".credit");
    const couponsContainer = document.querySelector(".coupons");
    const purchase_historyContainer = document.querySelector(".purchase_history");
    const review_historyContainer = document.querySelector(".review_history");
    const follow_listContainer = document.querySelector(".follow_list");

    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // 清除所有按鈕的 "active" 類別
            tabButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            // 為當前點擊的按鈕添加 "active" 類別
            this.classList.add("active");

            // 根據選中的 tab 顯示對應的內容
            const tabName = this.getAttribute("data-tab");
            updateContent(tabName);
        });
    });

    // 更新內容區域
    function updateContent(tabName) {
        switch (tabName) {
            case "personal-info":
                infoContainer.style.display = "block"; // 顯示個人資訊
                creditContainer.style.display = "none"; // 隱藏購物金
                couponsContainer.style.display = "none"; // 隱藏coupons
                purchase_historyContainer.style.display = "none"; // 隱藏purchase_history
                review_historyContainer.style.display = "none"; // 隱藏review_history
                follow_listContainer.style.display = "none"; // 隱藏follow
                break;
            case "store-credit":
                infoContainer.style.display = "none"; // 隱藏個人資訊
                creditContainer.style.display = "block"; // 顯示購物金
                couponsContainer.style.display = "none"; // 隱藏coupons
                purchase_historyContainer.style.display = "none"; // 隱藏purchase_history
                review_historyContainer.style.display = "none"; // 隱藏review_history
                follow_listContainer.style.display = "none"; // 隱藏follow
                break;
            case "coupons":
                couponsContainer.style.display = "block"; // 顯示coupons
                creditContainer.style.display = "none"; // 隱藏購物金
                infoContainer.style.display = "none"; // 隱藏個人資訊
                purchase_historyContainer.style.display = "none"; // 隱藏purchase_history
                review_historyContainer.style.display = "none"; // 隱藏review_history
                follow_listContainer.style.display = "none"; // 隱藏follow
                break;
            case "purchase_history":
                purchase_historyContainer.style.display = "block"; // 顯示purchase_history
                creditContainer.style.display = "none"; // 隱藏購物金
                infoContainer.style.display = "none"; // 隱藏個人資訊
                couponsContainer.style.display = "none"; // 隱藏coupons
                review_historyContainer.style.display = "none"; // 隱藏review_history
                follow_listContainer.style.display = "none"; // 隱藏follow
                break;
            case "review_history":
                review_historyContainer.style.display = "block"; // 顯示review_history
                creditContainer.style.display = "none"; // 隱藏購物金
                infoContainer.style.display = "none"; // 隱藏個人資訊
                couponsContainer.style.display = "none"; // 隱藏coupons
                purchase_historyContainer.style.display = "none"; // 隱藏purchase_history
                follow_listContainer.style.display = "none"; // 隱藏follow
                break;
            case "follow_list":
                follow_listContainer.style.display = "block"; // 顯示follow
                creditContainer.style.display = "none"; // 隱藏購物金
                infoContainer.style.display = "none"; // 隱藏個人資訊
                couponsContainer.style.display = "none"; // 隱藏coupons
                review_historyContainer.style.display = "none"; // 隱藏review_history
                purchase_historyContainer.style.display = "none"; // 隱藏purchase_history
                break;
            default:
                infoContainer.style.display = "block"; // 預設顯示個人資訊
                creditContainer.style.display = "none"; // 隱藏購物金
                couponsContainer.style.display = "none"; // 隱藏coupons
                review_historyContainer.style.display = "none"; // 隱藏review_history
                purchase_historyContainer.style.display = "none"; // 隱藏purchase_history
                follow_listContainer.style.display = "none"; // 隱藏follow
        }
    }

    // 頁面加載時顯示預設的內容
    updateContent("personal-info");
});





  

