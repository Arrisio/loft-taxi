import React , {Component} from 'react';

import './intro-page.css'

import Logo from "../common/logo";
import SignInForm from "../sign-in-form";
import SignUpForm from "../sign-up-form";


export default  class IntroPage extends Component {

    state = {
        currentForm: "sign-in-form"
    };

    gotoSignUp  = () => {
        console.log(this.state);
        this.setState(()=>{
            return {currentForm: 'sign-up-form'};
        });
    };

    render() {
        return (
            <div className="intro-page">
                <div className="intro-page--content">
                    <div className="logo-wrapper">
                        <Logo/>
                    </div>
                    <div className="intro-page--form-wrapper">
                        {this.state.currentForm === "sign-in-form" ? <SignInForm goToSignUpHandler={this.gotoSignUp} signInHandler={this.props.signInHandler}/> :  <SignUpForm signInHandler={this.props.signInHandler}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
};

