// Mengambil elemen DOM
const activityForm = document.getElementById('activity-form');
const scheduleTableBody = document.querySelector('#schedule-table tbody');

document.getElementById('logoutButton').addEventListener('click', () => {
    window.location.href = '/Utama/index.html'; // Pindah ke halaman index.html
});

// Event listener untuk form
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

    const isLoggedIn = false; // Status login pengguna
  if (!isLoggedIn) {
    alert('Anda harus login untuk mengakses halaman ini.');
    window.location.href = '/Utama/login.html'; // Arahkan ke halaman login
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
