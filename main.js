const root = ReactDOM.createRoot(document.querySelector('#root'));
function Counter() {
    return (
        <div class ="counter">
            <button>+</button>
            <h2>{0}</h2>
            <button>-</button>
            <button>C</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Today : {new Date().toDateString()}</h1>
            <h2>Sum = 0</h2>
            <button class="btn-add">Add Counter</button>
            <Counter />
        </div>
    );
}
root.render(<App />);

