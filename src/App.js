import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Pestaña from "./pages/pestaña";

function App() {
  return (
    <div className="App">
   <Router>
        <Switch>
          <Route path="/roles">
            <Pestaña/>
          </Route>
          <Route path="/usuario">
            <Pestaña/>
          </Route>
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
