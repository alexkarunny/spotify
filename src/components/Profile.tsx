import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

type PlaylistType = {
    id: string
    name: string
}

type TrackType = {
    artist: string
    title: string
}

type TracksStateType = {
    [key: string] : TrackType[]
}

export function Profile() {

    const [accessToken, setAccessToken] = useState<string>()
    const [playlists, setPlaylists] = useState<PlaylistType[]>([])
    const [tracks, setTracks] = useState()

    useEffect(() => {
        const hash = window.location.hash
        const startPosition = hash.indexOf('=')
        const lastPosition = hash.indexOf('&')
        const token = hash.substring(startPosition + 1, lastPosition)

        axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res: AxiosResponse) => {
            debugger
            const playlists = res.data.items.map((item: any): PlaylistType => {
                return {id: item.id, name: item.name}
            })
            debugger
            setPlaylists(playlists)
            setAccessToken(token)
        })

    }, [])

    const getTracks = () => {
        debugger
        let tracksState: TracksStateType = {}

        playlists.map((playlist) => {
            axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            }).then(res => {
                debugger
                tracksState[playlist.id] = res.data.items.map((item: any): TrackType => {
                    return {title: item.track.name, artist: item.track.artists[0].name}
                })
                debugger
            })
        })

    }

    return (
        <div>
            <button onClick={getTracks}>Get User Info</button>
            <div>{tracks}</div>
        </div>
    )
}

