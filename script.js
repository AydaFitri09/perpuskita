document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        if (username === "admin" && password === "12345") {
          localStorage.setItem("isLoggedIn", "true");
          location.replace("dashboard.html"); // Gunakan replace agar tidak kembali
        } else {
          alert("Username atau password salah");
        }
      });
    }
  
    const currentPath = window.location.pathname;
  
    const isLoginPage =
      currentPath.endsWith("index.html") ||
      currentPath === "/" ||
      currentPath === "/perpuskita/" || 
      currentPath.endsWith("/index.html");
  
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
    // Jika belum login dan bukan di halaman login, redirect
    if (!isLoggedIn && !isLoginPage) {
      location.replace("index.html");
    }
  });