import "./App.css";

import Footer from "../src/Footer/Footer";

import Header from "./Header/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/Home/Home";
import DetailProject from "./DetailProject/DetailProject";
import NotFound from "./NotFound/NotFound";
import Project from "./Projects/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/DetailProject/:ProjectId">
            <DetailProject />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
