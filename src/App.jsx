import Home from "./Components/pages/Home";
import { GithubProvider } from "./Context/Github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <div>
        <Home />
      </div>
    </GithubProvider>
  );
}

export default App;
