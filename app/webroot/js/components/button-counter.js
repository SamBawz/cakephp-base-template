import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class ButtonCounter extends LitElement {
	static properties = {
		myCount: {type: Int32Array},
		isGreen: {type: Boolean}
	};

	static styles = css`
	.counterClick {
		min-width: 5rem;
		padding: 1rem;
		color: white;
		margin-bottom: 1rem;
		border-radius: 1rem;
		background-color: ${this.isGreen ? css`green` : css`red`}
	}
	`;

	constructor() {
		super();
		this.myCount = 0;
		this.isGreen = true;
	}

	render() {
		return html`
			<button @click="${this.increaseCount}" style="background-color: ${this.isGreen ? css`green` : css`red`};" class="counterClick">${this.myCount}</button>
			<button-child count="${this.myCount}"></button-child>
		`;
	}

	increaseCount = () => {
		this.myCount += 1
		this.isGreen = !this.isGreen;
	}
}
customElements.define('button-counter', ButtonCounter);

class ButtonChild extends LitElement {
	static properties = {
		count: {type: Int32Array},
	};

	constructor() {
		super();
	}

	render() {
		return html`
			<p>I'm the buttons child but I know you clicked on my parent ${this.count} times!</p>
			<p @click="${this.resetCount}" style="font-weight: bold; cursor:pointer;">I can't reset my parents count yet. This is an experimental feature that can be found here: https://lit.dev/docs/data/context/</p>
		`;
	}

	resetCount() {
		//this.cast('minze:reset')
		this.count = 0;
	}
}
customElements.define('button-child', ButtonChild);

/*
export class ButtonCounter extends MinzeElement {
	//Properties kunnen reactief ingesteld worden of normaal (reactief forceert een rerender op veranderingen)
	//Normaal:
	normaal = "normaal";
	//Reactief:
	reactive = [
		['myCount', 0],
		['isGreen', true]
	]

	html = () => `
		<button class="counterClick" style="background-color: ${this.isGreen ? 'green' : 'red'}">${this.myCount}</button>
		<button-child count="${this.myCount}"></button-child>
	`

	css = () => `
	.counterClick {
		min-width: 5rem;
		padding: 1rem;
		color: white;
		margin-bottom: 1rem;
		border-radius: 1rem;
	}
	`

	//Functies
	increaseCount = () => {
		this.myCount += 1
		this.isGreen = !this.isGreen;
	}

	//EventListeners worden aan classes toegekend
	eventListeners = [
		['.counterClick', 'click', this.increaseCount]
	]
}

export class ButtonChild extends MinzeElement {
	attrs = [
		['count', 0]
	]
	static observedAttributes = ['count']

	html = () => `
	<p>I'm the buttons child but I know you clicked on my parent ${this.count} times!</p>
	<p class="reset" style="font-weight: bold; cursor:pointer;">Let me reset my parents count</p>
	`

	eventListeners = [
		['.reset', 'click', this.resetCount]
	]

	resetCount() {
		//this.cast('minze:reset')
		this.count = 0;
	}

	onAttributeChange() {
		//console.log(this.count) // whatever the new attribute value is
	}
}
 */
