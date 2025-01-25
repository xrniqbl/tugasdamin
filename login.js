// Elemen utama untuk formulir dan navigasi
const formContainer = document.getElementById('form-container');

// Fungsi untuk memuat formulir login
function loadLoginForm() {
    formContainer.innerHTML = `
        <h1>Login</h1>
        <form id="loginForm">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            
            <button type="submit">Login</button>
            <p class="link">
                <a href="#" id="forgotPassword">Forgot Password?</a> | 
                <a href="#" id="registerLink">Register</a>
            </p>
        </form>
    `;

    // Event listener untuk formulir login
    document.getElementById('forgotPassword').addEventListener('click', function (e) {
        e.preventDefault();
        alert('Redirecting to the password recovery page...');
    });

    document.getElementById('registerLink').addEventListener('click', function (e) {
        e.preventDefault();
        loadRegisterForm();
    });

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            alert(`Welcome, ${username}!`);
            window.location.href = './index.html';
        } else {
            alert('Please enter both username and password.');
        }
    });
}

// Fungsi untuk memuat formulir registrasi
function loadRegisterForm() {
    formContainer.innerHTML = `
        <h1>Register</h1>
        <form id="registerForm">
            <label for="newUsername">Username</label>
            <input type="text" id="newUsername" name="newUsername" required>
            
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            
            <label for="newPassword">Password</label>
            <input type="password" id="newPassword" name="newPassword" required>
            
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            
            <button type="submit">Register</button>
            <p class="link">
                <a href="#" id="loginLink">Already have an account? Login</a>
            </p>
        </form>
    `;

    // Event listener untuk formulir registrasi
    document.getElementById('loginLink').addEventListener('click', function (e) {
        e.preventDefault();
        loadLoginForm();
    });

    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const email = document.getElementById('email').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
        } else if (newUsername && email && newPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', newUsername);
            alert(`Registration successful! Welcome, ${newUsername}!`);
            window.location.href = './index.html';
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Muat formulir login saat halaman pertama kali dibuka
document.addEventListener('DOMContentLoaded', () => {
    loadLoginForm();
});
