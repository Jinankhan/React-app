import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";

import { ReviewsSection } from "./reviewsSection";
import { MoreAboutSection1 } from "./moreAboutSection1";




import { ServicesSection } from "./servicesSection";
import {TopSection} from "./topsection"
 const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;


export function Homepage1(props) {

    return (
        <PageContainer>
        <TopSection/>
        <ServicesSection/>
        <Marginer direction="vertical" margin="2em" />
        <ReviewsSection/>
        <MoreAboutSection1/>
        <Footer/>
        </PageContainer>
    );
}
 