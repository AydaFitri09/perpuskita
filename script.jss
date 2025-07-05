// Login sederhana (contoh)
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah reload halaman

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Ganti ini dengan username & password yang kamu mau
  if (username === "admin" && password === "123") {
    // Simpan sesi login di localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Pindah ke dashboard
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginError").textContent = "Username atau password salah!";
  }
});