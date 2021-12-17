import {applyMiddleware, combineReducers, createStore} from "redux";
import {playlistReducer} from "./playlist-reducer";
import thunk from "redux-thunk";
import {songsReducer} from "./songs-reducer";

const rootReducer = combineReducers({
    playlists: playlistReducer,
    songs: songsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;