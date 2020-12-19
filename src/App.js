import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar, { giveWay } from './components/Navbar';
import Profile from './components/main/Profile';
import Works from './components/works/works';
import Awards from './components/awards/awards';
import './App.css';

const way = giveWay()

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <main>
          <Redirect from={way + "/index"} to={way + "/"} />
          <Route path={way + "/"} exact component={Profile} />
          <Route path={way + "/projects"} component={Works} />
          <Route path={way + "/achievements"} component={Awards} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
