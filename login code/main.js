
    function login() {
      // Get the username and password from the input fields
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Check if the username and password are correct
      if (username.length >= 4) {
        // If they are, redirect to the dashboard page
        window.location.href = "dashboard.html";
      } else {
        // If they aren't, display an error message
        alert("Incorrect username or password!");
      }
    }
  