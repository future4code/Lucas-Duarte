import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '../screens/HomePage'
import LoginPage from '../screens/LoginPage'
import CreateTripPage from '../screens/CreateTripPage'
import ApplyToTripPage from '../screens/ApplyToTripPage'
import AdminPage from '../screens/AdminPage'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/inscricao">
                    <ApplyToTripPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />     
                </Route>

                <Route exact path="/adminpage">
                    <AdminPage />     
                </Route>

                <Route exact path="/criar-viagem">
                    <CreateTripPage />     
                </Route>

                <Route exact path="/">
                    <HomePage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;