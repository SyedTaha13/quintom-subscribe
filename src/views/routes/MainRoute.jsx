import React from 'react'
import {Switch,Route} from 'react-router'

import Subscribe from '../Subscribe'

const MainRoute = () =>{
    return(
        <Switch>
            <Route path='/' component={Subscribe}/>
        </Switch>
    )
}

export default MainRoute