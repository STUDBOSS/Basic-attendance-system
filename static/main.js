// main.js

// Toggle password visibility
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// Flash message timeout (auto-hide after 3s)
window.onload = () => {
    const msg = document.getElementById("flash-message");
    if (msg) {
        setTimeout(() => msg.style.display = "none", 3000);
    }
};
