const BASE_URL = 'https://loft-taxi.glitch.me/';

export const fetchRout = async ({address1, address2}) => {

    return fetch(`${BASE_URL}/route?address1=${address1}&address2=${address2}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
}