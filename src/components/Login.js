import React from 'react';
import styled from "styled-components";

const MyComponent = () => {
    return (
        <Container>
            <Content>
                Content
            </Content>
        </Container>
    );
};

export default MyComponent;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  
`

const Content = styled.div`
  
`
