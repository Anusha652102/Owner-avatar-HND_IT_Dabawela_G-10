// Function to show the login form
function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("signup-form").classList.add("hidden");
}

// Function to show the signup form
function showSignup() {
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
}

// Function to simulate login
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Correct email and password
    const correctEmail = "123@gmail.com";
    const correctPassword = "123";

    if (email === correctEmail && password === correctPassword) {
        alert("Login successful! Redirecting to home page...");
        // Redirect to home.html using a relative path
        window.location.href = "home/home.html";

    } else {
        alert("Invalid email or password. Please try again.");
    }
}


// Function to simulate signup
function signup() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (name && email && password) {
        alert(`Welcome, ${name}! Signup successful.`);
    } else {
        alert("Please fill in all fields!");
    }
}
