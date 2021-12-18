import React from "react";

type PropsType = {
    artist: string
    img: string
}

export const Artist = React.memo((props: PropsType) => {

    return <div>
        <img src={props.img} alt=""/><span>{props.artist}</span>
    </div>
})