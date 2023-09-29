import  styled  from "styled-components";

import { Continer } from "../../models/Container";
export const CardDetailWrapper = styled.div<Continer>`
    ${({display})=>{
    switch (display) {
        case "true":
            return `
            display: flex;
            `

        case "false":
            return `display: none;` 
    }
  }}
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1%;
    font-size: x-small;


`;


