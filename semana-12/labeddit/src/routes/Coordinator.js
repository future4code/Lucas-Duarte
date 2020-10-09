export const goBack = (history) => {
    history.goBack()
}

export const goToLogin = (history) => {
   history.push('/login') 
}   

export const goToSignUp = (history) => {
    history.push('/signup') 
}

export const goToFeed = (history) => {
    history.push('/') 
}

export const goToPost = (history, id) => {
    history.push(`/${id}`) 
}