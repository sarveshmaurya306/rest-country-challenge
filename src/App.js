import React, { useState } from 'react'
import './style/style.css'
import Header from './components/Header'
import Specs from './components/Specs'
import Detail from './components/Detail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App({props}) {
    return (
        <div className={theme[0]==='light'?'':'bg-dark text-light'}>
            <Router>
                <Header Theme={theme} />
                <Switch>
                    <Route exact path="/" >
                        <Specs Theme={theme} />
                    </Route>

                    <Route exact path="/detail" >
                        <Detail theme={theme}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
