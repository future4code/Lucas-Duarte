import React from 'react';
import './App.css';
import Post from './components/Post/Post';

// images
import userpic1 from './img/userpic1.jpg'
import userpic2 from './img/userpic2.png'
import userpic3 from './img/userpic3.jpg'
import imagepost from './img/imagepost.png'
import imagepost2 from './img/imagepost2.png'

import logo from './img/labegram.png'


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>

      <header>
        <img className="logo" src={logo} />
      </header>

        <Post
          nomeUsuario={'dolucasduarte'}
          fotoUsuario={userpic1}
          fotoPost={userpic1}
        />

        <Post
          nomeUsuario={'labenu'}
          fotoUsuario={userpic2}
          fotoPost={imagepost}
        />
        <Post
          nomeUsuario={'capivara'}
          fotoUsuario={userpic3}
          fotoPost={imagepost2}
        />
                
      
      <footer>Exercício realizado em 12/agosto/2020 para fixar conceitos de componentes de classe. </footer>

      </div>
    );
  }
}

export default App;
