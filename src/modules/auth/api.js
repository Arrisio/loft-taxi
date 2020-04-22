const BASE_URL = 'https://loft-taxi.glitch.me/';

export let signIn = payload => {
    // {email: "email@example.com", password: "password"}
    let response = '{"success":true,"token":"TOKEN123"}'
    return JSON.parse(response); // {success: false, error: Сообщение об ошибке}

    return fetch(`${BASE_URL}/auth`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
}

export const signUp = payload => {
    // {email: "email@example.com", password: "password", name: "Name", surname: "Surname"}
    // return {success: 'true', token: 'AUTH_TOKEN123'};
    console.log('sinup')
    console.log(payload)
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
}

