import React  from "react";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import styled from "styled-components";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 3em;

`;
export function CustomerAccessPage(props)
{
    return(
        <PageContainer>
            <Navbar />
                <InnerPageContainer>
                <StyledInnerContainer>
             <AccountBox />
          </StyledInnerContainer>
                </InnerPageContainer>
              <Footer/>
        </PageContainer>


    )
}