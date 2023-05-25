import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class BootstrapDropdown extends LitElement {
	static styles = css`
	`;

	render() {
		return html`
			<div class="dropdown">
				<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
						data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
					Dropdown button
				</button>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a class="dropdown-item" href="#">Action</a>
					<a class="dropdown-item" href="#">Another action</a>
					<a class="dropdown-item" href="#">Something else here</a>
				</div>
			</div>
		`;
	}

	createRenderRoot() {
		return this;
	}
}
customElements.define('bootstrap-dropdown', BootstrapDropdown);
