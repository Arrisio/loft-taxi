const BASE_URL = 'https://loft-taxi.glitch.me/';

export const fetchAddressList = async () => {

    return fetch(`${BASE_URL}/addressList`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
}