<script type="module">
	import { BaseComponent } from 'https://symbiotejs.github.io/symbiote.js/core/BaseComponent.js';

	class MyComponent extends BaseComponent {
		init$ = {
			count: 0,
			increment: () => {
				this.$.count++;
			},
		}
	}

	MyComponent.template = /*html*/`
    <h2>{{count}}</h2>
    <button set="onclick: increment">Click me!</button>
  `;

	MyComponent.reg('my-component');



	class MySlot extends BaseComponent {}

	MySlot.template = /*html*/ `
<div class="titleDiv">
		<slot name="title">
		</slot>
</div>
		<slot name="content">
		</slot>
	`;
	MySlot.reg('my-slot');

	class MyBlock extends BaseComponent {}
	MyBlock.template = /*html*/ `<slot></slot>`;
	MyBlock.reg('my-block');
</script>

<my-component></my-component>

<my-slot>
	<h2 slot="title">Title</h2>
	<p slot="content">Content</p>
</my-slot>
