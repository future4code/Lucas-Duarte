import React from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginPage from '../screens/LoginPages/LoginPage'
import SignUpPage from '../screens/LoginPages/SignUpPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import PostPage from '../screens/FeedPage/PostPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

import Header from '../components/Header'

const Router = () => {

    return (
        <Switch>
            <Route exact path={'/'}>
                <Header/>
                <FeedPage/>
            </Route>
            <Route exact path={'/login'}>
                <LoginPage/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUpPage/>
            </Route>
            <Route exact path={'/:id'}>
                <Header/>
                <PostPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    )
}

export default Router