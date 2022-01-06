import {Grid, Paper} from "@mui/material";
import {Playlist} from "./Playlist";
import React, {useEffect} from "react";
import {fetchPlaylistTC, PlaylistType} from "../state/playlist-reducer";
import {SongsStateType} from "../state/songs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {fetchArtistsTC} from "../state/artists-reducer";
import {fetchTracksTC} from "../state/tracks-reducer";


export const Playlists = () => {
    const playlists = useSelector<AppRootStateType, PlaylistType[]>(state => state.playlists)
    const songs = useSelector<AppRootStateType, SongsStateType>(state => state.songs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPlaylistTC())
    }, [])

    return (
        <div>
            <Grid container spacing={5} style={{marginTop: '10px'}}>
                {
                    playlists.map(playlist => {

                        const allSongsForPlaylist = songs[playlist.id]

                        return <Grid item key={playlist.id + playlist.name}>
                            <Paper elevation={1} style={{padding: '10px'}}>
                                <Playlist
                                    id={playlist.id}
                                    title={playlist.name}
                                    description={playlist.description}
                                    songs={allSongsForPlaylist}
                                />
                            </Paper>
                        </Grid>

                    })
                }
            </Grid>
        </div>
    )
}