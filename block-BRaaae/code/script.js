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

let elm = React.createElement;

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMoviesUI(allMovies, rootElm);
}

function createMoviesUI(data, root) {
  let movieRoot = data.map((movie, i) => {
    let li = elm(
      "li",
      {},
      elm(
        "label",
        {
          id: i,
        },
        movie.name
      ),
      (button = elm(
        "button",
        {
          id: i,
          onClick: handleChange,
        },
        movie.watched ? "Watched " : "To watch"
      ))
    );

    return li;
  });
  ReactDOM.render(movieRoot, rootElm);
}

createMoviesUI(allMovies, rootElm);
