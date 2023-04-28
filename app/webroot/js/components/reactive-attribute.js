import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class ReactiveAttribute extends LitElement {
	static properties = {
		text: {}
	};

	constructor() {
		super();
	}

	render() {
		return html`
			<p>You gave me the following text: ${this.text}</p>
		`;
	}
}
customElements.define('reactive-attribute', ReactiveAttribute);
