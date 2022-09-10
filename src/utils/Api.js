class Api {
    constructor (options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
	 
     
    handleResponse (res)  {
        if (res.ok) {
            return res.json();
          }
        return Promise.reject(res.status);
    }



    getProfileInfo () {
        return fetch (`${this._baseUrl}/users/me`, { 
            headers: this._headers})
        .then((res)=>
            this.handleResponse (res)
        );
    }

    getCards () {
        return fetch (`${this._baseUrl}/cards`, { 
            headers: this._headers})
        .then((res)=>
            this.handleResponse (res)
        );
    }
    
    updateUserInfo (data) {
        return fetch (`${this._baseUrl}/users/me`, { 
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then((res)=>
            this.handleResponse (res)
         );
    }

    createNewCard (data) {
        return fetch (`${this._baseUrl}/cards`, { 
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then((res)=>
            this.handleResponse (res)
        );
    }

    deleteCard (data, id) {
        const cardId = id;
        return fetch (`${this._baseUrl}/cards/${cardId}`, { 
            method: 'DELETE',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then((res)=>
            this.handleResponse (res)
        );
    }

    updateUserAvatar (data) {
        return fetch (`${this._baseUrl}/users/me/avatar`, { 
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then((res)=>
            this.handleResponse (res)
        );
    }

    likeCard (id) {
        const cardId = id;
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, { 
            method: 'PUT',
            headers: this._headers})
        .then((res)=>
            this.handleResponse (res)
        );
    }

    disLikeCard (id) {
        const cardId = id;
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, { 
            method: 'DELETE',
            headers: this._headers})
        .then((res)=>
            this.handleResponse (res)
        );
    }

	 setHeaders (token) {
		this._headers ={
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	 }


  }


const api = new Api ({
    baseUrl: 'https://backend.nomorepartiesxyz.ru',
    headers : {
		'Accept': 'application/json',
        'Content-Type': 'application/json',
		   'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
});

export default api;
