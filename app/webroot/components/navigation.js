const navStyle = {
	color: "white",
	backgroundColor: "DodgerBlue",
	padding: "10px",
	fontFamily: "Arial"
};

function NavigationBar() {
	// TODO: Actually implement a navigation bar
	return(
		<>
			<h1 style={navStyle}>This component uses its own styling!</h1>
		</>
	);
}

const navDomNode = document.getElementById('navigation');
const navRoot = ReactDOM.createRoot(navDomNode);
navRoot.render(<NavigationBar />);
