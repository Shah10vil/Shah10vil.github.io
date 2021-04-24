function login() {
  console.log(
    "loc",
    location.pathname,
    location.href,
    window.location.pathname
  );
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let errorElement = document.getElementById("error");
  errorElement.innerHTML = "";
  if (username === "Sylvie" && password === "france") {
    window.location.pathname = "/home";
  } else {
    errorElement.innerHTML = "Wrong username or password.";
  }
}
