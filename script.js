// Step 1: Select the form
const form = document.getElementById("loginForm");

// Step 2: Add event listener
form.addEventListener("submit", function(event) {

    // Step 3: Prevent page refresh
    event.preventDefault();

    // Step 4: Get input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Step 5: Validation logic
    if(email === "admin@gmail.com" && password === "1234") {
        document.getElementById("message").textContent = "Login Successful 🎉";
    } else {
        document.getElementById("message").textContent = "Invalid Credentials ❌";
    }

});
