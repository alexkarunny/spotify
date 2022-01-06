import {Grid, Paper} from "@mui/material";
import {Playlist} from "./Playlist";
import React, {useEffect} from "react";
import {fetchPlaylistTC, PlaylistType} from "../state/playlist-reducer";
import {SongsStateType} from "../state/songs-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
    playlists: PlaylistType[]
    songs: SongsStateType
}

export const Playlists = (props: PropsType) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlaylistTC())
    }, [])

    return (
        <div>
            <Grid container spacing={5}>
                {
                    props.playlists.map(playlist => {

                        const allSongsForPlaylist = props.songs[playlist.id]

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