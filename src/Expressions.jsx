// JSX Expressions

function addition(x , y){
    return x + y;
}

function Expressions(){
    let myName = "Avery";

    let me = {name:"Avery", age:34};

    return(
        <>
            <h1>Expressions</h1>
            {/* this comment is one!*/}

            <h2>Inline Expression</h2>
            <p>10 * 10 = {10*10}</p>

            <h2>Variable Expression</h2>
            <p>My name is {myName}</p>

            <h2>Function Expression</h2>
            <p>2 + 6 = {addition(2,6)}</p>

            <h2>Object Properties</h2>
            <p>I am {me.age} years old.</p>
        </>
    );
}

export default Expressions;