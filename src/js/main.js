/**
 * Sidebar
 */

function sidebar() {
  const sidebarBtn = document.getElementById('sidebar-btn');

  const sidebar = document.getElementById('sidebar');

  sidebarBtn.addEventListener('click', () => {
    sidebarBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('#sidebar-btn') || e.target.closest('#sidebar')) return;

    sidebarBtn.classList.remove('active');
    sidebar.classList.remove('active');
  });
}

sidebar();
