document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const forms = document.querySelectorAll(".form");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tokenDisplay = document.getElementById("tokenDisplay");

  // Sayfa açıldığında token var mı diye bak
  checkTokenStatus();

  // Tab switching
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const formType = btn.dataset.form;

      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      forms.forEach((form) => {
        form.classList.remove("active");
        if (form.id === `${formType}Form`) {
          form.classList.add("active");
        }
      });
    });
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Token ve süresini localStorage’a kaydet
        localStorage.setItem("token", data.token);
        localStorage.setItem("expiration", data.expiration);
        displayToken(data.token, data.expiration);
      } else {
        alert(data.message || "Giriş başarısız!");
      }
    } catch (error) {
      alert("Bir hata oluştu!");
      console.error("Login error:", error);
    }
  });

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.text();

      if (response.ok) {
        alert("Kayıt başarılı! Giriş yapabilirsiniz.");
        document.querySelector('[data-form="login"]').click();
      } else {
        alert(data.message || data || "Kayıt başarısız!");
      }
    } catch (error) {
      alert("Bir hata oluştu!");
      console.error("Register error:", error);
    }
  });

  function displayToken(token, expiration) {
    const tokenElement = document.getElementById("token");
    const expirationElement = document.getElementById("expiration");

    tokenElement.textContent = token;
    expirationElement.textContent = new Date(expiration).toLocaleString();

    tokenDisplay.classList.remove("hidden");
  }

  function checkTokenStatus() {
    const token = localStorage.getItem("token");
    const expiration = localStorage.getItem("expiration");

    if (!token || !expiration) return;

    const now = new Date().getTime();
    const expireTime = new Date(expiration).getTime();

    if (now > expireTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      alert("Oturum süresi doldu. Lütfen tekrar giriş yapın.");
    } else {
      displayToken(token, expiration);
    }
  }
});
