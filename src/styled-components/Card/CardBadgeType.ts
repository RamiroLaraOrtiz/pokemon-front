import  styled  from "styled-components";
import { badgeType } from "../../models/badgeType";


export const CardBadgeType = styled.div<badgeType>`
    
    border-style: solid none;
    border-width: 1px;
    border-radius: 5px;
    padding: 0.15em;
    font-variant: small-caps;
    font-size: 9pt;
    color: #F8F8F8;
    text-shadow: 0 1px 1px #807870;
    height: auto;
    width: max-content;
    margin-left: 1%;

    ${({type})=>{
    switch (type) {
        case "normal":
            return `background-color: #A8A878;
            border-top-color: #D8D8D0;
            border-bottom-color: #705848;`

        case "fire":
            return `background-color: #F08030;
            border-top-color: #F8D030;
            border-bottom-color: #C03028;` 

        case "water":
            return `background-color: #6890F0;
            border-top-color: #98D8D8;
            border-bottom-color: #807870;`

        case "grass":
            return `background-color: #78C850;
            border-top-color: #C0F860;
            border-bottom-color: #588040;`

        case "electric":
            return `background-color: #F8D030;
            border-top-color: #F8F878;
            border-bottom-color: #B8A038;`
                
        case "ice":
            return `background-color: #98D8D8;
            border-top-color: #D0F8E8;
            border-bottom-color: #9090A0;`

        case "fighting":
            return `background-color: #C03028;
            border-top-color: #F08030;
            border-bottom-color: #484038;`

        case "poison":
            return `background-color: #A040A0;
            border-top-color: #D880B8;
            border-bottom-color: #483850;`

        case "ground":
        return `background-color: #E0C068;
        border-top-color: #F8F878;
        border-bottom-color: #886830;`

        case "flying":
        return `background-color: #A890F0;
        border-top-color: #C8C0F8;
        border-bottom-color: #705898;`

        case "psychic":
            return `background-color: #F85888;
            border-top-color: #F8C0B0;
            border-bottom-color: #789010;`

        case "bug":
            return `background-color: #A8B820;
            border-top-color: #D8E030;
            border-bottom-color: #A8B820;`

        case "rock":
            return `background-color: #B8A038;
            border-top-color: #E0C068;
            border-bottom-color: #886830;`

        case "":
            return `background-color: #705898;
            border-top-color: #A890F0;
            border-bottom-color: #483850;`

        case "ghost":
            return `background-color: #705898;
            border-top-color: #A890F0;
            border-bottom-color: #483850;`

        case "dark":
            return `background-color: #705848;
            border-top-color: #A8A878;
            border-bottom-color: #484038;`

        case "dragon":
        return `  background-color: #7038F8;
        border-top-color: #B8A0F8;
        border-bottom-color: #483890;
        `
        case "steel":
        return `background-color: #B8B8D0;
        border-top-color: #D8D8C0;
        border-bottom-color: #807870;`

        case "fairy":
            return `background-color: #F0B6BC;
            border-top-color: #F5CAD1;
            border-bottom-color: #905F63;`
    }
  }}
`;


