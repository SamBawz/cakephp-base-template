//Slotted elementen lijken wel de styling mee te nemen! Deze bevinden zich niet in een shadow DOM!
export class TitleContainer extends MinzeElement {
	html = () => `
	<slot></slot>
    <p>My title was slotted inside this component and thus retains external styling</p>
    <p>I'm still blue from my internal styling</p>
  	`
	css = () => `
	:host {
		color: white;
		background-color: DodgerBlue;
		padding: 10px;
		fontFamily: Arial;
	}
	`
}

export class FormContainer extends MinzeElement {
	html = () => `
	<div class="form-container">
		<p class="testClass">This is inside a component</p>
		<slot></slot>
	</div>
	`
	css = () => `
	.form-container {
	background-color: rgba(0,0,0,0.1);
	}
	`
}
