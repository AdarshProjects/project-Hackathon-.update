function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are filled
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return false; // Validation failed
    }

    // Check if email format is valid
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Validation failed
    }

    // Check if password meets basic length requirement
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false; // Validation failed
    }

    return true; // Validation passed
}

function linking1stpage() {
    // If validation passes, redirect to another page
    if (validateForm()) {
        window.location.href = 'hackathon.html'; // Replace with actual page URL
    }
    // If validation fails, nothing happens and alerts will show
}