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

export function Profile() {

    const playlists = useSelector<AppRootStateType, PlaylistType[]>(state => state.playlists)
    const songs = useSelector<AppRootStateType, SongsStateType>(state => state.songs)
    const artists = useSelector<AppRootStateType, ArtistStateType>(state => state.artists)
    const tracks = useSelector<AppRootStateType, TrackStateType>(state => state.tracks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlaylistTC())
    }, [])

    const getArtists = () => {
        dispatch(fetchArtistsTC())
    }

    const getSongs = () => {
        dispatch(fetchTracksTC())
    }

    return (
        <div>
            <ButtonGroup variant={"contained"}>
                <Button onClick={getArtists}>Get Artists</Button>
                <Button onClick={getSongs}>Get Track</Button>
            </ButtonGroup>
            <Grid container spacing={5}>
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

            <Grid container spacing={5}>
                <Grid item >
                    <Paper elevation={1} style={{padding: '10px'}}>
                        {(artists.length > 0) && <h1>Followed Artists</h1>}
                        {
                            artists.map(artist => {
                                return <Artist key={artist.name + artist.img} artist={artist.name} img={artist.img}/>
                            })
                        }
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={1} style={{padding: '10px'}}>
                        {(tracks.length > 0) && <h1>Favourite Tracks</h1>}
                        {
                            tracks.map(track => {
                                return <Track key={track.artist + track.img} artist={track.artist} title={track.title}
                                              img={track.img}/>
                            })
                        }
                    </Paper>
                </Grid>
            </Grid>


        </div>
    )
}

