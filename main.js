// Bootsrap popover effect
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Selectors
const LeftMenuItems = document.querySelectorAll(".menu_item");
const ActiveListItem = document.querySelector(".active");

// Functions
function ChangeActiveListItem(item) {
  ActiveListItem.classList.remove("active");
  item.classList.add("active");
};

// Listeners and Executors
LeftMenuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    ChangeActiveListItem(item);
  });
});
