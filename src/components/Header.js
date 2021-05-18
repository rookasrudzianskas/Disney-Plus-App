import React, {useEffect} from 'react';
import styled from "styled-components";
// importing dispatch, and select from the redux
import { useDispatch, useSelector } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {auth, provider} from "../firebase";
// importing the selectors to select the needed things, etc photo, username and email
import {
    selectUserName,
    selectUserEmail,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice";

// in the data layer, we are just storing the user data, and then making able to access it anywhere we want
const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // we are just selecting the needed things to store in the user data layer
    const username  = useSelector(selectUserName); // with select data
    const userPhoto  = useSelector(selectUserPhoto);
    const userEmail  = useSelector(selectUserEmail);

    useEffect(() => {
    //    code will run once

        auth.onAuthStateChanged((user) => {
            // listens then the auth stage changes, it checks if there is a user, if yes, so it redirects to the home and stores the user
            // object in setUser
            if(user) {
                setUser(user);
                history.push('/home');
            }
        })
    }, []);

    const handleAuth = () => {
        if(!username){
        auth.signInWithPopup(provider).then((result) => {
            // this is allowing me to set the user, and then use the selectors I have created to make the selects of particular things
            // because this one, was just overall selection, it selected the full user object
            setUser(result.user)
        }).catch((error) => {
            alert("There was en error ", error);
        });
        } else if(username) {
            auth.signOut().then(() => {
                // it dispatches an action to the reducer, to make the user as null again
                dispatch(setSignOutState());
                history.push('/')
            }).catch((error) => {
                alert("There was an error", error);
            })

        }
    };

    const setUser = (user) => {
        // this function just runs the dispatch, which goes and shoots all the data to the data layer,
        dispatch(
            setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
            })
        );
    };
    return (
        <Nav>
            <Link to="/home">
            <Logo>
                <img src="/images/logo.svg" alt=""/>
            </Logo>
            </Link>
            {/* we have all this stuff fro the selectors above*/}
            {!username ?
                <Login onClick={handleAuth}>LOGIN</Login>
                :
                <>
                    <NavMenu>
                        <a href="/home">
                            <img src="/images/home-icon.svg" alt=""/>

                            <span>HOME</span>
                        </a>

                        <a>
                            <img src="/images/search-icon.svg"/>
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg"/>
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg"/>
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg"/>
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg"/>
                            <span>SERIES</span>
                        </a>

                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>

                </>
            }
        </Nav>
    );
};


export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

const Logo = styled.div`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all .2s ease-out 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`
const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  object-fit: contain;
  height: 100%;
`
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  white-space: nowrap;

`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  object-fit: contain;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  // image from the data layer
  ${UserImg} {
    border-radius: 50%;
  }
  
  &:hover {
    ${DropDown} {
      margin-top: 10px;
      opacity: 1;
      transition-duration: 1s;
      
    }
  }
`


