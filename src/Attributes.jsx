function boop(){
    alert("Button clicked!");
}

function Attributes(){
    let red = "red";
    
    return(
        <>
            <h1>Attributes</h1>
            <h2>className</h2>
            <p>class is a JS-reserved keyword so instead we use <span className={red}>className</span>.</p>
            <h2>Event Attributes</h2>
            <p>These use camelCase.</p>
            <button onClick={boop}>Click Me</button>
            <h2>Boolean Attributes</h2>
            <p>Attributes that pass no value are considered true.</p>
            <button disabled>Disabled</button>
            <button disabled={false}>Not Disabled</button>
        </>
    );
}

export default Attributes