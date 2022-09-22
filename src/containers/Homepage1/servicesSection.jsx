import React from "react";
import { SectionTitle } from "../../components/sectionTitle";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import Service1Img from "../../assets/illustrations/o.gif";
import Service2Img from "../../assets/illustrations/o1.gif";
import Service3Img from "../../assets/illustrations/03.gif";
import Service5Img from "../../assets/illustrations/o4.gif";
 import { Element } from "react-scroll";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

 
`;




export function ServicesSection(props) {
    return (
      <ServicesContainer name="servicesSection">

        <SectionTitle>Best Quality Software</SectionTitle>
        <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          company needs"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Device optimized"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          company needs"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Quality is our priority"
        description="We have teams of professional developers, designers
        and managers that ensures delivering the best 
        software quality for your company"
        imgUrl={Service3Img}

        
      />
 
    
<OurSerivce
        title="Creative environment"
        description="We shape and build your imaginations into reality.Join us now on this adventure"
        imgUrl={Service5Img}
       isReversed
      />




        </ServicesContainer>
    )
}