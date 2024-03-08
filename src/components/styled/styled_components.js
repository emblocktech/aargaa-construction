import styled from "styled-components"
import { Button } from "semantic-ui-react"

export const LearnButton = styled(Button)`
  background: none !important;
  border: 1px solid grey !important;
  padding-top: 10px; 
  transition: all ease-in-out 0.2s !important;
  &:hover {
    background: #FCDC2A !important;
    color: #1e1e1e1 !important;
    border-radius: 2rem;
  }
`