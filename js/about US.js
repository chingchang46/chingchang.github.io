window.addEventListener('load', function () {
    const options = {
        root: null, // null 表示相對於視窗
        rootMargin: '0px',
        threshold: 0.1 // 元素 10% 可見時觸發
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 只觸發一次
            }
        });
    }, options);

    // 選取需要動畫效果的元素
    const fadeInElements = document.querySelectorAll('.fade-in-down, .fade-in-up, .slide-left1, .slide-right1, .slide-left2, .slide-right2');
    fadeInElements.forEach(element => observer.observe(element));})