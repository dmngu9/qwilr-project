import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Button } from './view/button';

// tslint:disable
const App: React.StatelessComponent = () => (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/auth/signin"
                render={() => (
                    <form action="/api/signin" method="post">
                        <div>
                            <label>Username:</label>
                            <input type="text" name="username" />
                            <br />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}
            />
            <Route
                exact
                path="/auth/signup"
                render={() => (
                    <form action="/api/signup" method="post">
                        <div>
                            <label>Fullname:</label>
                            <input type="text" name="fullname" />
                        </div>
                        <div>
                            <label>Username:</label>
                            <input type="text" name="username" />
                            <br />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}
            />
            <Route exact path="/dashboard" render={() => <Button />} />
            <Route exact path="/trade" render={() => <div>Trade</div>} />
            <Route exact path="/buy/:sharecode" render={() => <div>buy share</div>} />
            <Route exact path="/sell/:sharecode" render={() => <div>sell share</div>} />
        </Switch>
    </BrowserRouter>
);

export default App;
