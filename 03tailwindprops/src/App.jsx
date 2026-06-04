import Card from "./components/Card";

function App() {
  let myObj = {
    username: "akher",
    age: 25,
  };

  let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card
        username="chaiaurcode"
        someObj={myObj}
        arr={newArr}
        btnText="Visit Me"
      />
      <Card username="akher" btnText="Click Me" />
      <Card />
    </>
  );
}

export default App;
