let input = document.querySelector('input[type="text"]');
let rootElm = document.querySelector(".movies-list");

let allMovies = [
  {
    name: "Forest Gump",
    watched: true,
  },
  {
    name: "Inception",
    watched: false,
  },
];
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: true,
    });
    event.target.value = " ";
    createMoviesUI();
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}
function createMoviesUI() {
  rootElm.innerHTML = " ";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("styled-checkbox");
    input.id = i;
    input.checked = movie.watched;
    input.value = movie.watched;
    input.addEventListener("change", handleChange);

    let label = document.createElement("label");
    label.for = i;
    label.innerText = movie.name;

    li.append(label, input);

    rootElm.append(li);
  });
}

createMoviesUI();
