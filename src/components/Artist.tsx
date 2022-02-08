import React from "react";

type PropsType = {
    artist: string
    img: string
}

export const Artist = React.memo((props: PropsType) => {

    return <div >
        <img src={props.img} alt="" style={{borderRadius: '80px'}}/>
        <div style={{color: 'white', textAlign: 'center' }} >{props.artist}</div>
    </div>
})