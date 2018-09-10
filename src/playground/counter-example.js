let count = 0;
const addOne = () =>{
    count++;
    reactCounterApp();
    console.log('addOne');
}

const minusOne = () =>{
    console.log('minusOne');
    count--;
    reactCounterApp();

}

const reset = () =>{
    console.log("reset")
    count = 0;
    reactCounterApp();

}



const reactCounterApp = ()=>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot);
};
reactCounterApp();