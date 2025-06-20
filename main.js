// Cấu hình particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Toggle day/night mode
const toggleBtn = document.querySelector('.toggle-mode');
const icon = toggleBtn.querySelector('i');

function setMode(isLight) {
  if (isLight) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Default: dark mode (icon mặt trời, nền xanh)
setMode(true);

toggleBtn.addEventListener('click', () => {
  const isLight = !document.body.classList.contains('dark-mode');
  setMode(isLight);
});

// Sidebar toggle logic
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

// Tạo backdrop để click ra ngoài sẽ đóng sidebar
let backdrop = document.createElement('div');
backdrop.className = 'sidebar-backdrop';
document.body.appendChild(backdrop);

function openSidebar() {
  sidebar.classList.add('open');
  backdrop.classList.add('active');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  backdrop.classList.remove('active');
}

sidebarToggle.addEventListener('click', openSidebar);
backdrop.addEventListener('click', closeSidebar);

// Đóng sidebar khi click vào link và nhảy đến section ngay lập tức
sidebar.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    closeSidebar();
    // KHÔNG preventDefault, KHÔNG scrollIntoView, KHÔNG đổi hash
    // Trình duyệt sẽ tự cuộn đến section qua anchor
  });
});


