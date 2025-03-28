function showRegister() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
}

function showLogin() {
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'hethong.html'; // Redirect to the dashboard page
    } else {
        showNotification('Invalid username or password.');
    }
}

// Initialize a sample account
function initializeSampleAccount() {
    const sampleUsers = [
        {
            username: "admin",
            email: "admin@example.com",
            password: "1234"
        }
    ];

    // Check if users already exist in localStorage
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(sampleUsers));
    }
}

// Call the function to initialize the sample account
initializeSampleAccount();
if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    alert('Login successful!');
    window.location.href = 'hethong.html';
}

function handleRegister() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Username already exists.');
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    showLogin();
}
// Display the logged-in user's information
function displayUserProfile() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('user-profile').style.display = 'inline-block';
        document.getElementById('username-display').textContent = `Welcome, ${loggedInUser.username}`;
    }
}

// Toggle the dropdown menu
document.getElementById('user-profile').addEventListener('click', () => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

// Handle logout
function handleLogout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Redirect to the login page
}

// Call the function to display the user profile on page load
document.addEventListener('DOMContentLoaded', displayUserProfile);