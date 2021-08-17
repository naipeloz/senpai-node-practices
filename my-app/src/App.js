import {BrowserRouter,Switch,Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/landingPage">
          <>
          LandingPage
          </>
        </Route>
        <Route path="/city">
          <>
          <Citys />
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
