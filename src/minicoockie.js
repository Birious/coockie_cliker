const MiniCoockie = ({booster,color, valor}) => {
    return (
        <div className="coockiebooster">
            <button className="miniCookiesButton" onClick={booster}><img width="100%" src={`./coloredcoockies/${color}_coockie.png`} /></button>
            <p>{valor}</p>
            <p>Cost : {valor * 10}</p>
        </div>
    )
}

export default MiniCoockie;