import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {Playlist} from "./Playlist";


type TrackType = {
    artist: string
    title: string
}

type TracksStateType = {
    [key: string]: TrackType[]
}

export function Profile() {

const getTracks = () => {

    playlists.map((playlist) => {
        axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then((res: AxiosResponse) => {
            let tracksState: TracksStateType = {...tracks}
            tracksState[playlist.id] = res.data.items.map((item: any): TrackType => {
                return {title: item.track.name, artist: item.track.artists[0].name}
            })
            return tracksState
        }).then(res => {
            setTracks(res)
            debugger
        }).then(res => {
            debugger
        })
    })
}

return (
    <div>
        <button onClick={getTracks}>Get User Info</button>
        <Playlist/>
    </div>
)
}

