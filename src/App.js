import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/product/:id" component={ProductScreen} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
