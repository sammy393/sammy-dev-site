const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const toggleBtn = document.querySelector(".toggle-password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const logoutBtn = document.getElementById("logoutBtn");
const successMeg = document.getElementById("successMessage");
const themeToggle = document.querySelector(".theme-toggle");
const STORAGE_KEY = "smart-login-demo";
const THEME_KEY = "preffered-theme";
//Theme handling
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
    localStorage.setItem(THEME_KEY, theme);
}
function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }

}
const themetoggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});
//Password visibility toggle
toggleBtn.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    toggleBtn.textContent = type === "password" ? "Show" : "Hide";
});
function getPasswordStrength(password) {
    if (password.length === 0) return { score: 0, text: "", class: "" };
    if (password.length < 6) return { score: 1, text: "Too short", class: "weak" };
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) return { score: 1, text: "Weak", class: "weak" };
    if (score <= 3) return { score: 2, text: "Medium", class: "medium" };
    if (score <= 4) return { score: 3, text: "Good", class: "good" };
    return { score: 4, text: "Strong", class: "strong" };
}
function validateform() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailValid = email.includes("@") && email.length >= 5 && email.includes(".");
    const passwordValid = password.length >= 6;
    //Email error
    document.getElementById("emailError").textContent = email && !emailValid ? "Please enter a valid email" : "";
    //Password error
    document.getElementById("passwordError").textContent = password && !passwordValid ? "Password must be at least 6 characters" : "";
    //Strength meter
    const strength = getPasswordStrength(password);
    strengthBar.className = "strength-bar" + (strength.class ? " strength-" + strength.class : "");
    strengthText.textContent = strength.text;
    const isValid = emailValid && passwordValid;
    submitBtn.disabled = !isValid;
}
function loadSavedData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            const { email, password } = JSON.parse(data);
            emailInput.value = email || "";
            passwordInput.value = password || "";
            validateform();
            logoutBtn.style.display = "block";
        }
    } catch (e) {
        console.warn("Failed to load saved data", e);
    }
}
function saveData() {
    try {
        const data = {
            email: emailInput.value.trim(),
            password: passwordInput.value,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        logoutBtn.style.display = "block";
        successMeg.style.display = "block";
        setTimeout(() => successMeg.style.display = "none", 3500);
    } catch (e) {
        console.warn("Failed to save login data", e);
    }
}
function clearData() {
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    logoutBtn.style.display = "none";
    validateform();
}
//Event listeners
emailInput.addEventListener("input", validateform);
passwordInput.addEventListener("input", validateform);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!submitBtn.disabled) {
        saveData();
    }
});
logoutBtn.addEventListener("click", clearData);
//Initialize
loadTheme();
loadSavedData();