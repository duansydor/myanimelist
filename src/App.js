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
        key:'1',
        image:'https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/03/the-promised-neverland-790x444.jpg',
        title:'Test',
        status:'Watched',
        text:'tesasdaskdjaslkaasdkjasdklasda'
      },
      {
        key:'2',
        image:'https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/03/the-promised-neverland-790x444.jpg',
        title:'Taat',
        status:'Watched',
        text:'tesasdaskdjaslkaasdkjasdklasda'
      }
    ]
  )
  function addAnime(anime){
    let {title} = anime;
    animes.push({key:animes.length+1,title:title})
  }
  return (
    <div className="App">
        <Router>
        <Header/>
          <Switch>
            <Route exact path='/' render={(props) => {return(<Home animes={animes}/>)}}/>
            <Route path='/add' render={(props) => {return(<AddAnime addAnimeClick={addAnime}/>)}} />
            <Route path='/pendent' component={Pendent} />
            <Route path='/favorites' component={Favourites} />
            <Route path='/watched' component={Watched} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
