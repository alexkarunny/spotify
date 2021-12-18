import {Dispatch} from "redux";
import {playlistAPI} from "../api/playlist-api";

const SET_TRACKS = 'SET_TRACKS'

type TrackType = {
    title: string
    artist: string
    img: string
}

export type TrackStateType = TrackType[]

const initialState: TrackStateType = []

type AllActionType = ReturnType<typeof setTracksAC>

export const tracksReducer = (state: TrackStateType = initialState, action: AllActionType) => {
    switch (action.type) {
        case SET_TRACKS:
            return action.tracks.map(track => track)
        default:
            return state
    }
}

export const setTracksAC = (tracks: TrackType[]) => {
    return {
        type: SET_TRACKS,
        tracks
    }
}

export const fetchTracksTC = () => (dispatch: Dispatch) => {
    playlistAPI.getFavouriteTracks()
        .then((res) => {
            const tracks = res.data.items.map((track: any): TrackType => ({
                title: track.track.name,
                artist: track.track.artists[0].name,
                img: track.track.album.images[2].url
            }))
            dispatch(setTracksAC(tracks))
        })
}