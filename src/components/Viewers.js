import React from 'react';
import styled from "styled-components";

const Viewers = () => {
    return (
        <Container>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </Container>
    );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  
  @media(max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
