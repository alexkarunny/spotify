import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchArtistsTC} from "../state/artists-reducer";
import {Artist} from "./Artist";
import {Track} from "./Track";
import {fetchTracksTC, TrackStateType} from "../state/tracks-reducer";
import {AppRootStateType} from "../state/store";

type PropsType = {
    tracks: TrackStateType
}

export const Tracks = (props: PropsType) => {
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