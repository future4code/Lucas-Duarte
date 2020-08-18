import React from 'react';

import {ContainerForm} from '../../AppStyle'
import {ContainerInput} from '../../AppStyle'
import {Titulo} from '../../AppStyle'
import {Label} from '../../AppStyle'
import {Input} from '../../AppStyle'
import {Select} from '../../AppStyle'


class Etapa1 extends React.Component {

    render() {
        return (
        <ContainerForm>
        <Titulo>Etapa 1 - Dados gerais</Titulo>
        <ContainerInput>
            <Label>1. Qual o seu nome?</Label>
            <Input/>
        </ContainerInput>
        
        <ContainerInput>
            <Label>2. Qual sua idade?</Label>
            <Input/>
        </ContainerInput>

        <ContainerInput>
        <Label>3. Qual seu email?</Label>
        <Input/>
        </ContainerInput>

        <ContainerInput>
        <Label>4. Qual a sua escolaridade?</Label>
        <Select name="Escolaridade" id="escolaridade">
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
        </Select>
        </ContainerInput>
        </ContainerForm>
        )
    }
}

export default Etapa1