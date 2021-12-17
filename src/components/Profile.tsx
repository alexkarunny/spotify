import React, {useEffect} from "react";
import {Playlist} from "./Playlist";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {fetchPlaylistTC, PlaylistType} from "../state/playlist-reducer";
import {SongsStateType} from "../state/songs-reducer";

export function Profile() {

    const playlists = useSelector<AppRootStateType, PlaylistType[]>(state => state.playlists)
    const songs = useSelector<AppRootStateType, SongsStateType>(state => state.songs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlaylistTC())
    }, [])

    return (
        <div>
            {
                playlists.map(playlist => {

                    const allSongsForPlaylist = songs[playlist.id]

                    return <Playlist key={playlist.id + playlist.name}
                                     id={playlist.id}
                                     title={playlist.name}
                                     description={playlist.description}
                                     songs={allSongsForPlaylist}
                    />
                })
            }
        </div>
    )
}

