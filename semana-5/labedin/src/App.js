import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

import logo from './img/labedin.png'
import foto from './img/lucas-duarte.jpg'
import IconeEmail from './img/icone-email.png'
import IconeEndereco from './img/icone-endereco.png'
import LabenuLogo from './img/labenu.png'
import USP from './img/usp.png'
import Nama from './img/nama.png'
import Getninjas from './img/getninjas.png'
import Gympass from './img/gympass.png'

import GitHubIcon from './img/github.webp'


function App() {
  return (
    <div className="App">
      <header>
      <img className="logo" src={logo} />
      </header>

      <div className="page-section-container">
        <div className="card-profile">
          <div><img src={foto}/></div>
            <div className="profile-info">
                <h2>Lucas Duarte</h2>
                <p>Oi, eu sou o Lucas Duarte e essa é minha página no <strong>Labedin</strong>. Tenho experiência trabalhando com UX e Design Conversacional. Atualmente, estudo Desenvolvimento Web Full-Stack na Labenu! </p>
            </div>
        </div>
      </div>

          <CardPequeno imagem={IconeEmail} categoria="Email" texto="dolucasduarte@gmail.com"/>
          <CardPequeno imagem={IconeEndereco} categoria="Endereço" texto="Rua dos Bobos, nº 0 - Vila Matilde - São Paulo, SP"/>

      <div className="page-section-container">
        <h3>Algumas experiências profissionais:</h3>
        <CardGrande 
          imagem={Gympass}
          nome="Gympass" 
          descricao="Designer Conversacional" 
        />
        
        <CardGrande 
          imagem={Nama}
          nome="Nama" 
          descricao="Head de Design Conversacional" 
        />

        <CardGrande 
          imagem={Getninjas}
          nome="Getninjas" 
          descricao="UX Writer" 
        />

        <h3>Instituições de ensino</h3>
        <CardGrande 
          imagem={LabenuLogo}
          nome="Labenu" 
          descricao="Curso de desenvolvimento web full-stack" 
        />
        
        <CardGrande 
          imagem={USP}
          nome="USP" 
          descricao="Graduação em Letras" 
        />
      </div>

      <div className="page-section-container">
        <h3>Minhas redes sociais</h3>

        <div className="social-icon-container">
        <a target="blank" href="https://www.facebook.com/"><ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        /> </a>       

        <a target="blank" href="https://www.twitter.com">
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        /> </a>    

        <a target="blank" href="https://github.com/future4code/Lucas-Duarte">
        <ImagemButton
          imagem={GitHubIcon}
          texto="Github"
        />
        </a>
        </div>
      </div>

      <footer>(Esse é um exercício feito em 11/ago/2020 para treinar componentização em React!)</footer>
    </div>
  );
}

export default App;
