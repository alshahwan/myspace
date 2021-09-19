// Bootsrap popover effect
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// Sidenav selection
document.querySelectorAll(".menu_item").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active")
  });
});
