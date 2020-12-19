import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/main/Profile';
import Works from './components/works/works';
import Awards from './components/awards/awards';
import './App.css';

const way = '/CV'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <main>
          <Redirect from={way + "/index"} to={way + "/"} />
          <Route path={way + "/"} exact component={Profile} />
          <Route path={way + "/works"} component={Works} />
          <Route path={way + "/awards"} component={Awards} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
