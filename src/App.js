import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import ArticleScreen from "./screens/ArticleScreen";

import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/post/:id" component={ArticleScreen} />
    </Router>
  );
};

export default App;
