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


// Random Language greeting
//Selectors
const title = document.querySelector(".greeting h3");
const desc = document.querySelector(".greeting p");
const randomNum = Math.floor(Math.random() * (13 - 0) + 0);

fetch("./json/hello.json")
  .then(response => response.json())
  .then((data) => {
    title.innerHTML = `${data.hello[randomNum].word}, <span>Elon!</span>`;
    desc.innerHTML = `Now you know how to greet in ${data.hello[randomNum].lang}!`;
  });
