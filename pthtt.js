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

    // Ẩn/hiện dropdown khi click avatar
    const avatarContainer = document.querySelector('.user-avatar-container');
    avatarContainer.onclick = () => {
        const dropdown = document.getElementById("user-dropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    };
}

// Giả sử gọi hàm này khi user đã đăng nhập
onLoginSuccess("Nguyễn Văn A", "/images/avatar1.png");

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

