import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <h1>Hello React!</h1>
      <h3>Are you sure?</h3>

      <button className="bg-green-600 p-5 mt-10 ml-20 rounded-full hover:bg-red-600">
        Yes, I am sure
      </button>
    </>
  );
}

export default App;
