// K-Means Clustering Logic
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const clustersInput = document.getElementById('clusters');
    const clusters = parseInt(clustersInput.value);

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];

        // Parse the CSV file using PapaParse
        Papa.parse(file, {
            complete: function(results) {
                const data = results.data;
                clusterData(data, clusters);
            }
        });
    }
});

function clusterData(data, numClusters) {
    // Implement K-Means clustering algorithm
    const clusters = new Array(numClusters).fill().map(() => []);
    // Example of clustering (random assignment, replace with proper K-means logic)
    data.forEach((point, index) => {
        const clusterIndex = index % numClusters;
        clusters[clusterIndex].push(point);
    });

    renderClusterChart(clusters);
}

function renderClusterChart(clusters) {
    const ctx = document.getElementById('scatterChart').getContext('2d');
    const colors = ['#FF5733', '#33FF57', '#3357FF'];

    const datasets = clusters.map((cluster, index) => ({
        label: `Cluster ${index + 1}`,
        data: cluster.map(point => ({ x: point[0], y: point[1] })),
        backgroundColor: colors[index],
        borderColor: colors[index],
        borderWidth: 1
    }));

    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: datasets
        },
        options: {
            scales: {
                x: { type: 'linear', position: 'bottom' },
                y: { type: 'linear' }
            }
        }
    });
}

// Win Percentage Logic
const athletes = [];

document.getElementById('addAthlete').addEventListener('click', function() {
    const athleteName = document.getElementById('athleteName').value;
    const winRate = parseFloat(document.getElementById('winRate').value);

    if (athleteName && !isNaN(winRate)) {
        athletes.push({ name: athleteName, winRate });

        renderWinChart();
    }
});

// Logout Function
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/Utama/index.html";
}

// **Perbaikan: Hilangkan cek login untuk persen.html**
const currentPage = window.location.pathname.split('/').pop(); // Ambil nama file
if (currentPage !== 'persen.html') {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Status login pengguna
    if (!isLoggedIn) {
        alert('Anda harus login untuk mengakses halaman ini.');
        window.location.href = '/Utama/login.html'; // Arahkan ke halaman login
    }
}

// Tambahkan event listener pada tombol logout
document.getElementById("logoutButton").addEventListener("click", logout);

function renderWinChart() {
    const ctx = document.getElementById('winChart').getContext('2d');
    const labels = athletes.map(athlete => athlete.name);
    const data = athletes.map(athlete => athlete.winRate);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Persentase Kemenangan',
                data: data,
                backgroundColor: '#2a93d5',
                borderColor: '#1d7a9e',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}
