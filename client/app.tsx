import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// tslint:disable
const App: React.StatelessComponent = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/about" render={() => <div>hey you</div>} />
            <Route exact path="/profile" render={() => <div>profile</div>} />
        </Switch>
    </BrowserRouter>
);

export default App;
