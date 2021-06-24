import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Main from "./components/Main";
// import Detail from "./components/Detail";
import loadable from "@loadable/component";

const Main = loadable(() => import("./components/Main"));
const Detail = loadable(() => import("./components/Detail"), {
  fallback: <h1>Loading...</h1>,
});

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
