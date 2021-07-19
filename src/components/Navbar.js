import React from 'react'
import { Route, Switch ,BrowserRouter as Router,Link} from 'react-router-dom'
import {Nav,BrandName,NavbarLink} from './NavbarElements'
import Home from './Home'
import User from './User'
import NotFound from './NotFound'

export default function Navbar(props) {
    return (
        <div>
        <Router>
            <Nav>
                <BrandName>
                   <Link to="/">LetsGrowMore</Link> 
                </BrandName>
                    
                <NavbarLink to="/">
                 
                             Home
                
                </NavbarLink>
                <NavbarLink to="/getusers">
                 
                              <button>Get Users</button> 
                
                </NavbarLink>
                  
            </Nav>
            <Switch>
                <Route exact path="/">
                <Home />
                </Route>
                <Route exact path="/getusers">
                 <User />
                </Route>
                <Route exact path="*">
                <NotFound />
                </Route>
            </Switch>
            </Router>
        </div>
    )
}
