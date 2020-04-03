import React from "react";

import './sign-in-form.css'

import ButtonActive from "../common/button-active";
import InputText from "../common/input-text";

const SignInForm = ({
                       navigation,
                       handlerLogin,
                       handlerSignup,
                       handlerLoginLink,
                       handlerSignupLink
                   }) => {
    return (
        <form className="sign_in_form" onSubmit={handlerLogin}>
            <h1 className="sign_in__header">Войти</h1>
            <div className="sign_in_form__text">
                        <span className="login_form__span">
                            Новый пользователь?
                        </span>
                <a href="/signup" onClick={handlerSignupLink}>
                    Зарегистрируйтесь
                </a>
            </div>
            <InputText
                inputClass="sign_in_form__user"
                type="text"
                name="username"
                placeholder="Имя пользователя*"
            />
            <InputText
                inputClass="sign_in_form__password"
                type="password"
                name="password"
                placeholder="Пароль*"
            />
            <ButtonActive
                buttonClass="sign_in_form__submit"
                text="Войти"
            />
        </form>
    )
};

export default SignInForm