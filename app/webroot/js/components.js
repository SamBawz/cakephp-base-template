/*
(class HelloWorld extends MinzeElement {
	html = () => `Hello World!`
}.define())
 */

export class ReactiveAttribute extends MinzeElement {
	//Attributen initieel in dash-case. Later gebruik in camelCase
	attrs = [
		'my-text'
	]

	//Plaats een observer op het attribuut zodat deze reactief wordt. Als iemand de attribuut veranderd zal de inhoud ook veranderen.
	static observedAttributes = ['my-text']

	onAttributeChange() {
		console.log("My reactive attribute has been changed and thus my content has changes as well!");
	}

	//Als er geen html wordt meegegeven acteert het element als een slot (dan moet het aan de voorkant meegeven worden)
	html = () => `
		<div>${this.myText}</div>
	`
}

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

export class MinzeCounting extends MinzeElement {
	reactive = [
		['myCount', 0]
	]

	html = () => `
		<p>I'm counting! ${this.myCount}</p>
	`

	onReady() {
		setInterval(() => {
			this.myCount += 1
		}, 1000)
	}
}

export class InternalStyling extends MinzeElement {
	html = () => `
		<p>This component uses its own styling!</p>
	`
	css = () => `
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
	`
}

//Dit element bevat een child element
export class ChildElements extends MinzeElement {
	//De styling van testClass kan niet toegepast worden want componenten zitten in een shadow dom en kunnen niet beïnvloed worden door externe styling
	//Dit kan opgelost worden door de styling
	html = () => `
		<link rel="stylesheet" href="../css/cake.generic.css">
		<h2>Comments</h2>
		<comment-element author="Sophie" comment="Hello!"></comment-element>
		<comment-element author="Sunil" comment="How are you?"></comment-element>
	`
}

export class CommentElement extends MinzeElement {
	attrs = [
		['author', 'John Doe'],
		'comment',
	]
	html = () => `
		<p>${this.comment} — <i>${this.author}</i></p>
	`
}

export class TableElement extends MinzeElement {
	//This attribute is not an array yet
	attrs = [
		'rows'
	]

	//The property that will be mapped needs to be defined as an array
	//Fill the property with the attributes content before the component gets rendered through the onReactive hook
	rowsArray = [];

	//If a ternary operator is not sufficient, we can insert a function in the HTML instead
	whenNotFirst = (row, index) => {
		if (index > 0) {
			return `
			<tr>
				${row.map((content) => `<td>${content}</td>`).join('')}
			</tr>`
		} else return '';
	}

	html = () => `
	<link rel="stylesheet" href="../css/cake.generic.css">
	<table>
		<thead>
			<tr>
				${this.rowsArray[0].map((row) => `
					<th>${row}</th>
				`).join('')}
			</tr>
		</thead>
		<tbody>
			${this.rowsArray.map((row, index) => `
				${this.whenNotFirst(row, index)}
			`).join('')}
		</tbody>
	</table>
	`

	//Before the component renders, fill this property with the content of the attribute and make it an array
	onReactive() {
		if(this.rows.length > 0) {
			this.rowsArray = JSON.parse(this.rows)
		} else {
			this.rowsArray = [[]]
		}
	}

	//TO MAKE THIS COMPONENTS ATTRIBUTE REACTIVE; set a watcher on the attribute, make the property reactive and then add a watcher event that changes the property
}


