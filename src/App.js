import React, { useState } from 'react';
import Header from './components/Header'
import './App.css';
import Home from './pages/Home'
import AddAnime from './pages/AddAnime'
import Pendent from './pages/Pendent'
import Favourites from './pages/Favourites'
import Watched from './pages/Watched'
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  
  var [animes, setAnimes]= useState(
    [
      {
        key:1,
        image:'oi',
        title:'Test',
        status:'Watched',
        text:'tesasdaskdjaslkaasdkjasdklasda'
      },
      {
        key:1,
        image:'oi',
        title:'Test',
        status:'Watched',
        text:'tesasdaskdjaslkaasdkjasdklasda'
      }
    ]
  )
  
  return (
    <div className="App">
        <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddAnime} />
            <Route path='/pendent' component={Pendent} />
            <Route path='/favorites' component={Favourites} />
            <Route path='/watched' component={Watched} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
