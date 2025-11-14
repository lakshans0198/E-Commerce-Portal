function validateRegister() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if (name == "" || email == "" || pass == "") {
        document.getElementById("regMsg").innerHTML = "Please fill all fields!";
        document.getElementById("regMsg").style.color = "red";
        return false;
    }

    document.getElementById("regMsg").innerHTML = "Registered successfully!";
    document.getElementById("regMsg").style.color = "green";
    return false;
}

function validateLogin() {
    let email = document.getElementById("logEmail").value;
    let pass = document.getElementById("logPass").value;

    if (email == "" || pass == "") {
        document.getElementById("logMsg").innerHTML = "Enter email and password!";
        document.getElementById("logMsg").style.color = "red";
        return false;
    }

    document.getElementById("logMsg").innerHTML = "Login successful!";
    document.getElementById("logMsg").style.color = "green";
    return false;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
