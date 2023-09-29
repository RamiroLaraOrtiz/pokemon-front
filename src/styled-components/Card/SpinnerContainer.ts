import  styled  from "styled-components";
import { Continer } from "../../models/Container";

export const SpinnerContainer = styled.div<Continer>`
  text-align:center;
 ${({display})=>{
    switch (display) {
        case "true":
            return `display: none;
            `

        case "false":
            return ` text-align:center;` 
    }
  }}

  img{
    width: 10%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


