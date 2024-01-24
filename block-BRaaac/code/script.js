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

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    element[key] = attr[key];
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }

    if (typeof child === "String") {
      let node = document.createTextNode(child);
      element.append(child);
    }
  });
  return element;
}

function createMoviesUI(data, root) {
  rootElm.innerHTML = " ";
  data.forEach((movie, i) => {
    let li = elm(
      "li",
      {},
      elm("label", {
        "data-id": "i",
        innerText: " movie.name",
      }),
      elm("button", {
        innerText: `movie.watched ? "Watched " : "To watch"`,
        "data-id": ` i`,
      })
    );

    rootElm.append(li);
  });
}

createMoviesUI(allMovies, rootElm);
