const MiniCoockie = ({booster,color, valor, multiple}) => {

    return (
        <div className="coockiebooster">
            <button className="miniCookiesButton" onClick={booster}><img draggable="false" width="100%" src={`./coloredcoockies/${color}_coockie.png`} /></button>
            {multiple ? <p>+{valor} 🍪⏲️</p> : <p>+{valor} 🍪🖱️</p>}
            {multiple ? <p>Cost : {valor * 100} 🍪</p> : <p>Cost : {valor * 10} 🍪</p>}
        </div>
    )
}

export default MiniCoockie;