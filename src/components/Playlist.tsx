import React, {useEffect} from "react";
import {fetchSongsTC, SongType} from "../state/songs-reducer";
import {Song} from "./Song";
import {useDispatch} from "react-redux";

type PlaylistProps = {
    title: string
    id: string
    description: string
    songs: SongType[]
}

export const Playlist = React.memo((props: PlaylistProps) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSongsTC(props.id))
    }, [])

    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            {
                props.songs.map(song => {
                    return <Song key={song.title + song.artist} title={song.title} artist={song.artist} img={song.img}/>
                })
            }
        </div>
    )
})