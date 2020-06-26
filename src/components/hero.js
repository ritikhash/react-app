import React from 'react'

export default function Hero(props) {
    return (
        <div className={props.hero}>
            {props.children}
        </div>
    )
}
Hero.defaultProps={
    hero: "defaultRooms"
}

