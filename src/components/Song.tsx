import React from "react";

type PropsType = {
    title: string
    artist: string
}

export const Song = React.memo((props: PropsType) => {
    return <div>
        {`${props.artist} - ${props.title}`}
    </div>
})