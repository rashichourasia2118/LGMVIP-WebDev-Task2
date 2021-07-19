import styled from 'styled-components'

export const CrdDetail=styled.div `
margin:5%;
height:100%;


`
export const List=styled.ul`
flex-wrap:wrap;
list-style-type:none;



`
export const Employee=styled.li `
flex:0 0 18%;
align-items:center;
border:3px solid white;
border-radius:20px; 
display:inline-block;
margin:3%;
margin-left:5%;
background-color:white;
box-sizing:border-box;
height:250px;
width:250px;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
&:hover{
    background:tomato;
    transform:scale(0.9);
}
`
export const Card=styled.div `
margin:5px;
padding:2px;
align-items:center;
font-family:sans-serif;
font-weight:700;
&:hover{
    transition:0.3s;
    transform:scale(0.8);
}
`
export const Image=styled.img `
width:130px;
height:130px;
border-radius:50%;
border:2px solid #081c15;
margin-left:20%;



`
export const EmployeeName=styled.div `
text-align:center;
margin-top:0;
width:100%;
padding:1em auto;
font-size:20px;
font-weight:bold;
color:black;
align-item:center;
`
export const Age=styled.div `
text-align:center;
width:100%;
padding-bottom:1em;
font-size:18px;
font-weight:bold;
color:black;
font-famiy:cursive;
align-item:center;

`
export const Post=styled.div `
text-align:center;
width:100%;
padding-bottom:1em;
font-size:24px;
color:black;
font-weight:bold;
align-item:center;
`

export const UserDetailPage=styled.div `
width:100%;
margin-top:1%;
font-size:65px;
text-align:center;
font-weight:700;
font-family:cursive;
@media (max-width:800px){
    font-size:40px;
}
color:red;

`