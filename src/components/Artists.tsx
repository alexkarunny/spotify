import {Artist} from "./Artist";
import React, {useEffect} from "react";
import {ArtistStateType, fetchArtistsTC} from "../state/artists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

type PropsType = {
    artists: ArtistStateType
}

export const Artists = (props: PropsType) => {
    const artists = useSelector<AppRootStateType, ArtistStateType>(state => state.artists)

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