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
      watched: false,
    });
    event.target.value = " ";
    createMoviesUI(allMovies, rootElm);
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMoviesUI(allMovies, rootElm);
}
function createMoviesUI(data, root) {
  rootElm.innerHTML = " ";
  data.forEach((movie, i) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = movie.watched ? "Watched " : "To watch";
    button.id = i;
    button.addEventListener("click", handleChange);
    let label = document.createElement("label");
    label.for = i;
    label.innerText = movie.name;

    li.append(label, button);

    rootElm.append(li);
  });
}

createMoviesUI(allMovies, rootElm);
