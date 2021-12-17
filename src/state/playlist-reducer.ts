import {playlistAPI} from "../api/playlist-api";
import {AxiosResponse} from "axios";
import {Dispatch} from "redux";

export const SET_PLAYLISTS = 'SET_PLAYLISTS'

export type PlaylistType = {
    id: string
    name: string
    description: string
}

const initialState: PlaylistType[] = []

type AllActionsType = ReturnType<typeof setPlaylistsAC>;

export const playlistReducer = (state: PlaylistType[] = initialState, action: AllActionsType): PlaylistType[] => {
    switch (action.type) {
        case SET_PLAYLISTS:
            return action.playlists.map(playlist => ({...playlist}))
        default:
            return state
    }
}

export const setPlaylistsAC = (playlists: PlaylistType[]) => {
    return {
        type: SET_PLAYLISTS,
        playlists
    } as const
}

export const fetchPlaylistTC = () => (dispatch: Dispatch) => {
    playlistAPI.getPlaylist()
        .then((res: AxiosResponse) => {
            const playlists = res.data.items.map((item: any): PlaylistType => {
                    return {id: item.id, name: item.name, description: item.description}
                }
            )
            dispatch(setPlaylistsAC(playlists))
        })
}