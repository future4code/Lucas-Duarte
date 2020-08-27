import styled from 'styled-components'

export const ListContainer = styled.div `
    padding-bottom: 2em;
    background-color: #282C34;
    display: flex;
    flex-direction:column;

    @media (max-width:900px) {
    width: 90%;
}

    @media (max-width:500px) {
    width: 95%;
}
`

export const ListItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ListItem = styled.div `
    display: flex;
    align-items: center;
    align-self: flex-start;
`

export const UserIcon = styled.img`
    height:1em;
    margin-right: 0.5em;
`

export const UserName = styled.strong`
    color: #FFFF;
`
export const LinkButton = styled.p`
    color: #818EA8;
    font-size: 0.7em;
    margin-left: ${props => {
        if (props.type === "edit") {
            return "0"
        } else {
            return "0.8em"
        }}};

    &:hover {
        text-decoration: underline;
        cursor:pointer;
    }   

`
export const SmallText = styled.p`
    color: #818EA8;
    font-size: 0.7em;
    margin-left: 0.8em;
`


// DETALHES

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content:left;
    margin-top: 0.8em;
`

export const EmailContainer = styled.div`
    display: flex;
`

export const EmailIcon = styled.img`
    height: 1em;
    margin-right: 0.5em;
`


export const EmailText = styled.div`
    color: #FFFF;
    font-size: 0.8em;
`

// EDITAR

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const EditInput = styled.input`
    height: 1.5em;
    margin-bottom: ${props => {
        if(props.type === "nome") {
            return "0.6em"
        } else {
            return "0"
        }}};
    border:none;
    border-radius: 2px;
    padding-left: 0.5em;
    background-color: #CFD1D7;
`

// VOLTAR
export const BackIconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    margin-top: 2em;
`

export const BackIcon = styled.img`
    height: 0.7em;
    transition: transform 3s;

    &:hover {
    cursor:pointer;
    transform: scale(0.96);
    }

`

export const BackIconLabel = styled.label `
    color: #FFB920;
    margin-left: 0.5em;
    font-size: 0.8em;

    &:hover {
    text-decoration: underline;
    cursor:pointer;
    }
    
`
