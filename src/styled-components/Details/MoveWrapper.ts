import  styled  from "styled-components";


export const MoveWrapper = styled.ul`
        display: flex;
        width: auto;
        height: auto;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        justify-content: space-between;

        span {
            opacity: 0;
            transition: opacity 8ms;
            transform: rotate(1501grad);
        }
`;


