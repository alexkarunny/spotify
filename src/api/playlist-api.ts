import axios from "axios";

debugger


const hash = window.location.hash
const startPosition = hash.indexOf('=')
const lastPosition = hash.indexOf('&')
const token = hash.substring(startPosition + 1, lastPosition)
if (token) {
    sessionStorage.setItem('token', token)
}

const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
})

export const playlistAPI = {
    getPlaylist() {
        return instance.get('me/playlists')
    },
    getSongs(playlistId: string) {
        return instance.get(`playlists/${playlistId}/tracks`)
    },
    getFavouriteArtists() {
        return instance.get(`me/following?type=artist`)
    },
    getFavouriteTracks() {
        return instance.get(`me/tracks`)
    }
}