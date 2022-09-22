import React from  "react"
import { Element } from "react-scroll"
import styled from "styled-components"
import { SectionTitle } from "../../components/sectionTitle";
import AboutImgUrl from "../../assets/illustrations/log1.gif"
import { Marginer } from "../../components/marginer";

const MoreAboutContainer = styled(Element)`
min-height: 500px;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 1em;
background-color:turquoise;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }

  background-color:turquoise;
`;


const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;


export function LandingPage(props){
   return <Element name="moreAboutSection">
   <MoreAboutContainer>
    <SectionTitle>Please login to your Beema Account </SectionTitle>
    <Marginer direction="vertical" margin="2em" />
       <AboutContainer>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
     </MoreAboutContainer>
 </Element>

}