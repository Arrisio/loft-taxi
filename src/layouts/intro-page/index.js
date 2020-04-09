import React, {Component} from 'react';

import './intro-page.css'

import Logo from "../common/logo";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";


export default class IntroPage extends Component {

    state = {
        currentForm: "sign-in-form"
    };

    gotoSignUp = () => {
        this.setState({currentForm: 'sign-up-form'});
    };

    gotoSignIn = () => {
        this.setState({currentForm: 'sign-in-form'})
    };

    render() {
        const {signInHandler} = this.props;
        const {currentForm} = this.state;

        return (
            <div className="intro-page">
                <div className="intro-page--content">
                    <div className="logo-wrapper">
                        <Logo/>
                    </div>
                    <div className="intro-page--form-wrapper">
                        {
                            currentForm === "sign-in-form"
                                ? <SignInForm goToSignUpHandler={this.gotoSignUp}
                                              signInHandler={signInHandler}/>
                                : <SignUpForm gotoSignInHandler={this.gotoSignIn}
                                              signInHandler={signInHandler}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
};

