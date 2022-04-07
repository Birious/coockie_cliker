import { useState, useEffect } from "react";

const MessageOnClick = ({posY, posX, numberCoockie, MovingText = false}) => {

    return (
        <p className="pMessage" style={{position:"absolute", top:`${posY}px`, left:`${posX}px`}}>+ {numberCoockie}🍪</p>
    )
}

export default MessageOnClick;