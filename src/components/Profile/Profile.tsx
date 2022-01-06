import React, {useEffect} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import classes from './Profile.module.css'
import {useDispatch} from "react-redux";
import {fetchPlaylistTC} from "../../state/playlist-reducer";

export function Profile() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPlaylistTC())
    }, [])
    return (
        <div>
            <header className={classes.menu}>
                <NavLink to='playlists' className={({isActive}) => isActive ? `${classes.active}` : `${classes.link}`} >Playlists</NavLink>
                <NavLink to='artists' className={({isActive}) => isActive ? `${classes.active}` : `${classes.link}`}>Artists</NavLink>
                <NavLink to='tracks' className={({isActive}) => isActive ? `${classes.active}` : `${classes.link}`}>Tracks</NavLink>
            </header>
            <Container>
                Profile
                <Outlet/>
            </Container>



        </div>
    )
}

