import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
   <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
