import {Artist} from "./Artist";
import React, {useEffect} from "react";
import {ArtistStateType, fetchArtistsTC} from "../state/artists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {fetchPlaylistTC} from "../state/playlist-reducer";
import {fetchTracksTC} from "../state/tracks-reducer";
import {Grid, Paper} from "@mui/material";

type PropsType = {
    artists: ArtistStateType
}

export const Artists = () => {
    const artists = useSelector<AppRootStateType, ArtistStateType>(state => state.artists)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchArtistsTC())
    }, [])
    return (
        <Grid container justifyContent={'flex-start'} spacing={3} style={{marginTop: '10px'}} >
            {
                artists.map(artist => {
                    return <Grid item>
                        <Paper style={{padding: '20px', backgroundColor: '#0B5E55'}}>
                            <Artist key={artist.name + artist.img} artist={artist.name} img={artist.img}/>
                        </Paper>
                    </Grid>
                })
            }

        </Grid>
    )
}