function toggleDropdown(event) {
  var dropdownMenu = document.getElementById("dropdownMenu");

  if (!dropdownMenu) {
      console.error("Không tìm thấy phần tử với id 'dropdownMenu'");
      return;
  }

  // Ngăn sự kiện này lan ra ngoài, tránh đóng menu ngay lập tức
  event.stopPropagation();

  // Bật tắt lớp `hidden` để ẩn/hiện menu
  dropdownMenu.classList.toggle("hidden");
}

// Đóng menu khi nhấp ra ngoài
window.addEventListener("click", function(event) {
  var dropdownMenu = document.getElementById("dropdownMenu");
  
  // Nếu nhấp ra ngoài menu, ẩn menu đi
  if (dropdownMenu && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
  }
});


