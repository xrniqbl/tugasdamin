// script.js
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
});

// Fungsi untuk mengecek status login dan memperbarui navigasi
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Cek status login
    const username = localStorage.getItem('username'); // Ambil username dari localStorage
    const loginNav = document.getElementById('login-nav'); // Elemen login
    const logoutNav = document.getElementById('logout-nav'); // Elemen logout

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

// Event listener saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Cek status login saat halaman dimuat
    checkLoginStatus();

    // Tambahkan event listener untuk tombol Keluar
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
});


// Ensure CSS is loaded correctly
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);
