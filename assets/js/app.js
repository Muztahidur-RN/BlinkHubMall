function login() {
  const role = document.getElementById("role").value;

  if (role === "user") {
    window.location.href = "dashboards/user.html";
  } else if (role === "admin") {
    window.location.href = "dashboards/admin.html";
  }
}
