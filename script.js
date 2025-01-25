console.log("Script.js loaded successfully!");

document.addEventListener('DOMContentLoaded', () => {
    // Redirect to data-atlit.html after successful login/registration
    const loginForm = document.querySelector('#loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate login or registration success
            alert('Masuk atau Daftar berhasil!');

            // Redirect to Data Atlet page
            window.location.href = '/Utama/data.html';
        });
    }

    // Check login status on page load
    checkLoginStatus();

    // Add event listener for logout button
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
});

// Fungsi untuk mengecek status login dan memperbarui navigasi
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Cek status login
    const username = localStorage.getItem('username'); // Ambil username dari localStorage
    const loginNav = document.getElementById('login-nav'); // Elemen login
    const logoutNav = document.getElementById('logout-nav'); // Elemen logout

    // Periksa apakah halaman saat ini adalah persen.html
    const currentPage = window.location.pathname.split('/').pop(); // Ambil nama file
    if (currentPage === 'persen.html') {
        // Jika halaman adalah persen.html, biarkan tanpa login
        loginNav.style.display = 'none'; // Sembunyikan menu Masuk/Daftar
        logoutNav.style.display = 'none'; // Sembunyikan menu Keluar
        return;
    }

    if (isLoggedIn && username) {
        // Jika sudah login
        loginNav.style.display = 'none'; // Sembunyikan menu Masuk/Daftar
        logoutNav.style.display = 'inline-block'; // Tampilkan menu Keluar
    } else {
        // Jika belum login
        loginNav.style.display = 'inline-block'; // Tampilkan menu Masuk/Daftar
        logoutNav.style.display = 'none'; // Sembunyikan menu Keluar
    }
}

// Fungsi logout
function logout() {
    // Hapus status login dari localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    alert('Anda telah keluar.');
    // Perbarui navigasi
    checkLoginStatus();
}

// Ensure CSS is loaded correctly
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);
