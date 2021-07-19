import styled from 'styled-components'
import LOGO from './grow.png'
const FrontPage=styled.main `
height:91vh;
width:100%
`
const LetGrow=styled.div `
display:flex;
justify-content:center;
align-item:center;
align-text:center;
font-size:90px;
font-weight:bold;
flex-direction:column;
@media (max-width:800px){
    font-size:60px;
}
color:#fff;

`
const Image=styled.img `
width:800px;
height:auto;

@media  (max-width:800px){
    width:100%;
    height:auto;

}
`


const Home =()=>{
    return(
        <>
        <FrontPage>
        <LetGrow>
            Welcome To <br></br>
            <Image src={LOGO}alt="letgrowmore"></Image>
        </LetGrow>
        </FrontPage> 
        </>
    );

}

export default Home 