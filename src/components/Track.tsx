import React from "react";

type PropsType = {
    title: string
    artist: string
    img: string
}

export const Track = React.memo((props: PropsType) => {

    return <div>
        <img src={props.img} alt=""/><span>{props.artist} - {props.title}</span>
    </div>
})