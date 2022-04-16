import { useState, useEffect } from "react";
import MiniCoockie from "./minicoockie";
import MessageOnClick from "./MessageOnClick";

let changeStep = 1;
let cps = 0.1;

const Counter = ({step = changeStep, isFavorite = false}) => {
    const [count, setCount] = useState(0);
    const [favorite, setFavorite] = useState(isFavorite);
    const [posY, setPosY] = useState('0');
    const [posX, setPosX] = useState('0');
    const [addCoockie, setAddCoockie] = useState('');

    const uncrement = () => {
        setCount(count + step);
    }

    useEffect( () => {

        setInterval( () => {
            setCount(count => count + cps)
        }, 100)

    },[])

    const modifier = (color) => {
        if (count >= 10 && color === "white") {
        setCount(count - 10);
        changeStep += 1;
        }
        if (count >= 100 && color === "black") {
            setCount(count - 100);
            changeStep += 10;
        }
        if (count >= 1000 && color === "cyan") {
            setCount(count - 1000);
            changeStep += 100;
        }
        if (count >= 100 && color === "green") {
            setCount(count - 100);
            cps += 0.1;
        }
        if (count >= 1000 && color === "yellow") {
            setCount(count - 1000);
            cps += 1;
        }
        if (count >= 10000 && color === "red") {
            setCount(count - 10000);
            cps += 10;
        }
    }

    document.body.onmousemove = event => {
        setPosX(event.clientX + 15)
        setPosY(event.clientY - 25)
    }
    
    const handleAddCoockie = (event) => {
        event.preventDefault();
        setFavorite(!favorite);
        // setAddCoockie(<MessageOnClick posX={posX} posY={posY} numberCoockie={changeStep}/>);
    };


    return (
        <div className="allc">
        <h1>Coockie-Cliker</h1>
            <div className="coockiecounter">     
                <div className="coockiealive"> 
                    <p>🍪 : {count.toFixed(1)}</p>
                    <p>🍪🖱️ : +{step}</p>
                    <p>🍪⏲️ : +{parseInt(cps*10)}</p>
                    <button className="coockiebutton" onClick={uncrement}><img draggable="false" onClick = {handleAddCoockie} className="coockieimg" id={ favorite? "coockieimgtry" : "coockieimgtry2"} src= "./coloredcoockies/coockie.png" alt="main coockie" /></button>
                </div>
                <div className="allMiniCoockies" >
                    <MiniCoockie booster={() => modifier("white")} color = "white" valor = {1}/>
                    <MiniCoockie booster={() => modifier("black")} color = "black" valor = {10}/>
                    <MiniCoockie booster={() => modifier("cyan")} color = "cyan" valor = {100}/>
                    <MiniCoockie booster={() => modifier("green")} color = "green" valor = {1} multiple={true}/>
                    <MiniCoockie booster={() => modifier("yellow")} color = "yellow" valor = {10} multiple={true}/>
                    <MiniCoockie booster={() => modifier("red")} color = "red" valor = {100} multiple={true}/>
                    <p>{addCoockie}</p>
                </div>           
            </div>
        </div>

    );
}


export default Counter;