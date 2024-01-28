let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function Fruit(props) {
  return fruits.map((fruit) => {
    <button value={props.value} key={props.id}>
      {props.value}
    </button>;
  });
}

export default Fruit;
