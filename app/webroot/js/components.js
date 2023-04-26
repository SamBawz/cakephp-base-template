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
	//Properties kunnen reactief ingesteld worden of normaal
	//Normaal:
	myColor = "green";
	//Reactief:
	reactive = [
		['myCount', 0]
	]

	html = () => `
		<button class="counterClick">${this.myCount}</button>
	`

	//Functies
	increaseCount = () => {
		this.myCount += 1
	}

	//EventListeners worden aan classes toegekend
	eventListeners = [
		['.counterClick', 'click', this.increaseCount]
	]
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

/*
<table>
	<thead>
	<tr>
		{
			rows[0].map((row, index) => (
				//About keys: https://legacy.reactjs.org/docs/lists-and-keys.html
				<th key={index}>{ row }</th>
			))
		}
	</tr>
	</thead>
	<tbody>
	{
		rows.map((row, index) => (
			//JS expressions https://legacy.reactjs.org/docs/conditional-rendering.html
			index > 0 &&
			<tr key={index}>
				{
					row.map((content, index) => (
						<td key={index}>{ content }</td>
					))
				}
			</tr>
		))
	}
	</tbody>
</table>

${this.isVisible ? '<div>Hello Minze!</div>' : ''}
    ${this.whenVisible()}
 */

export class TableElement extends MinzeElement {
	attrs = [
		['rows', [['h1', 'h2'], ['c1', 'c2']]]
	]

	whenNotFirst = (row, index) => {
		if (index > 0) {
			return `
			<tr>
				${row.map((content) => `<td>${content}</td>`)}
			</tr>`
		} else return '';
	}

	html = () => `
	<table>
		<thead>
			<tr>
				${this.rows[0].map((row) => `
					<th>${row}</th>
				`).join('')}
			</tr>
		</thead>
		<tbody>
			${this.rows.map((row, index) => `
				${this.whenNotFirst(row, index)}
			`).join('')}
		</tbody>
	</table>
	`
	onReady() {
		console.log(this.rows)
	}
}


