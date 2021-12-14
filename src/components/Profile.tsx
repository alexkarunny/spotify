import React, {useEffect, useState} from "react";
import axios from "axios";

export function Profile() {

    const [accessToken, setAccessToken] = useState<string | null>(null)

    useEffect(() => {
        setInterval(() => {
            const hash = window.location.hash
            const startPosition = hash.indexOf('=')
            const lastPosition = hash.indexOf('&')
            setAccessToken(hash.substring(startPosition + 1, lastPosition))
        }, 3600)
    }, [])

    const getUserInfo = () => {
        if (accessToken) {
            axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            }).then((res) => {
               debugger
            })
        }
    }

    return (
        <div>

            <button onClick={getUserInfo}>Get User Info</button>

            <div>{accessToken}</div>
        </div>
    )
}

