import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
}

:root {
    --primary: rgb(0, 0, 0); // black
    --secondary: rgb(255, 255, 255); //white
    --third: rgb(210, 68, 68); // red
    --fourth: rgb(250, 220, 194); //nude
    --fifth: rgb(110, 24, 72); //purple
}

body {
    background: lightgrey;
    color: var(--secondary);
    display:grid;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.25rem;
    place-items: center;
}
`;
