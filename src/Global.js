import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
    ${normalize()};
    html{
        box-sizing:border-box;
    }
    *,*::before, *::after{
        box-sizing:inherit;
    }
    body{
        background: red;
        padding: 65px 0 0 ;
    }

    main{
        width: 90%;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
