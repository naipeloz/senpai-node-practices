import { BrowserRouter, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import viento from './Pages/City'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landingPage">
          <>
            LandingPage
          </>
        </Route>
        <Route path="/city"><viento />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
