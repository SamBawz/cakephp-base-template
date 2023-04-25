function Counter({counter}) {
	return (
		<>
			<h1>I'm counting! {counter}</h1>
		</>
	);
}

const counterRoot = ReactDOM.createRoot(document.getElementById('counter'));
let i = 0;
setInterval(() => {
	counterRoot.render(<Counter counter={i} />);
	i++;
}, 1000);
