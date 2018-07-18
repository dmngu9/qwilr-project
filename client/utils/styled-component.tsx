import * as styledComponents from 'styled-components';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export interface Theme {
    primaryColor: string;
}

const theme: Theme = {
    primaryColor: '#db7093'
};

export type ThemedStyledProps<P, T> = styledComponents.ThemedStyledProps<P, T>;

injectGlobal`
    body {
        padding: 0;
        margin: 0;
		font-family: sans-serif;
    }
`;

export { theme, css, injectGlobal, keyframes, ThemeProvider };

export default styled;
