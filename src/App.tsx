import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Overview from "./pages/Overview";
// import Pairs from "./pages/Pairs";
import Tokens from "./pages/Tokens";
import './sass/styles.scss';

function App() {
  return (
    <Router>
      <Switch>
        <DefaultLayout>
          <Route exact path='/overview' component={Overview}/>
          <Route exact path='/tokens' component={Tokens}/>
          {/* <Route exact path='/pairs' component={Pairs}/> */}
          <Route exact path='/'>
            <Redirect to="/overview" />
          </Route>
        </DefaultLayout>
      </Switch>
    </Router>
  );
}

export default App;
