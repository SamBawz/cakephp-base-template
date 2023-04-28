import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class TableComponent extends LitElement {
	//Create the properties
	static properties = {
		rows: {type: Array},
	};
	// Define scoped styles right with your component, in plain CSS
	static styles = css``;

	constructor() {
		super();
		// Declare reactive properties
		this.rows = [[]];
	}

	//If a ternary operator is not sufficient, we can insert a function in the HTML instead
	whenNotFirst(row, index) {
		if (index > 0) {
			return html`
				<tr>
					${row.map((content) => html`<td>${content}</td>`)}
				</tr>
			`
		} else return html``;
	}

	// Render the UI as a function of component state
	render() {
		return html`
			<table>
				<thead>
					<tr>
						${this.rows[0].map((row) => html`
						<th>${row}</th>
					`)}
					</tr>
				</thead>
				<tbody>
					${this.rows.map((row, index) => html`
						${this.whenNotFirst(row, index)}
					`)}
				</tbody>
			</table>
		`;
	}

	createRenderRoot() {
		return this;
	}
}
customElements.define('table-component', TableComponent);
