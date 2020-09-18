import styled, {css} from 'styled-components'
import {SlideInBottom, SlideInLeft} from '../keyframes/animations'

// ---------- FORMULÁRIOS  ---------- //

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 1em;
    width: ${props => {
        if (props.form === "create-trip") {
            return '40%'
        }
    }};

    animation: ${props => {
        if (props.form === "apply") {
            return css`${SlideInBottom} 3s`;
        } else if (props.form === "create-trip"){
            return css `${SlideInLeft} 1s`
        } else {
            return css`${SlideInBottom} 1s`
        }
    }};
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    width: 100%;
`

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.7em;
`

export const Input = styled.input`
    height: 1.9em;
    background-color: transparent;
    border:none;
    border-bottom: 1px solid white;
    padding-left: 0.5em;
    color: white;
    font-size: 1em;
    margin-bottom: 0.5em;

    &:invalid:focus {
    border: 1px solid red;
}
`

export const Select = styled.select`
    height: 1.9em;
    background-color: transparent;
    border:none;
    border-bottom: 1px solid white;
    padding-left: 0.5em;
    color: white;
    font-size: 1em;
    margin-bottom: 0.5em;
`

export const TextArea = styled.textarea`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    height: 2.9em;
    resize: vertical;
    color: white;

`