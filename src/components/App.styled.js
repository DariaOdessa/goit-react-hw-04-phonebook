import styled from "styled-components";

export const Phonebook = styled.div`
width: 600px;
padding: ${p => p.theme.space[5]}px;
background-color: ${p => p.theme.colors.backgroundGray};
margin-top: ${p => p.theme.space[6]}px;
margin-bottom: ${p => p.theme.space[6]}px;
margin-left: auto;
margin-right: auto;
border-radius: ${p => p.theme.radii.lg};
box-shadow: ${p => p.theme.shadows.dark};
`

