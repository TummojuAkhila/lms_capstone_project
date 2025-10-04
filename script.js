// Get form and fields
const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form reload

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simple email validation
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    // Simulated login (you can replace with backend API)
    if (email === "student@lms.com" && password === "123456") {
        alert("Login successful! Redirecting...");
        window.location.href = "dashboard.html"; // redirect to dashboard page
    } else {
        alert("Invalid email or password!");
    }
});
