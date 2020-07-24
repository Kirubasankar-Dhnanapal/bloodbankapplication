import { Route, Switch,HashRouter } from "react-router-dom";
import React, { Component } from "react";
import App from './App';
import Registration from './Registration';
import SearchDetails from './SearchDetails';
import Contact from './Contact';


class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/register' component={Registration}/>
                    <Route path='/searchblooddetail' component={SearchDetails}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </HashRouter>
        );
    }
}
export default (Routers);
