const BASE_URL = 'https://loft-taxi.glitch.me/';

export const signIn =  async (payload) => {
    // {email: "email@example.com", password: "password"}
    // let response = '{"success":true,"token":"TOKEN123"}'
    //return JSON.parse(response); // {success: false, error: Сообщение об ошибке}
    return fetch(`${BASE_URL}/auth`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
}

export const signUp = async (payload) => {
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

export const saveCard =  async (payload) => {
    // let response = '{"success":true}'
    // return JSON.parse(response); // {success: false, error: Сообщение об ошибке}
    return fetch(`${BASE_URL}/card`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
}

export const fetchCard = async ({token}) => {
    let response = '{"id":"rec4NwqbXyWY2Ju7E","cardNumber":"2000 0000 0000 0000","expiryDate":"01/22","cardName":"TEST","cvc":"910"}'
    return JSON.parse(response); //возвращаю заглушку, т.к. api сломался


    return fetch(`${BASE_URL}/card?token=${token}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
}
