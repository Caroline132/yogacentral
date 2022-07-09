import 'bootstrap/dist/css/bootstrap.css'
import Navigationbar from './Navigationbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Build from './Build';
import Blog from './Blog';
import FAQ from './FAQ';
import Results from './Results';
import Register from './Register';
import Confirmation from './Confirmation';

function App() {
  return (
    <Router basename="/yogacentral2">
      <div className="App">
        <Navigationbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/build">
              <Build />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/confirmation">
              <Confirmation />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;