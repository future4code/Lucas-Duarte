import React, {Component} from 'react'
import './SecaoCompartilhar.css'

import iconeFacebook from './../../img/social-facebook.svg'
import iconeInstagram from './../../img/social-instagram.svg'
import iconeTwitter from './../../img/social-twitter.svg'


export class SecaoCompartilhar extends Component {
    state = {
    }

    onClickSocialFacebook = (event) => {
        console.log("Post compartilhado no Facebook!")
    }
    onClickSocialInstagram = (event) => {
        console.log("Post compartilhado no Instagram!")
    }
    onClickSocialTwitter = (event) => {
        console.log("Post compartilhado no Twitter!")
    }

    render() {
        return (
            <div className={'share-container'}>
                <img className={'social-icon'} src={iconeFacebook} onClick={this.onClickSocialFacebook}/>
                <img className={'social-icon'} src={iconeInstagram} onClick={this.onClickSocialInstagram} />
                <img className={'social-icon'} src={iconeTwitter} onClick={this.onClickSocialTwitter} />
            </div>
        )
    }


}