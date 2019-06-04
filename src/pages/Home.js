import React from 'react';
import Search from '../components/Search';
import AnimeList from '../components/AnimeList';


function Home(props) {
  
  return (
    <div >
        <br/>
        <Search/>
        <AnimeList list={props.animes} />
    </div>
  );
}

export default Home;
