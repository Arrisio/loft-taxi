import React from 'react';

import './intro-page.css'
import maker from "../../assets/img/marker.svg";

import Logo from "../common/logo";
import SignInForm from "../sign-in-form";
import SignUpForm from "../sign-up-form";


const IntroPage = () => {
    return (
            <div className="intro-page">
                <div className="intro-page--content"  >
                    <div className="logo-wrapper">
                        <Logo logoClass="login_logo" txtRightClass="text_white"/>
                    </div>
                    <div className="intro-page--form-wrapper">
                        {/*<SignInForm/>*/}
                        <SignUpForm/>
                    </div>
                </div>
            </div>
        )
};

export default IntroPage