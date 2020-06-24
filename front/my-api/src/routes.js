import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
import SignIn from './components/signIn'
import App from './components/App'
import Home from './components/Home'
import Project from './project'

function Routes(){
    return (   
        <Project>
            <Router history={history} >
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/SignIn" exact component={SignIn} />
                    <Route path="/refreshToken" exact component={App}/>
                </Switch>
            </Router>              
        </Project>
    )
}

export default Routes