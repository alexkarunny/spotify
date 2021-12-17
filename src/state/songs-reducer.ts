import {SET_PLAYLISTS, setPlaylistsAC} from "./playlist-reducer";
import {Dispatch} from "redux";
import {playlistAPI} from "../api/playlist-api";

const SET_SONGS = 'SET_SONGS'

export type SongType = {
    artist: string
    title: string
}

export type SongsStateType = {
    [key: string]: SongType[]
}

const initialState = {}

type AllActionsType =
    ReturnType<typeof setSongsAC> |
    ReturnType<typeof setPlaylistsAC>

export const songsReducer = (state: SongsStateType = initialState, action: AllActionsType): SongsStateType => {
    switch (action.type) {
        case SET_PLAYLISTS:
            const stateCopy = {...state}
            action.playlists.forEach(playlist => {
                stateCopy[playlist.id] = []
            })
            return stateCopy

        case SET_SONGS:
            const stateCopy1 = {...state}
            stateCopy1[action.playlistId] = action.songs
            return stateCopy1

        default:
            return state

    }
}

export const setSongsAC = (playlistId: string, songs: SongType[]) => {
    return {
        type: SET_SONGS,
        playlistId,
        songs
    } as const
}

export const fetchSongsTC = (playlistId: string) => (dispatch: Dispatch) => {
    playlistAPI.getSongs(playlistId)
        .then(res => {
            debugger
            const tracks = res.data.items.map((item: any): SongType => ({
                artist: item.track.artists[0].name,
                title: item.track.name
            }))
            dispatch(setSongsAC(playlistId, tracks))
        })
}