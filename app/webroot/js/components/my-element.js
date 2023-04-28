import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class MyElement extends LitElement {
	//Create the properties
	static properties = {
		text: {},
	};
	// Define scoped styles right with your component, in plain CSS
	static styles = css``;

	constructor() {
		super();
		// Declare reactive properties
		this.text = 'This is my first Lit element!';
	}

	// Render the UI as a function of component state
	render() {
		return html`
			<p class="testClass">${this.text}</p>
			<p>The text above uses external styling because I do not reside in a shadow root!</p>
			<p>This way I can still use Bootstrap or other classes :)</p>
		`;
	}

	//Render this component directly into the children, instead of a shadow DOM. This means that the external styling on testClass will apply
	createRenderRoot() {
		return this;
	}
}
customElements.define('my-element', MyElement);
