import {Artist} from "./Artist";
import React, {useEffect} from "react";
import {ArtistStateType, fetchArtistsTC} from "../state/artists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {fetchPlaylistTC} from "../state/playlist-reducer";
import {fetchTracksTC} from "../state/tracks-reducer";

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
        <div>
            Artists
            {
                artists.map(artist => {
                    return <Artist key={artist.name + artist.img} artist={artist.name} img={artist.img}/>
                })
            }

        </div>
    )
}