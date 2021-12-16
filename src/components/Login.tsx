import React from "react";


export function Login() {

    let client_id = 'ab2bac6379c642dd933490326c872920';
    let redirect_uri = 'http://localhost:3000/profile'

    const login = () => {
        let scope = 'user-read-private user-read-email ';

        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        window.open(url, '_self')

    }

    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}