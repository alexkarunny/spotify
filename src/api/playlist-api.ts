import axios from "axios";

export const playlistAPI = {
    getPlaylist() {
        const hash = window.location.hash
        const startPosition = hash.indexOf('=')
        const lastPosition = hash.indexOf('&')
        const token = hash.substring(startPosition + 1, lastPosition)

        return axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

    },
    getSongs(playlistId: string) {
        const hash = window.location.hash
        const startPosition = hash.indexOf('=')
        const lastPosition = hash.indexOf('&')
        const token = hash.substring(startPosition + 1, lastPosition)

        return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}