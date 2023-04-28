import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class ChildComponents extends LitElement {
	static properties = {};

	static styles = css``;

	constructor() {
		super();
	}

	// Render the UI as a function of component state
	render() {
		return html`
			<h2>Comments</h2>
			<comment-component author="Sophie" comment="Hello!"></comment-component>
			<comment-component author="Sunil" comment="How are you?"></comment-component>
		`;
	}

	//Render this component directly into the children, instead of a shadow DOM. This means that the external styling on testClass will apply
	createRenderRoot() {
		return this;
	}
}
customElements.define('child-components', ChildComponents);

class CommentComponent extends LitElement {
	static properties = {
		author: {type: String},
		comment: {type: String}
	};

	static styles = css``;

	constructor() {
		super();
		this.author = "John Doe";
	}

	render() {
		return html`
			<p>${this.comment} — <i>${this.author}</i></p>
		`;
	}
}
customElements.define('comment-component', CommentComponent);
