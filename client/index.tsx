import * as React from 'react';
import { render } from 'react-dom';
import 'ts-polyfill/lib/es2015-core';
import 'ts-polyfill/lib/es2015-promise';
import 'ts-polyfill/lib/es2016-array-include';
import 'ts-polyfill/lib/es2017-string';
import 'ts-polyfill/lib/es2018-promise';

import App from './app';

render(<App />, document.getElementById('root'));
