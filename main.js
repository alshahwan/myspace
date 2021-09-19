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
  const randomNum = Math.floor(Math.random() * (15 - 0));

  // JSON fetch
  fetch("./json/hello.json")
    .then(response => response.json())
    .then((data) => {
      title.innerHTML = `${data.hello[randomNum].word}, <span>Elon!</span>`;
      desc.innerHTML = `Now you know how to greet in ${data.hello[randomNum].lang}!`;
    });


// Weather API
  // Selectors
  const temp = document.querySelector(".weather h2");
  const high_min = document.querySelector(".weather h6");
  const img = document.querySelector(".weather img");

  // JSON fetch
  fetch("https://api.openweathermap.org/data/2.5/weather?q=dresden&appid=a5eb60179a70c40fd856da18298e2686&units=metric")
      .then(response => response.json())
      .then((data) => {
        temp.innerHTML = `${data.main.temp.toFixed(1)}°`
        high_min.innerHTML = `Max: ${data.main.temp_max.toFixed(1)}°, Min: ${data.main.temp_min.toFixed(1)}°, ${data.weather[0].description}`
        img.src = `./img/weather/${data.weather[0].icon}.png`
        img.alt = data.weather[0].description
      });
