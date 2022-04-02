import { useState, useEffect } from "react";
// import coockie from "./coockie.png";
import MiniCoockie from "./minicoockie";

let changeStep = 1;
let cps = 1;

const Counter = ({step = changeStep}) => {
    const [count, setCount] = useState(0);

    const uncrement = () => {
        setCount(count + step);
    }

    useEffect( () => {

        setInterval( () => {
            setCount(count => count + cps)
        }, 1000)

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
            cps += 1;
        }
        if (count >= 1000 && color === "yellow") {
            setCount(count - 1000);
            cps += 10;
        }
        if (count >= 10000 && color === "red") {
            setCount(count - 10000);
            cps += 100;
        }
    }

    return (
        <div className="coockiecounter">
            <p>🍪 : {count}</p>
            <p>🍪🖱️ : +{step}</p>
            <p>🍪⏲️ : +{cps}</p>
            <button className="coockiebutton" onClick={uncrement}><img className="coockieimg" src= "./coloredcoockies/coockie.png" /></button>
            <div className="allMiniCoockies">
                <MiniCoockie booster={() => modifier("white")} color = "white" valor = {1}/>
                <MiniCoockie booster={() => modifier("black")} color = "black" valor = {10}/>
                <MiniCoockie booster={() => modifier("cyan")} color = "cyan" valor = {100}/>
                <MiniCoockie booster={() => modifier("green")} color = "green" valor = {1} multiple={true}/>
                <MiniCoockie booster={() => modifier("yellow")} color = "yellow" valor = {10} multiple={true}/>
                <MiniCoockie booster={() => modifier("red")} color = "red" valor = {100} multiple={true}/>
            </div>
            
            
        </div>

    );
}


export default Counter;