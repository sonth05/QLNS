// Giả sử sau khi xác thực đăng nhập thành công
function onLoginSuccess(username, avatarUrl) {
    // Ẩn nút đăng nhập
    document.getElementById("login-btn").style.display = "none";

    // Hiện phần avatar
    const userProfile = document.getElementById("user-profile");
    userProfile.style.display = "flex"; // hoặc "block" tùy layout

    // Gán tên người dùng và avatar
    document.getElementById("username-display").textContent = username;
    document.getElementById("user-avatar").src = avatarUrl || "/api/placeholder/40/40";

    // Chuyển hướng sang sample.html sau khi đăng nhập thành công
    window.location.href = "sample.html";
}

// Giả sử gọi hàm này khi user đã đăng nhập
onLoginSuccess("Nguyễn Văn A", "/images/avatar1.png");

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mock user data for login validation
    const users = [
        { username: 'admin', password: 'admin123', name: 'Quản trị viên', avatar: 'avatar.jpg' },
        { username: 'user', password: 'user123', name: 'Người dùng', avatar: 'avatar2.jpg' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Store user data in session storage
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('name', user.name);
        sessionStorage.setItem('avatar', user.avatar);

        // Redirect to sample.html
        window.location.href = 'sample.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});

const userAvatar = document.getElementById('user-avatar');
const userDropdown = document.getElementById('user-dropdown');

// Toggle dropdown visibility
userAvatar.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from propagating to document
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    userDropdown.style.display = 'none';
});

// Handle dropdown options
document.getElementById('profile-option').addEventListener('click', () => {
    alert('Navigating to Profile...');
    // Add navigation logic here
});

document.getElementById('settings-option').addEventListener('click', () => {
    alert('Navigating to Settings...');
    // Add navigation logic here
});

document.getElementById('logout-option').addEventListener('click', () => {
    alert('Logging out...');
    // Add logout logic here
});

const avatar = document.getElementById('user-avatar');
const dropdown = document.getElementById('user-dropdown');

document.addEventListener('click', function (e) {
    if (avatar.contains(e.target)) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

