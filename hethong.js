const API_URL = 'https://https://qlns-two.vercel.app/api';

async function register(username, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

async function login(username, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  localStorage.setItem('token', data.token);
  return data;
}





// src/services/auth.js
export async function register(username, password) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}


export async function login(username, password) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);

  // Lưu token vào localStorage nếu muốn dùng sau
  localStorage.setItem('token', data.token);

  return data;
}

document.getElementById('loginButton').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  try {
    await login(username, password);
    alert('Đăng nhập thành công!');
    // Chuyển hướng hoặc thực hiện hành động tiếp theo
  } catch (err) {
    alert('Đăng nhập thất bại: ' + err.message);
  }
});

document.getElementById('registerButton').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  try {
    await register(username, password);
    alert('Đăng ký thành công!');
    // Chuyển hướng hoặc thực hiện hành động tiếp theo
  } catch (err) {
    alert('Đăng ký thất bại: ' + err.message);
  }
});









userAvatar.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.transform = 'translateY(10px)';
    } else {
      dropdownMenu.style.display = 'block';
      // Sử dụng setTimeout để đảm bảo transition hoạt động
      setTimeout(() => {
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.transform = 'translateY(0)';
      }, 10);
    }
  });
  
  document.addEventListener('click', function(e) {
    if (!userAvatar.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.transform = 'translateY(10px)';
      // Delay việc ẩn để hiệu ứng transition hoạt động
      setTimeout(() => {
        dropdownMenu.style.display = 'none';
      }, 300);
    }
  });
  // Manejar login
  function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Datos de usuario para validación
    const users = [
      { username: 'admin', password: 'admin123', name: 'Quản trị viên', avatar: 'avatar.jpg' },
      { username: 'user', password: 'user123', name: 'Người dùng', avatar: 'avatar2.jpg' }
    ];
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // Guardar datos en sessionStorage
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('name', user.name);
      sessionStorage.setItem('avatar', user.avatar);
      
      // Redireccionar
      window.location.href = 'sample.html';
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  }
  
  // Funciones para botones del dropdown
  function viewProfile() {
    alert("Xem thông tin người dùng");
    // Implementación real: window.location.href = "/profile";
  }
  
  function logout() {
    // Limpiar sessionStorage
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('avatar');
    
    alert("Đăng xuất thành công");
    // Redireccionar: window.location.href = "/login";
  }
