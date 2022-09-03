import styled from "styled-components"


export const Button = styled.button`
cursor: pointer;
min-width: ${p => p.theme.sizes.xl};
padding: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
border-radius: ${p => p.theme.radii.md};
margin-bottom: ${p => p.theme.space[3]}px;
background-color: ${p => p.theme.colors.primary};
color: ${p => p.theme.colors.white};
border-color: inherit;
&:hover,
&:focus {
    background-color: ${p => p.theme.colors.secondary}
}
`
export const ContactName = styled.span`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-right: ${p => p.theme.space[3]}px;
`

export const ContactNumber = styled.span`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-right: ${p => p.theme.space[3]}px;
`