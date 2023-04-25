function Comments() {
	return (
		<>
			<h2>Comments</h2>
			<Comment text="Hello!" author="Sophie" />
			<Comment text="How are you?" author="Sunil" />
		</>
	);
}

function Comment({ text, author }) {
	return (
		<p>{text} — <i>{author}</i></p>
	);
}

const commentDomNode = document.getElementById('comments');
const commentRoot = ReactDOM.createRoot(commentDomNode);
commentRoot.render(<Comments />);
