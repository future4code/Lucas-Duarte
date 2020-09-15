import {useState } from 'react';


const useInput = () => {
    const [value, setValue] = useState("")
    
    const handleValue = (event) => {
        setValue(event.target.value)
    }
    
    return [value, handleValue]
}

export default useInput