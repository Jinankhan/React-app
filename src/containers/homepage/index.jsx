import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Covid } from "./Covid";
import { LandingPage } from "./LandingPage";
import { TopSection } from "./topSection";
 const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;


export function Homepage(props) {

    return (
        <PageContainer>
        <TopSection />
        <Covid/>
        <LandingPage/>
        <Marginer direction="vertical" margin="8em" />
        <Footer/>
        </PageContainer>
    );
}

