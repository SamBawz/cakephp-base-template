<?php
?>
<div class="content">
	<my-element></my-element>
	<internal-styling></internal-styling>
	<child-components></child-components>
	<counting-seconds></counting-seconds>
	<reactive-attribute id="textChange" text="<?php echo "This text has been generated with PHP" ?>"></reactive-attribute>
	<title-container>
		<h2>This is a title</h2>
	</title-container>
	<title-container>
		<h1>Here's another title slot. It's easy to duplicate components with Lit</h1>
	</title-container>
	<table-component rows='[["head1", "head2", "head3"], ["r1c1", "r1c2", "r1c3"], ["r2c1", "r2c2", "r2c3"]]'></table-component>
	<button-counter></button-counter>
</div>

<!--
Kunnen allemaal apart gezet en ingeladen worden maar dan moeten de elementen wel defined worden in het bestand waar ze aangemaakt worden
<script type="module" src="/cakephp-base-template/components/helloworld.js"></script>
-->

<!--
Aan de andere kant kunnen alle elementen ook geexporteerd/geimporteerd en tegelijkertijd defined worden op deze manier
Deze methode mogelijk gebruiken om elementen te grouperen? Form components, table components, etc
-->
<script type="module">


	/*
	import * as Elements from '../js/components.js'
	Minze.defineAll(Elements)

	import * as Slots from '../js/slots.js'
	Minze.defineAll(Slots)

	 */
</script>
<script type="module" src="../js/components/my-element.js"></script>
<script type="module" src="../js/components/internal-styling.js"></script>
<script type="module" src="../js/components/child-components.js"></script>
<script type="module" src="../js/components/counting-seconds.js"></script>
<script type="module" src="../js/components/reactive-attribute.js"></script>
<script type="module" src="../js/components/table-component.js"></script>
<script type="module" src="../js/components/button-counter.js"></script>

<script type="module" src="../js/slots/title-container.js"></script>

<script>
	setTimeout(() => {
		document.getElementById("textChange").setAttribute("text", "<?php echo "My reactive attribute has been changed and thus my content has changes as well!" ?>");
	}, 5000);
</script>


