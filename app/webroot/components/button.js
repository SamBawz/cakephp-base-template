const buttonStyle = {
	width: "5rem",
	padding: "1rem"
};

function Button() {
	const [count, setCount] = React.useState(0);
	const [red, setRed] = React.useState(false);

	return (
		<>
			<button className={"clickButton"} style={red ? {backgroundColor: "red"} : {backgroundColor: "green"}}
					onClick={buttonClick}>
				{count}
			</button>
			<ButtonText count={count} setCount={setCount}/>
		</>
	);

	function buttonClick() {
		setCount(count + 1);
		setRed(!red);
	}
}

function ButtonText({count, setCount}) {
	return (
		<>
			<p>I'm the buttons child but I know you clicked on my parent {count} times!</p>
			<h5 style={{cursor: "pointer", width: "fit-content"}} onClick={buttonClick}>Let me reset my parents count</h5>
		</>
	);

	function buttonClick() {
		setCount(0);
	}
}

const buttonDomNode = document.getElementById('button');
const buttonRoot = ReactDOM.createRoot(buttonDomNode);
buttonRoot.render(<Button/>);
