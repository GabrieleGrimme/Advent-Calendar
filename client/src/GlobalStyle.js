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

    --reddish: rgba(210, 68, 68, 1) 0%; //gradient red transparent
    --blackish: rgba(0, 0, 0, 0.8) 70%; //gradient black transparent

    --shadowfirst: rgba(255, 255, 255, 0.8);
    --shadowsecond: rgba(255, 253, 224, 0.7);
}

@media (min-width: 325px) {

body {
    background: var(--primary);
    color: var(--secondary);
    display:grid;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.25rem;
    margin: 0 auto;
    place-items: center;
    }
}`;
