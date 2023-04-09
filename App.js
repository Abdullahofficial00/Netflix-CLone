import './App.css';
import Row from './row';
import requests from './request';
import React from 'react';
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Nav/>
      <Banner/>
      <Row 
        title ="Netflix Orignal" 
        fetchUrl = {requests.fetchnetflixorignals}
        isLargeRow
      />
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ="Documenteries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
