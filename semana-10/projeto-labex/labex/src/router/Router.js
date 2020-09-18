import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '../screens/HomePage/HomePage'
import ApplyToTripPage from '../screens/ApplyToTrip/ApplyToTripPage'

import SignUpPage from '../screens/LoginPage/SignUpPage'
import LoginPage from '../screens/LoginPage/LoginPage'

import AdminPage from '../screens/Admin/AdminPage'
import CreateTripPage from '../screens/Admin/CreateTripPage'
import TripDetailsPage from '../screens/Admin/TripDetailsPage'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/inscricao/:id">
                    <ApplyToTripPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />     
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage/>
                </Route>

                <Route exact path="/adminpage">
                    <AdminPage />     
                </Route>

                <Route exact path="/criar-viagem">
                    <CreateTripPage />     
                </Route>

                <Route exact path="/viagem/:id">
                    <TripDetailsPage/>
                </Route>

                <Route exact path="/">
                    <HomePage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;