import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import UnicornList from "./components/UnicornList/UnicornList";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <UnicornList />
      {/* <PageFooter /> */}
    </div>
  );
}

export default App;
