import React from 'react';

import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';


const initializeCSS = `
    *, *::after, *::before {
        box-sizing: border-box;
    }

    html,
    body {
        // Box Model Properties
        min-height: 100%;
        padding: 0;
        margin: 0;
        
        // Visual Properties
        background: white;
        
        // Typography Properties
        font-family: Helvetica, Arial, sans-serif;
    }

    body {
        // Box Model Properties
        max-width: 420px;
        margin: 1rem auto 0;
        
        //Visual Properties
        box-shadow: 0 3px 2px rgba(0, 0, 0, 0.05),
        0 7px 5px rgba(0, 0, 0, 0.05);

        // Typography Properties
        font-size:14px;
        line-height: 1.33;        
    }

    main{
        padding: .5rem;
    }

    h1 {
        // Box Model Properties
        margin: 1rem 0 .5rem;
  
        // Visual Properties
        color:#000;
  
        // Typography Properties
        font-size: 30px;
        font-weight:600;
    }
    
    a{
        color:inherit;
        text-decoration:none;
    }

    ol, ul, li {
        // Box Model Properties
        margin: 0;
        padding: 0;

        // Visual Properties
        border: 0;
        list-style: none;

    }
    
    button{
        all:unset;

        //Miscellaneous Properties
        cursor:pointer
    }

    
`;

export default function InitializeCSS() {
  return (
    <Global styles={css`
      ${emotionNormalize}
      ${initializeCSS}
    `}
    />
  );
}
