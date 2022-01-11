import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Track} from "./Track";
import {fetchTracksTC, TrackStateType} from "../state/tracks-reducer";
import {AppRootStateType} from "../state/store";
import {fetchPlaylistTC} from "../state/playlist-reducer";
import {fetchArtistsTC} from "../state/artists-reducer";
import {Song} from "./Song/Song";


export const Tracks = () => {
    const tracks = useSelector<AppRootStateType, TrackStateType>(state => state.tracks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTracksTC())
    }, [])
    return (
        <div>
            {
                tracks.map(track => {
                    return <Song key={track.artist + track.img} artist={track.artist} title={track.title}
                                  img={track.img}/>
                })
            }

        </div>
    )
}