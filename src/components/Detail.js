import React from 'react';
import styled from "styled-components";

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8184e5a2-328b-4e78-a8e1-80f675b4d7ad/dd70dxd-d8ed5315-1f25-48ba-b8c9-948d7c86c1e5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxODRlNWEyLTMyOGItNGU3OC1hOGUxLTgwZjY3NWI0ZDdhZFwvZGQ3MGR4ZC1kOGVkNTMxNS0xZjI1LTQ4YmEtYjhjOS05NDhkN2M4NmMxZTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r6QmlUdIzCKRsu4KpQfqG03rZA_2ulL3ok5zIgsoNNE" alt=""/>
            </Background>

            <ImageTitle>
                <img src="https://www.pikpng.com/pngl/m/482-4820066_disney-plus-logo-png-clipart.png" alt=""/>
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>

                    <AddList>
                        <span />
                        <span />
                    </AddList>

                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </GroupWatch>

                </Controls>
            </ContentMeta>
        </Container>
    );
};

export default Detail;


const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
    left: 0px;
  opacity: .8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  
  img {
    width: 100vw;
    height: 100vh;
    //object-fit: contain;
    
    @media(max-width: 768px) {
      width: initial;
      
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
  
`

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  
  img {
    width: 32px;
  }
  
  &:hover {
    background: rgb(198, 198, 198);
    transition: 0.1s;
  }
  
  @media(max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    
    img {
      width: 25px;
    }
  }
`

// (Player) means we inherit from that
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    
    &:first-child {
      height: 2px;
      transform: translate(1px 0px) rotate(0deg);
      width: 16px;
    }
    
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    
    img {
      width: 100%;
    }
  }
`
