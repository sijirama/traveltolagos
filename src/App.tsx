import About from "./components/About";
import TopSection from "./components/TopSection";
import { AppComponent } from "./StyledComponents/App.styled";


function App() {
  return (
    <AppComponent className="App">

        <TopSection />
        <About />

    </AppComponent>
  );
}

export default App;
