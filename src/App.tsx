import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import './sass/styles.scss';

function App() {
  return (
    <Router>
      <Switch>
        <DefaultLayout>
          <Route exact path='/'>hello world</Route>
        </DefaultLayout>
      </Switch>
    </Router>
  );
}

export default App;
