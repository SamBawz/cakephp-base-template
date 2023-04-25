const titleStyle = {
	color: "white",
	backgroundColor: "DodgerBlue",
	padding: "10px",
	fontFamily: "Arial"
};

function TitleContainer(props) {
	return(
	<div style={titleStyle}>
		{props.children}
	</div>
	);
}
