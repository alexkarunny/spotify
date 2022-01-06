import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Track} from "./Track";
import {fetchTracksTC, TrackStateType} from "../state/tracks-reducer";
import {AppRootStateType} from "../state/store";
import {fetchPlaylistTC} from "../state/playlist-reducer";
import {fetchArtistsTC} from "../state/artists-reducer";


export const Tracks = () => {
    const tracks = useSelector<AppRootStateType, TrackStateType>(state => state.tracks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTracksTC())
    }, [])
    return (
        <div>
            Tracks
            {
                tracks.map(track => {
                    return <Track key={track.artist + track.img} artist={track.artist} title={track.title}
                                  img={track.img}/>
                })
            }

        </div>
    )
}