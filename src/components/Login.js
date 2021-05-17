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
  flex-direction: column;
  text-align: center;
  height: 100vh;
  
`

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`
