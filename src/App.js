import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Category_Bar from "./components/header/Category_Bar";
import Header from "./components/header/Header";
import Loading from "./components/Loading";
import Cat from "./pages/cat";
import Home from "./pages/home";

function App() {

  const { loading } = useSelector(state => state);

  return (
    <Router>
      <div className="App">
        {loading && <Loading />}
        <Header />
        <Category_Bar />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/cat/:id" component={Cat} />
          <Route exact path="/category/:name/:id" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
