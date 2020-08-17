import React from 'react';
import {ContainerForm} from '../../AppStyle'
import {ContainerInput} from '../../AppStyle'
import {Titulo} from '../../AppStyle'
import {Label} from '../../AppStyle'
import {Input} from '../../AppStyle'

class Etapa2 extends React.Component {

    render() {
        return (
        <ContainerForm>
        <Titulo>Etapa 2 - Informações do Ensino Superior</Titulo>
        <ContainerInput>
            <Label>5. Qual curso?</Label>
            <Input/>
        </ContainerInput>
        
        <ContainerInput>
            <Label>2. Qual a unidade de ensino?</Label>
            <Input/>
        </ContainerInput>

        </ContainerForm>
        )
    }
}

export default Etapa2