const password = document.getElementById("password");
const result = document.getElementById("result");

password.addEventListener("input", () => {
    let pass = password.value;

    if (pass.length < 6) {
        result.textContent = "Weak Password";
        result.className = "weak";
    }
    else if (
        pass.length >= 8 &&
        /[A-Z]/.test(pass) &&
        /[a-z]/.test(pass) &&
        /[0-9]/.test(pass)
    ) {
        result.textContent = "Strong Password";
        result.className = "strong";
    }
    else {
        result.textContent = "Medium Password";
        result.className = "medium";
    }
});