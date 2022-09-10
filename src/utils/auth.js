export const BASE_URL = 'https://backend.nomorepartiesxyz.ru';

export const register = (email, password) => {
    return fetch (`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then ((response) => {
            if (response.status === 201) {
                return response.json ();
            }
    })
}

export const authorize = (email, password) => {
    return fetch (`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then ((response) => {
        if (response.status === 200) {
            return response.json ();
        }
    })
	
}

export const getContent = (token) => {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
			   'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then ((response) => {
        if (response.status === 200) {
            return response.json ();
        }
    })
}

