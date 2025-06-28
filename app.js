function signUp() {
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all the fields.");
    return;
  }


  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Sign up successful!");

  location.href = "./login.html";

 
  document.getElementById("signupName").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("signupPassword").value = "";
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    alert(" Login Successful!");
  } else {
    alert(" Invalid email or password.");
  }

  
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}
