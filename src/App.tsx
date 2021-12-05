import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [token, setToken] = useState<string>('')
  const [tracks, setTracks] = useState<any>(null)


  let client_id = 'ab2bac6379c642dd933490326c872920';
  let client_secret = '46683288a1dc4033b021f51e1c2336b6';
  let redirect_uri = 'http://localhost:3000/'

  const login = () => {
  debugger
    let scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    // url += '?response_type=token';
    // url += '&client_id=' + encodeURIComponent(client_id);
    // url += '&scope=' + encodeURIComponent(scope);
    // url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    window.open(url, '_self')

  }

  useEffect(() => {
    let querystring = require('querystring');
    axios.post('https://accounts.spotify.com/api/token', querystring.stringify({'grant_type':'client_credentials'}), {
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((res) => {
      setToken(res.data.access_token)
      setTracks(null)
    })

  }, [])

  const getTracks = () => {
    if (token) {
      axios.get('https://api.spotify.com/v1/playlists/5Ns7vet4SNjL4qK6umnSay/tracks', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then((res) => {
        setTracks(res.data.items)
      })
    }
  }

  return <div>
    <button onClick={login}>Login</button>
    <button onClick={getTracks}>Get tracks</button>
    {
      tracks && tracks.map((item: any) => <div>Испольнитель: {item.track.artists[0].name} Название песни: {item.track.name}</div>)
    }
  </div>
}

export default App;
