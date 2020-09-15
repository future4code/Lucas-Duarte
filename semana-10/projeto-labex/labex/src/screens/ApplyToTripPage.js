import React from 'react'
import styled from 'styled-components'

//routes
import { useHistory } from "react-router-dom";
import {goBack} from '../router/goToPages'

//hooks
import useInput from '../hooks/useInput';


const ApplyToTripContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:30%;
`

const ApplyToTripPage = () => {

    const history= useHistory()

    const [name, handleName] = useInput()
    const [age, handleAge] = useInput()
    const [profession, handleProfession] = useInput()
    const [country, handleCountry] = useInput()
    const [applicationText, handleApplicationText] = useInput()




    return (
        <ApplyToTripContainer>
            <p onClick={() => goBack (history) }>Voltar</p>
            <h1>Inscreva-se para viajar!</h1>
            <input 
            value={name}
            onChange={handleName}
            placeholder={"Nome completo"}/>

            <input 
            value={age}
            onChange={handleAge}
            type={"number"} 
            placeholder={"Idade"}/>

            <input 
            value={profession}
            onChange={handleProfession}
            placeholder={"Profissão"}/>

            <input 
            value={country}
            onChange={handleCountry}
            placeholder={"País de origem"}/>

            <textarea 
            value={applicationText}
            onChange={handleApplicationText}
            placeholder={"Texto"}/>

            <button>Enviar</button>
        </ApplyToTripContainer>
    )
}

export default ApplyToTripPage