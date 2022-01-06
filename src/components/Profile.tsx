import React, {useEffect} from "react";
import {Playlist} from "./Playlist";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {fetchPlaylistTC, PlaylistType} from "../state/playlist-reducer";
import {SongsStateType} from "../state/songs-reducer";
import {Artist} from "./Artist";
import {ArtistStateType, fetchArtistsTC} from "../state/artists-reducer";
import {fetchTracksTC, TrackStateType} from "../state/tracks-reducer";
import {Track} from "./Track";
import {Button, ButtonGroup, Grid, Paper} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Layout";
import {Playlists} from "./Playlists";
import {Artists} from "./Artists";
import {Tracks} from "./Tracks";

export function Profile() {

    const playlists = useSelector<AppRootStateType, PlaylistType[]>(state => state.playlists)
    const songs = useSelector<AppRootStateType, SongsStateType>(state => state.songs)
    const artists = useSelector<AppRootStateType, ArtistStateType>(state => state.artists)
    const tracks = useSelector<AppRootStateType, TrackStateType>(state => state.tracks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlaylistTC())
        dispatch(fetchArtistsTC())
    }, [])

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    {/*<Route index element={<Playlists playlists={playlists} songs={songs} />} />*/}
                    <Route path='artists' element={<Artists artists={artists}/>}/>
                    <Route path='tracks' element={<Tracks tracks={tracks}/>}/>
                </Route>
            </Routes>
        </div>
    )
}

