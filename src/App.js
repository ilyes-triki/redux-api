import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Error from "./pages/error/Error";
import SingleItem from "./pages/singleItem/SingleItem";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/singleitem/:id" component={SingleItem} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
