import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Track} from "./Track";
import {fetchTracksTC, TrackStateType} from "../state/tracks-reducer";
import {AppRootStateType} from "../state/store";
import {fetchPlaylistTC} from "../state/playlist-reducer";
import {fetchArtistsTC} from "../state/artists-reducer";
import {Song} from "./Song/Song";
import {Grid, Typography} from "@mui/material";


export const Tracks = () => {
    const tracks = useSelector<AppRootStateType, TrackStateType>(state => state.tracks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTracksTC())
    }, [])

    return (
        <Grid container justifyContent={'flex-start'} >
            {
                tracks.map(track => {
                    return <Grid item md={2}><Typography noWrap><Song key={track.artist + track.img} artist={track.artist} title={track.title}
                                    img={track.img}/></Typography></Grid>
                })
            }

        </Grid>
    )
}