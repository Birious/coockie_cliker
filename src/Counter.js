import { useState } from "react";
// import coockie from "./coockie.png";
import MiniCoockie from "./minicoockie";

let changeStep = 1;

const Counter = ({step = changeStep}) => {
    const [count, setCount] = useState(0);
    const uncrement = () => {
        setCount(count + step);
    }
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
        if (count >= 10000 && color === "green") {
            setCount(count - 10000);
            changeStep += 1000;
        }
        if (count >= 100000 && color === "yellow") {
            setCount(count - 100000);
            changeStep += 10000;
        }
        if (count >= 1000000 && color === "red") {
            setCount(count - 1000000);
            changeStep += 100000;
        }
    }
    return (
        <div className="coockiecounter">
            <p>Coockie : {count}</p>
            <p>Coockie per click : +{step}</p>
            <button className="coockiebutton" onClick={uncrement}><img className="coockieimg" src= "./coloredcoockies/coockie.png" /></button>
            <div className="allMiniCoockies">
                <MiniCoockie booster={() => modifier("white")} color = "white" valor = "+1"/>
                <MiniCoockie booster={() => modifier("black")} color = "black" valor = "+10"/>
                <MiniCoockie booster={() => modifier("cyan")} color = "cyan" valor = "+100"/>
                <MiniCoockie booster={() => modifier("green")} color = "green" valor = "+1000"/>
                <MiniCoockie booster={() => modifier("yellow")} color = "yellow" valor = "+10000"/>
                <MiniCoockie booster={() => modifier("red")} color = "red" valor = "+100000"/>
            </div>
            
            
        </div>

    );
}


export default Counter;