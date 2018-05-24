import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import {
    App,
    FormEditor,
    FormList,
    NotFound
} from "./components";

ReactDOM.render((
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={FormList}/>
                    <Route exact path="/forms/:id/edit" component={FormEditor}/>
                    <Route component={NotFound}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('app')
);