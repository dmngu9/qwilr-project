import { configure } from '@storybook/react';

const req = require.context('../client', true, /.stories\.tsx$/);

configure(() => req.keys().forEach(req), module);