import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./components/Login";
import {Profile} from "./components/Profile";

function App() {



    return <div>
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    </div>
}

export default App;
