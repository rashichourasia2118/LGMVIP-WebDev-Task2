import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'


export const Nav=styled.nav `
height:7vh;
width:100%;
text-decoration:none;
background:black;
display:flex;
justify-content:space-between;
color:#fff;
font-family:sans-serif;
align-item:center;
font-weight:700;

`
export const BrandName=styled.div `
  font-size:2em;
  letter-spacing:2px;
  font-weight:bold;
  color:white;
  margin-left:1em
  text-decoration:none;
`

export const NavbarLink=styled(LinkR)`
 font-size:25px;
 text-decoration:none;
 text-transform:uppercase;
 letter-spacing:1px;
 cursor:pointer;
 color:#fff;
 margin:5px;

 &:hover{
   color:green;
 }
`


