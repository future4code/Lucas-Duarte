import React from 'react';
import './App.css';
import logo from './img/labetube.png';
import searchIcon from './img/search.png'
import video1 from './img/video1.jpg'
import video2 from './img/video2.jpg'
import video3 from './img/video3.jpg'
import video4 from './img/video4.jpg'
import video5 from './img/video5.jpg'
import video6 from './img/video6.jpg'
import video7 from './img/video7.jpg'
import video8 from './img/video8.jpg'

function App() {

  const watchVideo = "► Assistir o vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
    <header>
      <img className="logo" src={logo} alt="Labetube"/>
        <figure className="search">
          <img className="search-icon" src={searchIcon} alt="search"/>
          <input type="text"/>
        </figure>  
    </header>

    <main className="home-grid">

            <figure className="video-card" onClick={reproduzVideo}>
                <img className="thumbnail-video" src={video1} alt="video-labenu" />
                <figcaption>{watchVideo}</figcaption>
            </figure>
       
            <figure className="video-card" onClick={reproduzVideo}>
                <img className="thumbnail-video" src={video2} alt="video-labenu" />
                <figcaption>{watchVideo}</figcaption>
            </figure>
       
        <figure className="video-card" onClick={reproduzVideo}>
            <img className="thumbnail-video" src={video3} alt="video-labenu" />
            <figcaption>{watchVideo}</figcaption>
        </figure>

        <figure className="video-card" onClick={reproduzVideo}>
                <img className="thumbnail-video" src={video4} alt="video-labenu" />
                <figcaption>{watchVideo}</figcaption>
        </figure>

        <figure className="video-card" onClick={reproduzVideo}>
                <img className="thumbnail-video" src={video5} alt="video-labenu" />
                <figcaption>{watchVideo}</figcaption>
        </figure>

        <figure className="video-card" onClick={reproduzVideo}>
                <img className="thumbnail-video" src={video6} alt="video-labenu" />
                <figcaption>{watchVideo}</figcaption>
        </figure>

        <figure className="video-card" onClick={reproduzVideo}>
                <img className="thumbnail-video" src={video7} alt="video-labenu" />
                <figcaption>{watchVideo}</figcaption>
        </figure>

        <figure className="video-card" onClick={reproduzVideo}>
                <img className="thumbnail-video" src={video8} alt="video-labenu" />
                <figcaption>{watchVideo}</figcaption>
        </figure>
       
    </main>

    <footer>
        Labenu is a private corporation! All rights reserved. ®
    </footer>

    </div>
  );
}

export default App;
