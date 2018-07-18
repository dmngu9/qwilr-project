import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';

export class Button extends React.Component {
    onClick = () => {
        ajax.get('/api/signout')
            .toPromise()
            .then(_ => console.log(_));
    }

    render() {
        return <button onClick={this.onClick}>Log out</button>;
    }
}