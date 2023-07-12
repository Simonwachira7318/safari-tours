// document.getElementById("btn btn--rounded").addEventListener("click", function() {
//     window.location.href = "login.html";
//   });
document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("adminUsername").value;
    var password = document.getElementById("adminPassword").value;
    // Perform admin login validation here
    if (username === "admin" && password === "admin123") {
        alert("Admin login successful!");
        // Redirect to admin dashboard or desired page
        // window.location.href = "admin_dashboard.html";
    } else {
        alert("Invalid admin credentials");
    }
    });

    document.getElementById("publicLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("publicUsername").value;
    var password = document.getElementById("publicPassword").value;
    // Perform public login validation here
    if (username === "user" && password === "user123") {
        alert("Public login successful!");
        // Redirect to public dashboard or desired page
        // window.location.href = "public_dashboard.html";
    } else {
        alert("Invalid public credentials");
    }
    });