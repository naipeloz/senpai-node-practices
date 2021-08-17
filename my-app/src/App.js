import {BrowserRouter,Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/Landing/index'

function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/landingPage">
          <>
          <LandingPage />
          </>
        </Route>
        <Route path="/city">
          <>
          City
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
