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
                <ul className={classes.list}>
                    <li className={classes.item}><NavLink to='playlists'
                             className={({isActive}) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}`}>Playlists</NavLink></li>
                    <li className={classes.item}><NavLink to='artists'
                             className={({isActive}) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}`}>Artists</NavLink></li>
                   <li className={classes.item}> <NavLink to='tracks'
                             className={({isActive}) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}`}>Tracks</NavLink></li>
                </ul>
            </header>
            <Container>
                Profile
                <Outlet/>
            </Container>


        </div>
    )
}

