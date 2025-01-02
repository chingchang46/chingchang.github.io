function toggleDropdown(menuItem) {
    // 關閉其他下拉選單
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown !== menuItem.querySelector('.dropdown')) {
        dropdown.style.display = 'none';
      }
    });

    // 切換當前下拉選單
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  }

  // 點擊頁面其他地方時關閉下拉選單
  document.addEventListener('click', (e) => {
    const isMenuClick = e.target.closest('.menu-item');
    if (!isMenuClick) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    }
  });