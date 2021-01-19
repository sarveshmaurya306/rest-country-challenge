import React from 'react'
import './style/style.css'
import Header from './components/Header'
import Specs from './components/Specs'
import Detail from './components/Detail'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" >
                    <Specs /> 
                </Route>

                <Route exact path="/detail">
                    {/* <Header /> */}
                    <Detail/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
