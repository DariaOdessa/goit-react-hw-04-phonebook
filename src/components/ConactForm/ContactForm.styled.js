import styled from "styled-components";

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: ${p => p.theme.space[4]}px;
`

export const InputName = styled.p`
display: block;
margin-bottom: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.l};
`
export const Input = styled.input`
font-size: ${p => p.theme.fontSizes.xl};
margin-bottom: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.md};
border: ${p => p.theme.borders.large};
padding: ${p => p.theme.space[3]}px;
&:hover,
&:focus {
    border-color: ${p => p.theme.colors.secondary}};
`

export const Button = styled.button`
display: block;
cursor: pointer;
min-width: ${p => p.theme.sizes.l};
padding: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
border-radius: ${p => p.theme.radii.md};
margin-bottom: ${p => p.theme.space[5]}px;
background-color: ${p => p.theme.colors.primary};
color: ${p => p.theme.colors.white};
border-color: inherit;
&:hover,
&:focus {
    background-color: ${p => p.theme.colors.secondary}
}
`