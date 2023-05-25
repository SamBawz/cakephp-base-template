import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class TitleContainer extends LitElement {
	static styles = css`
	:host {
		color: white;
		background-color: DodgerBlue;
		padding: 10px;
		fontFamily: Arial;
	}
	`;

	render() {
		return html`
			<div class="py-3">
				<slot></slot>
			</div>
			<p>My title was slotted inside this component and thus retains external styling</p>
			<p>I'm still blue from my internal styling</p>
		`;
	}
}
customElements.define('title-container', TitleContainer);
