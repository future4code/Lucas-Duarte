import React from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/LoginPage/SignUpPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import PostPage from '../screens/FeedPage/PostPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = () => {

    return (
        <Switch>
            <Route exact path={'/'}>
                <FeedPage/>
            </Route>
            <Route exact path={'/login'}>
                <LoginPage/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUpPage/>
            </Route>
            <Route exact path={'/:id'}>
                <PostPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    )
}

export default Router