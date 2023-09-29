import styled from "styled-components";

export const ButtonFavorite = styled.button<{isExist:boolean}>`

    
    font-family: "Press Start 2P","cursive";
    font-size: xx-small;
    margin: 5px 0px 1px 14px;
    padding: 2%;

    ${({isExist})=>{
    switch (isExist) {
        case true:
            return`
                background: rgb(255, 0, 0);
                color: white;
                box-shadow: -4px 0 0 0 rgb(255, 0, 0), 4px 0 0 0 rgb(255, 0, 0), 0 -4px 0 0 rgb(255, 0, 0), 0 4px 0 0 rgb(255, 0, 0);
            `
        case false:
            return ` background: rgba(255,255,255,0.24);
            box-shadow: -4px 0 0 0 black, 4px 0 0 0 black, 0 -4px 0 0 black, 0 4px 0 0 black;` 
    }
  }}
`