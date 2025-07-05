document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    // Kalau sedang di halaman login dan form ada, tunggu submit
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Login benar
        if (username === "admin" && password === "12345") {
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "dashboard.html";
        } else {
          alert("Username atau password salah");
        }
      });
    }
  
    // Cek apakah sedang di halaman login (GitHub Pages versi)
    const pathname = window.location.pathname;
    const isLoginPage =
      pathname.endsWith("index.html") ||
      pathname === "/" ||
      pathname === "/perpuskita/" ||  // penting untuk GitHub Pages
      pathname.endsWith("/index.html");
  
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
    // Kalau belum login dan bukan di halaman login, arahkan kembali ke login
    if (!isLoggedIn && !isLoginPage) {
      window.location.href = "index.html";
    }
  });