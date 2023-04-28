import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class CountingSeconds extends LitElement {
	static properties = {
		count: {}
	};

	constructor() {
		super();
		this.count = 0;
	}

	render() {
		return html`
			<p>I'm counting! ${this.count}</p>
		`;
	}

	//This hook indicates when the component has been added to the DOM
	connectedCallback() {
		super.connectedCallback()
		setInterval(() => {
			this.count += 1
		}, 1000)
	}
}
customElements.define('counting-seconds', CountingSeconds);
