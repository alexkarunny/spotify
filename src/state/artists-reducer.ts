import {playlistAPI} from "../api/playlist-api";
import {Dispatch} from "redux";


export const SET_ARTISTS = 'SET_ARTISTS'

export type ArtistType = {
    name: string
    img: string
}

export type ArtistStateType = ArtistType[]

const initialState: ArtistStateType = []

type AllActionTypes = ReturnType<typeof setArtistsAC>

export const artistsReducer = (state: ArtistStateType = initialState, action: AllActionTypes): ArtistStateType => {
    switch (action.type) {
        case SET_ARTISTS:
            return action.artists.map(artist => artist)
        default:
            return state
    }
}

export const setArtistsAC = (artists: ArtistStateType) => {
    return {
        type: SET_ARTISTS,
        artists
    }
}

export const fetchArtistsTC = () => (dispatch: Dispatch) => {
    playlistAPI.getFavouriteArtists()
        .then((res) => {
            debugger
            const artists = res.data.artists.items.map((artist: any) => {
                return {name: artist.name, img: artist.images[2].url}
            })
            dispatch(setArtistsAC(artists))
        })
}