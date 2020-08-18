import React from 'react';
import {ContainerForm} from '../../AppStyle'
import {ContainerInput} from '../../AppStyle'
import {Titulo} from '../../AppStyle'
import {Label} from '../../AppStyle'
import {Input} from '../../AppStyle'
import {Select} from '../../AppStyle'



class Etapa3 extends React.Component {

    render() {
        return (
        <ContainerForm>
        <Titulo>Etapa 3 - Informações gerais de ensino</Titulo>
        <ContainerInput>
            <Label>Por que você não terminou um curso de graduação?</Label>
            <Input/>
        </ContainerInput>
        
        <ContainerInput>
        <Label>Você fez algum curso complementar?</Label>
        <Select name="Escolaridade" id="escolaridade">
            <option value="Não">Não</option>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso de inglês">Curso de inglês</option>
        </Select>
        </ContainerInput>
        </ContainerForm>
        )
    }
}

export default Etapa3