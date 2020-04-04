import React from "react";

import './sign-up-form.css'

import ButtonActive from "../common/button-active";
import InputText from "../common/input-text";

const SignupForm = ({ signInHandler}) => {
    return (
                <form className="sign_up_form" onSubmit={signInHandler}>
                    <h1 className="sign_up_form__header">Регистрация</h1>
                    <div className="sign_up_form__text">
                        <span className="sign_up_form__span">
                            Уже зарегистрирован?
                        </span>
                        <a href="#" onClick={signInHandler}>
                            Войти
                        </a>
                    </div>
                    <InputText
                        inputClass="sign_up_form__email"
                        type="email"
                        name="email"
                        placeholder="Адрес электронной почты*"
                    />
                    <div className="sign_up_form__fullname">
                        <InputText
                            inputClass="sign_up_form__firstname"
                            type="text"
                            name="firstname"
                            placeholder="Имя*"
                        />
                        <InputText
                            inputClass="sign_up_form__lastname"
                            type="text"
                            name="lastname"
                            placeholder="Фамилия*"
                        />
                    </div>
                    <InputText
                        inputClass="sign_up_form__password"
                        type="password"
                        name="password"
                        placeholder="Пароль*"
                    />
                    <ButtonActive
                        buttonClass="sign_up_form__submit"
                        text="Войти"
                    />
                </form>
    );
};

export default SignupForm;
