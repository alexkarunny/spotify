import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./components/Login";
import {Profile} from "./components/Profile/Profile";
import {Artists} from "./components/Artists";
import {Tracks} from "./components/Tracks";
import {Playlists} from "./components/Playlists";

function App() {

    return <div>
        <Routes>
                <Route index element={<Login/>}/>
                <Route path='profile/*' element={<Profile/>}>

                    <Route path='artists' element={<Artists />}/>
                    <Route path='tracks' element={<Tracks />}/>
                    <Route path='playlists' element={<Playlists />} />
                </Route>
        </Routes>
    </div>
}

export default App;
