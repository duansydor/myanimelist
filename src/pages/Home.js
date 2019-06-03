import React, { useState } from 'react';
import Search from '../components/Search';
import AnimeList from '../components/AnimeList';


function Home() {
  
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
    <div >
        <br/>
        <Search/>
        <AnimeList list={animes} />
    </div>
  );
}

export default Home;
