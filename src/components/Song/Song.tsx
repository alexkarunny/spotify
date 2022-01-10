import React from "react";
import classes from './Song.module.css'

type PropsType = {
    title: string
    artist: string
    img: string
}

export const Song = React.memo((props: PropsType) => {
    return <div className={classes.container}>
        <img src={props.img} alt='img' className={classes.image}/>
        <div className={classes.artist}>{props.artist}</div>
        <div className={classes.title}>{props.title}</div>
    </div>
})