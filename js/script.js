function addUser() {
    const fullName = document.getElementById("name-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const password = document.getElementById("password-input").value.trim();
    const errorInput = document.getElementById("error-input");
    const emailUser = document.getElementById("email-user");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!fullName || !email || !password) {
        errorInput.classList.remove("d-none");
        return;
    } else {
        errorInput.classList.add("d-none");
    }

    if (users.some(user => user.email === email)) {
        emailUser.classList.remove("d-none");
        return;
    } else {
        emailUser.classList.add("d-none");
    }

    users.push({ name: fullName, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "index.html";
}

function loginUser() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const errorLogin = document.getElementById("error-login");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        errorLogin.classList.remove("d-none");
        return;
    } else {
        errorLogin.classList.add("d-none");
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "welcome.html";
    }
}

function displayWelcome() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        window.location.href = "index.html";
    } else {
        document.getElementById("welcome-msg").textContent = `Welcome, ${currentUser.name}!`;
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

if (window.location.pathname.includes("welcome.html")) {
    displayWelcome();
}
