import {Grid, Paper} from "@mui/material";
import {Playlist} from "./Playlist";
import React from "react";
import {PlaylistType} from "../state/playlist-reducer";
import {SongsStateType} from "../state/songs-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


export const Playlists = () => {
    const playlists = useSelector<AppRootStateType, PlaylistType[]>(state => state.playlists)
    const songs = useSelector<AppRootStateType, SongsStateType>(state => state.songs)

    return (
        <div>
            <Grid container justifyContent={'center'} spacing={3} style={{marginTop: '10px'}}  >
                {
                    playlists.map(playlist => {

                        const allSongsForPlaylist = songs[playlist.id]

                        return <Grid item key={playlist.id + playlist.name} md={4}>
                            <Paper elevation={1} style={{padding: '20px', backgroundColor: '#0B5E55'}}>
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