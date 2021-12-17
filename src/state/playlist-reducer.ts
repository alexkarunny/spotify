import {playlistAPI} from "../api/playlist-api";
import {AxiosResponse} from "axios";


export type PlaylistType = {
    id: string
    name: string
}

const initialState: PlaylistType[] = []

type AllActionsType = ReturnType<typeof setPlaylistsAC>;

export const playlistReducer = (state: PlaylistType[] = initialState, action: AllActionsType): PlaylistType[] => {
    switch (action.type) {
        case "SET-PLAYLIST":
            return state
    }
}

export const setPlaylistsAC = (playlists: PlaylistType[]) => {
    return {
        type: 'SET-PLAYLIST',
        playlists
    } as const
}

export const fetchPlaylistTC = () => (dispatch: any) => {
    playlistAPI.getPlaylist()
        .then((res: AxiosResponse) => {
            const playlists = res.data.items.map((item: any): PlaylistType => {
                return {id: item.id, name: item.name}
            }
        )
            dispatch(setPlaylistsAC(playlists))
        })
}