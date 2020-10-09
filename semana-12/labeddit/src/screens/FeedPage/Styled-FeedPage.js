import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #DAE0E6;
    min-height: 100vh;

    max-width: 100vw;
`

export const Title = styled.h4`
    font-weight: 500;
    color: #1C1C1C;

    align-self: flex-start;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40em;
    height: 40vh;
    background-color: #FFFFFF;
    border-radius: 0.5em;

    margin: 5em 0 2em 0;
`

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
    
`

export const InputTitle = styled.div`
  font-size: 0.7em;
  align-self: flex-start;
  margin-bottom: 0.7em;
  color: #1C1C1C;
`

export const InputPostTitle = styled.input`
  border: 1.5px solid #EDEFF1;
  border-radius: 2px;

  height: 2em;
  width: 100%;
  padding-left: 1em;

  margin-bottom: 1em;
  
  &::placeholder{
    color: #C0C1C2;
    font-weight: 510;
  }
`

export const InputPostComment = styled.textarea`
  border: 1.5px solid #EDEFF1;
  border-radius: 2px;

  width: 100%;
  padding-left: 1em;
  padding-top: 0.5em;

  resize: vertical;
  min-height: 6em;
  max-height: 8em;

  font-family: Arial;
  
  &::placeholder{
    color: #878A8C;
    font-weight: 510;
  }
`

export const Button = styled.button`
    height: 2.5em;
    width: 6em;
    background-color: #137BD0;
    border:none;
    border-radius: 5px;
    color: #FFFFFF;

    font-weight: 900;
    text-transform: uppercase;

    margin-top: 1em;
    align-self: flex-end;

    &:hover {
        background-color: #3996DA;
        cursor:pointer;
    }
`