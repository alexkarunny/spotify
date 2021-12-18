import React from "react";

type PropsType = {
    title: string
    artist: string
    img: string
}

export const Song = React.memo((props: PropsType) => {
    return <div>
        <img src={props.img} alt='img' /><span>{`${props.artist} - ${props.title}`}</span>
    </div>
})