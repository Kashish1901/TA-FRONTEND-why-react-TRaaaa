import Fruit from "./Fruits";

function handleClick() {
  return alert("Hello React Event");
}

function handleAlert() {
  return alert(`To learn React use https://reactjs.org,
  OR
React and ReactDOM works together,
OR
  Babel helps in writing JSX`);
}

function handleName(event) {
  alert(`Hello ${event.target.value}`);
}
function App() {
  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleAlert}>How can I help you?</button>
      <button onClick={handleName} value="Arya">
        Arya
      </button>
      <button onClick={handleName} value="John">
        John
      </button>
      <button onClick={handleName} value="Bran">
        Bran
      </button>
      <Fruit />
    </>
  );
}

export default App;
