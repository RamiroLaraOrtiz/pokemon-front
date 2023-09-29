
import styled, { keyframes } from 'styled-components'


export const typing = keyframes`
 from { width: 0 }
  to { width: 100% }
`

export const blink_caret = keyframes`
from, to { border-color: transparent }
  50% { border-color: orange }
`


export const CardHeading = styled.h1`   
  animation: 
    ${typing} 3.5s steps(30, end),
    ${blink_caret} .5s step-end infinite;



`;

