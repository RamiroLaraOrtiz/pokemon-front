import  styled  from "styled-components";
import { Continer } from "../../models/Container";
export const Contaner = styled.div<Continer>`
   
    ${({display})=>{
    switch (display) {
        case "true":
            return ` display: grid;`

        case "false":
            return `display: none;` 
    }
  }}

    grid-template-columns: repeat(auto-fill,minmax(200px,0.4fr));
    gap: 10% 10%;
    align-content: space-evenly;
    gap: 54px 54px;
    padding: 2% 5% 3% 2%;
`;