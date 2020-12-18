import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/main/Profile';
import Works from './components/works/works';
import Awards from './components/awards/awards';
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <main>
          <Redirect from="/index" to="/" />
          <Route path="/" exact component={Profile} />
          <Route path="/works" component={Works} />
          <Route path="/awards" component={Awards} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
