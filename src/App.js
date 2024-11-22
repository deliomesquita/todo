import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero completed={0} total={0} />
      <Form />
      <List todos={[]} />
    </div>
  );
}

export default App;
