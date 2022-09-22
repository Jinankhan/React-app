import React from "react";
import { SectionTitle } from "../../components/sectionTitle";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import Service1Img from "../../assets/illustrations/covid.gif";

 import { Element } from "react-scroll";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  
`;




export function Covid(props) {
    return (
     <ServicesContainer>
      <OurSerivce
        title="Covid safety"
        description="In these times of crisis,we all need to do our part.Maintain social distancing,stay home and stay safe.We are all in this together so lets help each other and win this battle against covid"
        imgUrl={Service1Img}
      />

    </ServicesContainer>
    )
}