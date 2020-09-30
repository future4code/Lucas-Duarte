
export const goToHomePage = (history) => {
    history.push("/")
}

export const goToApplyToTripPage = (history, id) => {
    history.push(`/inscricao/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToAdminPage = (history) => {
    history.push("/adminpage")
}

export const goToCreateTripPage = (history) => {
    history.push("/criar-viagem")
}

export const goToTripDetailsPage = (history, id) => {
    history.push(`/viagem/${id}`)
}


