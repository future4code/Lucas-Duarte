import React from 'react';
import {ContainerForm} from '../../AppStyle'
import {Titulo} from '../../AppStyle'
import {Paragraph} from '../../AppStyle'
import {SuccessImage} from '../../AppStyle'
import trofeu from '../img/prize.svg'


class Final extends React.Component {

    render() {
        return (
        <ContainerForm>
        <Titulo>O formulário acabou!</Titulo>
        <Paragraph>Muito obrigado por participar! Entraremos em contato.</Paragraph>
        <SuccessImage src={trofeu}/>
        </ContainerForm>
        )
    }
}

export default Final