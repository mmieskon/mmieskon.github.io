import { useState } from "react";
// import background from "./img/joulu-puki-background.png"


export default function MainPage() {
    const [password, setPassword] = useState('');
    const [showPrize, setShowPrize] = useState(false);
    function handleOnClaim() {
        if (password['input'] === "joulu-puki123") {
            setShowPrize(true);
        }
    }
    function handleEnter(event) {
        if (event.key === 'Enter') {
            handleOnClaim(event);
        }
    }
    function handleInputChange(e) {
        setPassword({input: e.target.value});
    }
    //  style={{backgroundImage: `url(${background})`}}
    return <>
        <div>
            <div className="title">
                <h1>Terve tuloa joulu-pukkin pajaan!</h1>
            </div>
            <Claim onEnter={handleEnter} onClaim={handleOnClaim} handleInputChange={handleInputChange}/>
            <Prize showPrize={showPrize}/>
        </div>
    </>
}

function Claim({onEnter, onClaim, handleInputChange}) {
    return <>
        <div className="claim">
            <p>Lunasta lahja extra-salaisella koodilla!</p>
            <input type="text" onChange={handleInputChange} onKeyDown={onEnter}></input>
            <button className="button" onClick={onClaim}>Lunasta</button>
        </div>
    </>
}

function Prize({showPrize}) {
    if (!showPrize) {
        return <></>
    }
    return <>
        <div className="prize">
            <h1>Onneksi olkoon!</h1>
            <p>Tämä kuponki sisältää koko perheen matkan pakohuoneeseen!</p>
            <p>Pakohuoneen paikka ja aika ovat vapaasti valittavissa.</p>
            <p>Tässä esimerkkinä vaihtoehtoja</p>
            <a href="https://www.trapfactory.fi">www.trapfactory.fi</a> <br/>
            <a href="https://www.truescape.fi">www.truescape.fi</a> <br/>
            <a href="https://www.exite.fi">www.exite.fi</a> <br/>
        </div>
    </>
}


