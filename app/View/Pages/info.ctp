<?php
?>
<script type="text/babel" src="/cakephp-base-template/components/navigation.js"></script>
<script type="text/babel" src="/cakephp-base-template/components/comments.js"></script>
<script type="text/babel" src="/cakephp-base-template/components/counter.js"></script>
<script type="text/babel" src="/cakephp-base-template/components/parameter.js"></script>
<script type="text/babel" src="/cakephp-base-template/slots/title-container.js"></script>
<script type="text/babel" src="/cakephp-base-template/slots/table.js"></script>
<script type="text/babel" src="/cakephp-base-template/components/button.js"></script>

<div class="content">
	<section>This paragraph is a part of vanilla HTML.</section>
	<section id="navigation"></section>
	<section id="comments"></section>
	<section id="counter"></section>
	<section id="parameter"></section>
	<section id="title-container"></section>
	<section id="title-container2"></section>
	<section id="table"></section>
	<section id="button"></section>
</div>


<script type="text/babel">
	//Comments

	//Parameters
	const parameterRoot = ReactDOM.createRoot(document.getElementById('parameter'));
	parameterRoot.render(
		<Parameter
			text={"<?php echo "This text is generated with PHP" ?>"}
		/>
	);

	setTimeout(() => {
		parameterRoot.render(
			<Parameter
				text={"<?php echo "I just replaced this text with another PHP generated line" ?>"}
			/>
		);
	}, 5000)

	//Title container slots
	ReactDOM.createRoot(document.getElementById('title-container')).render(
		<TitleContainer>
			<h2>This is a title</h2>
			<h1>My title was slotted inside the component</h1>
		</TitleContainer>
	);
	ReactDOM.createRoot(document.getElementById('title-container2')).render(
		<TitleContainer>
			<h1>This component has two instances</h1>
		</TitleContainer>
	);

	//Table
	ReactDOM.createRoot(document.getElementById('table')).render(
		<Table rows={[["head1", "head2", "head3"], ["r1c1", "r1c2", "r1c3"], ["r2c1", "r2c2", "r2c3"]]}/>
	);
</script>

<!--
Veel mensen zeggen dat dit hoort te werken maar de enige oplossing die voor mij werkte was de script tag boven aan de pagina zetten met de render functie voor het component
onder aan de pagina
<script data-plugins="transform-modules-umd" data-presets="react" data-type="module" type="text/babel" src="/cakephp-base-template/components/parameter.js">
	//import parameterRoot from "/cakephp-base-template/components/parameter";
	import { Parameter } from "./components/parameter.js";
	//import parameterRoot from "./components/parameter";
	ReactDOM.createRoot(document.getElementById('parameter')).render(<Parameter text={"Hoi 2"}/>);
	//parameterRoot.render(<Parameter text={"Hoi 2"}/>)
</script>
-->


