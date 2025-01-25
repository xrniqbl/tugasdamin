// Mengambil elemen DOM
const activityForm = document.getElementById('activity-form');
const scheduleTableBody = document.querySelector('#schedule-table tbody');

// Cek login sebelum membuka halaman atau menambahkan jadwal
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Cek status login dari localStorage
if (!isLoggedIn) {
    alert('Anda harus login untuk mengakses halaman ini.');
    window.location.href = './login.html'; // Arahkan ke halaman login jika belum login
}

// Event listener untuk logout
document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn'); // Menghapus status login
    window.location.href = './index.html'; // Pindah ke halaman index.html
});

// Event listener untuk form aktivitas
activityForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil data dari form
    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const athlete = document.getElementById('athlete').value;

    // Validasi input kosong
    if (!activity || !date || !time || !athlete) {
        alert('Semua bidang wajib diisi!');
        return;
    }

    // Tambahkan baris baru ke tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${activity}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${athlete}</td>
    `;
    scheduleTableBody.appendChild(newRow);

    // Reset form
    activityForm.reset();
});
