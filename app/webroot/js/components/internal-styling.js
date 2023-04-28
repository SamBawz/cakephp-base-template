import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class InternalStyling extends LitElement {
	static properties = {};

	static styles = css`
    :host {
		color: white;
		background-color: DodgerBlue;
		padding: 10px;
		fontFamily: Arial;
		transition: all ease 1s;
	}
	:host(:hover) {
		background-color: red;
	}
  `;

	constructor() {
		super();
	}

	render() {
		return html`
			<p>This component has its own styling!</p>
		`;
	}
}
customElements.define('internal-styling', InternalStyling);
