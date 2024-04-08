import React from "react";
import confetti from "canvas-confetti"
import List from "./assets/components/List";

function App(){
    const greetings = 'Good morning';
    const date = new Date();
    const [hide, setHide]  = React.useState(false);
    const hour = date.getHours();
    console.log(date.getHours());
    const data = ['React', 'hooks', 'components', 'context', 'state', 'props', 'redux']
    function addconfetti(event) {
        console.log(event)
        confetti({
            particleCount:  5,
            origin:{
                X: event.pageX / window.innerWidth,
                y: event.pageY / window.innerHeight,
            }
        })
    }
    // return (<div onMouseMove={addconfetti}>
    //     <h1>{hour < 12 ? greetings :'Good night'}, Hello World</h1>
    //     <p>This is a React App</p>
    // </div>)
    if (hour < 12){
        return (<div onMouseMove={addconfetti}>
            <h1 onClick={addconfetti}>Good day, Hello World!</h1>
            {!hide && <p>this is a react app</p>}
            <ul>
                {data.map((item) => (
                    <List item={item} key={crypto.randomUUID()}/>
                ))}
            </ul>
            <button onClick={()=> setHide(!hide)}>Change begins with me right now</button>
        </div>)
} return (<div onMouseMove={addconfetti}>
    <h1 onClick={addconfetti}>{greetings}, Hello world</h1>
    <p>It's too late to say hello.</p>
   
</div>)
};

export default App;