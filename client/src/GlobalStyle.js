import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

:root {
    --primary: rgb(0, 0, 0); // black
    --secondary: rgb(255, 255, 255); //white
    --third: rgb(210, 68, 68); // red
    --fourth: rgb(238, 209, 186); //nude
    --fifth: rgb(110, 24, 72); //purple
}

body {
    background: var(--primary);
    color: var(--secondary);
    display:grid;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.125rem;
    margin: 0.5rem;
    padding: 0.5rem;
    place-items: center;
}
`;
